import React from "react";

export function GSoCSunLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2L14.4 4.8L18.2 4.4L18.8 8.2L22 10.2L20.6 13.8L22 17.4L18.8 19.4L18.2 23.2L14.4 22.8L12 25.6L9.6 22.8L5.8 23.2L5.2 19.4L2 17.4L3.4 13.8L2 10.2L5.2 8.2L5.8 4.4L9.6 4.8L12 2Z"
        fill="#E37400"
        transform="scale(0.85) translate(2, 0)"
      />
      <path
        d="M9.5 11L7.5 13L9.5 15M14.5 11L16.5 13L14.5 15M13 9.5L11 16.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GoogleWordmark({ className = "h-5" }: { className?: string }) {
  return (
    <svg
      width="58"
      height="20"
      viewBox="0 0 58 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Google"
      role="img"
    >
      <path
        d="M14.2601 7.32441H7.43372V9.33055H12.292C12.0546 12.1421 9.71249 13.3446 7.49996 13.3446C4.6707 13.3446 2.20139 11.1188 2.20139 8.00211C2.20139 4.96508 4.5552 2.62625 7.50641 2.62625C9.78343 2.62625 11.1248 4.07652 11.1248 4.07652L12.5318 2.62156C12.5318 2.62156 10.7261 0.614258 7.4343 0.614258C3.24316 0.614258 0 4.14857 0 7.96638C0 11.7075 3.05029 15.3566 7.54335 15.3566C11.4929 15.3566 14.3844 12.6534 14.3844 8.65578C14.3844 7.81233 14.2618 7.325 14.2618 7.325L14.2601 7.32441Z"
        fill="#5F6368"
      />
      <path
        d="M20.0382 5.87109C17.2611 5.87109 15.2714 8.0383 15.2714 10.5698C15.2714 13.1371 17.2013 15.3465 20.071 15.3465C22.6687 15.3465 24.7968 13.3632 24.7968 10.6249C24.7968 7.48713 22.3211 5.87109 20.0382 5.87109V5.87109ZM20.0658 7.73197C21.4317 7.73197 22.7256 8.8349 22.7256 10.6126C22.7256 12.3522 21.4358 13.4868 20.0599 13.4868C18.5462 13.4868 17.3526 12.2761 17.3526 10.5985C17.3526 8.95849 18.5315 7.73197 20.0658 7.73197V7.73197Z"
        fill="#5F6368"
      />
      <path
        d="M30.3486 5.87109C27.5715 5.87109 25.5812 8.0383 25.5812 10.5698C25.5812 13.1371 27.5117 15.3465 30.3809 15.3465C32.9785 15.3465 35.1067 13.3632 35.1067 10.6249C35.1067 7.48713 32.6315 5.87109 30.3486 5.87109V5.87109ZM30.3762 7.73197C31.7415 7.73197 33.036 8.8349 33.036 10.6126C33.036 12.3522 31.7462 13.4868 30.3697 13.4868C28.856 13.4868 27.6624 12.2761 27.6624 10.5985C27.6624 8.95849 28.8413 7.73197 30.3762 7.73197V7.73197Z"
        fill="#5F6368"
      />
      <path
        d="M40.5172 5.87583C37.97 5.87583 35.965 8.1063 35.965 10.6121C35.965 13.4634 38.2877 15.3565 40.4733 15.3565C41.8217 15.3565 42.5433 14.8205 43.0739 14.2055V15.1427C43.0739 16.7769 42.0808 17.7556 40.5811 17.7556C39.1331 17.7556 38.4061 16.6797 38.154 16.0693L36.3314 16.8308C36.9763 18.1967 38.2795 19.6212 40.5964 19.6212C43.1308 19.6212 45.0625 18.0263 45.0625 14.6817V6.04335H43.0739V6.96295C42.463 6.30459 41.627 5.87524 40.5172 5.87524V5.87583ZM40.7019 7.73319C41.9512 7.73319 43.2345 8.79922 43.2345 10.6203C43.2345 12.4706 41.9542 13.4903 40.6744 13.4903C39.3154 13.4903 38.0509 12.3874 38.0509 10.6372C38.0509 8.81796 39.3641 7.7326 40.7019 7.7326V7.73319Z"
        fill="#5F6368"
      />
      <path
        d="M53.7268 5.86768C51.3231 5.86768 49.3035 7.77892 49.3035 10.5992C49.3035 13.5865 51.5535 15.3536 53.9578 15.3536C55.9639 15.3536 57.1956 14.2565 57.9302 13.2743L56.2887 12.1842C55.8637 12.8438 55.152 13.4886 53.9654 13.4886C52.6322 13.4886 52.019 12.7594 51.6397 12.053L57.9982 9.41722L57.6682 8.64112C57.0561 7.12817 55.6233 5.86768 53.7268 5.86768ZM53.8094 7.68989C54.6759 7.68989 55.2997 8.15028 55.5641 8.70204L51.3178 10.475C51.1349 9.10209 52.437 7.68989 53.8094 7.68989V7.68989Z"
        fill="#5F6368"
      />
      <path d="M48.3368 1.10449H46.3892V15.0695H48.3368V1.10449Z" fill="#5F6368" />
    </svg>
  );
}

export function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function UserIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

export function VideoPlayIcon({ className = "w-6 h-6 text-[#1a73e8]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
    </svg>
  );
}

export function CommunityIcon({ className = "w-6 h-6 text-[#1e8e3e]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  );
}

export function LightbulbIcon({ className = "w-6 h-6 text-[#e37400]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
    </svg>
  );
}

export function DocIcon({ className = "w-4 h-4 text-[#1a73e8]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

export function ApplyPinIcon({ className = "w-8 h-8 text-[#e37400]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="7" r="4" />
      <rect x="7" y="15" width="10" height="6" rx="1" />
      <line x1="12" y1="11" x2="12" y2="15" />
    </svg>
  );
}

export function CodeBracketsIcon({ className = "w-8 h-8 text-[#1e8e3e]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function ShareGlobeIcon({ className = "w-8 h-8 text-[#1a73e8]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function LaptopIcon({ className = "w-8 h-8 text-[#e37400]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

export function BuildingIcon({ className = "w-8 h-8 text-[#1e8e3e]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="9" y1="6" x2="9" y2="6.01" />
      <line x1="15" y1="6" x2="15" y2="6.01" />
      <line x1="9" y1="10" x2="9" y2="10.01" />
      <line x1="15" y1="10" x2="15" y2="10.01" />
      <line x1="9" y1="14" x2="9" y2="14.01" />
      <line x1="15" y1="14" x2="15" y2="14.01" />
      <path d="M9 22v-4h6v4" />
    </svg>
  );
}
