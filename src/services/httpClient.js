/**
 * httpClient.js — the only place in the app that talks to the network.
 *
 * Right now there is no backend, so `request()` routes through a mock
 * transport that simulates latency and occasional failure. When a real API
 * exists, set VITE_API_BASE_URL and flip USE_MOCK to false — no caller
 * changes, because every caller already handles ApiError.
 */

export const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL ?? '';
const USE_MOCK = !API_BASE_URL;
const DEFAULT_TIMEOUT = 12000;

/** Normalised error every service and controller can rely on. */
export class ApiError extends Error {
  constructor(message, { status = 0, code = 'unknown_error', fieldErrors = null } = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    /** Optional per-field messages, merged straight into form state. */
    this.fieldErrors = fieldErrors;
  }
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * Mock transport. Echoes the payload back with a generated reference so the
 * UI has something realistic to display on success.
 */
async function mockRequest(path, { body } = {}) {
  await delay(650 + Math.random() * 700);

  // A deliberate escape hatch for exercising the error UI in development.
  if (typeof body?.email === 'string' && body.email.startsWith('fail@')) {
    throw new ApiError('We could not send your message. Please try again.', {
      status: 500,
      code: 'mock_failure',
    });
  }

  return {
    ok: true,
    reference: makeReference(path),
    receivedAt: new Date().toISOString(),
    echo: body ?? null,
  };
}

function makeReference(path) {
  const prefix = path.includes('booking') ? 'HH-B' : path.includes('contact') ? 'HH-C' : 'HH';
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const noise = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `${prefix}-${stamp}${noise}`;
}

/**
 * @param {string} path            e.g. '/contact'
 * @param {object} [options]
 * @param {string} [options.method]
 * @param {object} [options.body]
 * @param {AbortSignal} [options.signal]
 */
export async function request(path, { method = 'POST', body, headers, signal } = {}) {
  if (USE_MOCK) return mockRequest(path, { body });

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);
  if (signal) signal.addEventListener('abort', () => controller.abort(), { once: true });

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      throw new ApiError(payload?.message ?? 'Something went wrong. Please try again.', {
        status: response.status,
        code: payload?.code ?? 'request_failed',
        fieldErrors: payload?.fieldErrors ?? null,
      });
    }

    return payload;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (error?.name === 'AbortError') {
      throw new ApiError('That took too long. Please check your connection and try again.', {
        code: 'timeout',
      });
    }
    throw new ApiError('We could not reach the server. Please try again.', {
      code: 'network_error',
    });
  } finally {
    clearTimeout(timeoutId);
  }
}

export default { request, ApiError, API_BASE_URL };
