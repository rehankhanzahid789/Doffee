// Doffee custom line-icon set.
// Single consistent style: rounded caps/joins, ~1.75 stroke, currentColor fill/stroke.
// No emojis, no third-party icon packs — every glyph here is hand-drawn for the brand.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Svg({ children, size = 22, className = "", ...rest }) {
  return (
    <svg
      {...base}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function BagIcon(props) {
  return (
    <Svg {...props}>
      <path d="M6.5 8.5h11l.9 11a2 2 0 0 1-2 2.2H7.6a2 2 0 0 1-2-2.2l.9-11Z" />
      <path d="M9 8.5V6.8a3 3 0 0 1 6 0v1.7" />
    </Svg>
  );
}

export function UserIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="8.2" r="3.4" />
      <path d="M5 20c.9-3.6 3.7-5.6 7-5.6s6.1 2 7 5.6" />
    </Svg>
  );
}

export function MailIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3.2" y="5.5" width="17.6" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </Svg>
  );
}

export function LockIcon(props) {
  return (
    <Svg {...props}>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
      <path d="M7.5 10.5V8a4.5 4.5 0 0 1 9 0v2.5" />
      <path d="M12 14.4v2.2" />
    </Svg>
  );
}

export function EyeIcon(props) {
  return (
    <Svg {...props}>
      <path d="M2.5 12S6 5.6 12 5.6 21.5 12 21.5 12 18 18.4 12 18.4 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </Svg>
  );
}

export function EyeOffIcon(props) {
  return (
    <Svg {...props}>
      <path d="M3.5 3.5l17 17" />
      <path d="M10.6 5.9A10.5 10.5 0 0 1 12 5.6c6 0 9.5 6.4 9.5 6.4a15.8 15.8 0 0 1-3.4 4.2M7.4 7.4C5 9 2.5 12 2.5 12s3.5 6.4 9.5 6.4c1.1 0 2.1-.2 3-.5" />
      <path d="M9.9 10a2.6 2.6 0 0 0 3.7 3.6" />
    </Svg>
  );
}

export function PinIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 21s7-6.2 7-11.4A7 7 0 0 0 5 9.6C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </Svg>
  );
}

export function PhoneIcon(props) {
  return (
    <Svg {...props}>
      <path d="M6 3.5h2.6l1.3 4-1.9 1.7a12 12 0 0 0 5.8 5.8l1.7-1.9 4 1.3V17c0 1.7-1.4 3-3 2.9C9.6 19.4 4.6 14.4 3.1 7.5a3 3 0 0 1 2.9-4Z" />
    </Svg>
  );
}

export function ClockIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </Svg>
  );
}

export function CupIcon(props) {
  return (
    <Svg {...props}>
      <path d="M5.5 8h11l-.8 9.2A2.5 2.5 0 0 1 13.2 19.5H9.8a2.5 2.5 0 0 1-2.5-2.3L5.5 8Z" />
      <path d="M16.5 9.5H18a2.6 2.6 0 0 1 0 5.2h-1" />
      <path d="M8.5 4.7c0 .9 1 1-1 2S6.5 8 6.5 8M12.5 4.5c0 .9 1 1-1 2s-1 1.3-1 1.3" />
    </Svg>
  );
}

export function DonutIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M8.3 7.2c.4.9-.2 1.6-1 1.9M15.7 7.2c-.4.9.2 1.6 1 1.9M9 17.3c.6-.7 1.6-.7 2 0" />
    </Svg>
  );
}

export function InstagramIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.1" cy="6.9" r="0.6" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function FacebookIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M13.8 8.6h1.7V6.2h-1.9c-1.7 0-2.8 1.1-2.8 2.9v1.4H9.2v2.4h1.6v6.6h2.4v-6.6h1.8l.3-2.4h-2.1V9.4c0-.5.3-.8.6-.8Z" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function TikTokIcon(props) {
  return (
    <Svg {...props}>
      <path d="M13.2 3.8v10.6a2.6 2.6 0 1 1-2.1-2.6" />
      <path d="M13.2 3.8c.4 1.9 1.7 3.2 3.6 3.5" />
    </Svg>
  );
}

export function LinkedInIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M8.4 10.2v6.3M8.4 7.7v.02" />
      <path d="M11.6 16.5v-3.6c0-1.2.9-2 2-2s1.9.8 1.9 2v3.6" strokeLinejoin="round" />
    </Svg>
  );
}

export function ChevronIcon(props) {
  return (
    <Svg {...props}>
      <path d="M9 6l6 6-6 6" />
    </Svg>
  );
}

export function ArrowIcon(props) {
  return (
    <Svg {...props}>
      <path d="M4.5 12h15" />
      <path d="M13.5 6.5 19 12l-5.5 5.5" />
    </Svg>
  );
}

export function CheckIcon(props) {
  return (
    <Svg {...props}>
      <path d="M4.5 12.8 9 17.3 19.5 6.7" />
    </Svg>
  );
}

export function CloseIcon(props) {
  return (
    <Svg {...props}>
      <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
    </Svg>
  );
}

export function StarIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 4.2 14.3 9.6 20 10.3l-4.3 3.9 1.2 5.6-4.9-3-4.9 3 1.2-5.6L4 10.3l5.7-.7Z" />
    </Svg>
  );
}

export function MenuIcon(props) {
  return (
    <Svg {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function PlusIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 5v14M5 12h14" />
    </Svg>
  );
}

export function MinusIcon(props) {
  return (
    <Svg {...props}>
      <path d="M5 12h14" />
    </Svg>
  );
}

// Maintenance modal glyph: coffee cup with a small wrench crossed over it —
// original composition, not a real-world icon/emoji.
export function MaintenanceIcon(props) {
  return (
    <Svg {...props} strokeWidth={1.6}>
      <path d="M6 10h9l-.7 7.6A2.2 2.2 0 0 1 12.1 19.6H9.9a2.2 2.2 0 0 1-2.2-2Z" />
      <path d="M15 11.3h1.3a2.3 2.3 0 0 1 0 4.6H15" />
      <path d="M15.8 4.6a2.2 2.2 0 0 0-3 3l-5.4 5.4 1 1L13.8 8.6a2.2 2.2 0 0 0 3-3l-1.4 1.4-1-1Z" fill="currentColor" stroke="none" />
    </Svg>
  );
}
