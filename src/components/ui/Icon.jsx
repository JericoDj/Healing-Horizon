/**
 * Icon — one inline SVG set, no icon-font, no runtime dependency.
 *
 * House style: 24×24 box, 1.6px stroke, round caps and joins, no fills.
 * That weight sits alongside Inter at body size without shouting. Icons
 * inherit `currentColor`, so they take the colour of whatever contains them.
 *
 * Decorative by default (aria-hidden). Pass `title` only when the icon is the
 * sole content of a control and there is no visible label.
 */

const paths = {
  // Services
  person: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.8 20.2a7.2 7.2 0 0 1 14.4 0" />
    </>
  ),
  hearts: (
    <g transform="translate(0, -2.2)">
      <path d="M9.4 18.4 4.6 13.7a3.2 3.2 0 0 1 4.5-4.5l.3.3.3-.3a3.2 3.2 0 0 1 4.5 4.5l-4.8 4.7Z" />
      <path d="M15.6 14.2l3.3-3.3a3 3 0 0 0-4.2-4.2l-.2.2" opacity="0.55" />
    </g>
  ),
  sprout: (
    <>
      <path d="M12 21v-7.5" />
      <path d="M12 13.5C12 10.6 9.7 8.3 6.8 8.3c0 2.9 2.3 5.2 5.2 5.2Z" />
      <path d="M12 12.4c0-3.1 2.5-5.6 5.6-5.6 0 3.1-2.5 5.6-5.6 5.6Z" />
    </>
  ),
  home: (
    <>
      <path d="M4 10.6 12 4l8 6.6V20a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1v-9.4Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2 19 6v5.5c0 4.3-2.9 7.6-7 9.3-4.1-1.7-7-5-7-9.3V6l7-2.8Z" />
      <path d="m9.2 12.1 2 2 3.6-3.9" />
    </>
  ),
  group: (
    <>
      <circle cx="9" cy="8.6" r="3" />
      <path d="M3.6 19.4a5.4 5.4 0 0 1 10.8 0" />
      <path d="M16 6.2a3 3 0 0 1 0 5.6" opacity="0.6" />
      <path d="M17.4 14.6a5.4 5.4 0 0 1 3 4.8" opacity="0.6" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6.5" width="12.5" height="11" rx="2.4" />
      <path d="m15.5 12.6 5.5 3.1V8.3l-5.5 3.1Z" />
    </>
  ),

  // Navigation & controls
  arrowRight: <path d="M4.5 12h15m0 0-5.5-5.5M19.5 12 14 17.5" />,
  arrowLeft: <path d="M19.5 12h-15m0 0L10 6.5M4.5 12 10 17.5" />,
  chevronDown: <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />,
  chevronRight: <path d="m9.5 6.5 5.5 5.5-5.5 5.5" />,
  close: <path d="M6.2 6.2 17.8 17.8M17.8 6.2 6.2 17.8" />,
  menu: <path d="M4 7.5h16M4 12h16M4 16.5h16" />,
  check: <path d="m5 12.6 4.6 4.6L19 7.4" />,
  plus: <path d="M12 5.5v13M5.5 12h13" />,
  minus: <path d="M5.5 12h13" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.2" />
      <path d="m15.6 15.6 4 4" />
    </>
  ),
  pause: (
    <>
      <path d="M9.5 5.5v13" />
      <path d="M14.5 5.5v13" />
    </>
  ),
  play: <path d="M8 5.6 18.5 12 8 18.4V5.6Z" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <polygon points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5 15.5 8.5" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.4A1.4 1.4 0 0 1 5.4 4H10a2.6 2.6 0 0 1 2 .95A2.6 2.6 0 0 1 14 4h4.6A1.4 1.4 0 0 1 20 5.4v11.9a1.4 1.4 0 0 1-1.4 1.4H14a2 2 0 0 0-2 1.3 2 2 0 0 0-2-1.3H5.4A1.4 1.4 0 0 1 4 17.3V5.4Z" />
      <path d="M12 6.9v12.1" opacity="0.5" />
    </>
  ),
  external: (
    <>
      <path d="M14 4.8h5.2V10" />
      <path d="M19.2 4.8 11.6 12.4" />
      <path d="M18 14v4.4a1.2 1.2 0 0 1-1.2 1.2H5.6a1.2 1.2 0 0 1-1.2-1.2V7.2A1.2 1.2 0 0 1 5.6 6H10" />
    </>
  ),

  // Contact
  phone: (
    <path d="M8.1 4.6H5.4A1.4 1.4 0 0 0 4 6.1c0 7.7 6.2 13.9 13.9 13.9a1.4 1.4 0 0 0 1.4-1.4v-2.7l-3.7-1.5-1.8 2.2a11.3 11.3 0 0 1-5.4-5.4l2.2-1.8L8.1 4.6Z" />
  ),
  mail: (
    <>
      <rect x="3.2" y="5.6" width="17.6" height="12.8" rx="2.2" />
      <path d="m4.4 7.4 7.6 5.4 7.6-5.4" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21c4-4.4 6-7.7 6-10a6 6 0 1 0-12 0c0 2.3 2 5.6 6 10Z" />
      <circle cx="12" cy="10.8" r="2.3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.4V12l3.2 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.6" y="5.4" width="16.8" height="15" rx="2.2" />
      <path d="M3.6 10h16.8M8.4 3.4v3.6M15.6 3.4v3.6" />
    </>
  ),

  // Feedback
  alert: (
    <>
      <path d="M12 4.6 21 20H3l9-15.4Z" />
      <path d="M12 10.4v4M12 17.2h.01" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 11.2v5M12 8h.01" />
    </>
  ),
  quote: (
    <path d="M9.4 6.6C6.6 8 5 10.4 5 13.4c0 2.5 1.5 4 3.5 4s3.3-1.4 3.3-3.3-1.3-3.2-3-3.2h-.6c.3-1.4 1.2-2.6 2.7-3.5l-1.5-.8Zm9 0C15.6 8 14 10.4 14 13.4c0 2.5 1.5 4 3.5 4s3.3-1.4 3.3-3.3-1.3-3.2-3-3.2h-.6c.3-1.4 1.2-2.6 2.7-3.5l-1.5-.8Z" />
  ),
  sparkle: (
    <path d="M12 4.2 13.6 9 18.4 10.6 13.6 12.2 12 17 10.4 12.2 5.6 10.6 10.4 9 12 4.2Z" />
  ),
  heartHand: (
    <g transform="translate(0, -2.8)">
      <path d="M12 20.5s-6.5-3.9-6.5-8.4A3.6 3.6 0 0 1 12 9.6a3.6 3.6 0 0 1 6.5 2.5c0 4.5-6.5 8.4-6.5 8.4Z" />
    </g>
  ),
  leaf: (
    <>
      <path d="M20 4.6c0 8.2-4.3 12.4-9.6 12.4A4.8 4.8 0 0 1 5.6 12c0-5.4 5.6-7.4 14.4-7.4Z" />
      <path d="M4.4 20c1.6-4 4.6-7.2 8.4-9.2" />
    </>
  ),
  shieldCheck: (
    <>
      <path d="M12 3.2 19 6v5.5c0 4.3-2.9 7.6-7 9.3-4.1-1.7-7-5-7-9.3V6l7-2.8Z" />
      <path d="m9.2 12.1 2 2 3.6-3.9" />
    </>
  ),
};

export const iconNames = Object.keys(paths);

export function Icon({ name, size = 20, strokeWidth = 1.6, title, className, ...rest }) {
  const shape = paths[name];
  if (!shape) {
    if (import.meta.env.DEV) console.warn(`<Icon /> has no icon named "${name}"`);
    return null;
  }

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title || undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {shape}
    </svg>
  );
}

export default Icon;
