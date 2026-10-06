/**
 * firebase.js — the website's connection to the healinghorizons-mailer
 * Cloud Functions in the `dignity-with-care` Firebase project.
 *
 * Firebase web config is shipped to every browser by design, so it is not a
 * password — access is controlled by Firestore rules (browsers get none) and
 * by the functions themselves. It is still read from .env (VITE_FIREBASE_*)
 * rather than written here, so the key is not committed to the repository
 * and secret scanners stay quiet. Set the same variables on the host
 * (Netlify / Vercel) so production builds include them.
 */

import { initializeApp } from 'firebase/app';
import { connectFunctionsEmulator, getFunctions, httpsCallable } from 'firebase/functions';

const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
};

const missing = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);
if (missing.length > 0) {
  // Forms will fail with the generic "could not send" message; this says why.
  console.error(`Firebase config missing from .env: ${missing.join(', ')}`);
}

/** Must match setGlobalOptions({ region }) in functions/index.js. */
const FUNCTIONS_REGION = 'us-east4';

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app, FUNCTIONS_REGION);

// `VITE_FIREBASE_EMULATOR=true npm run dev` sends forms to the local emulator.
if (import.meta.env.DEV && import.meta.env.VITE_FIREBASE_EMULATOR === 'true') {
  connectFunctionsEmulator(functions, '127.0.0.1', 5001);
}

/** Returns a function that calls the named Cloud Function and resolves to its data. */
export function callable(name) {
  const fn = httpsCallable(functions, name, { timeout: 20000 });
  return async (payload) => (await fn(payload)).data;
}
