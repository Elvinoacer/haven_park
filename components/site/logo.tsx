import Link from "next/link";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="14" fill="url(#hp-grad)" />
      <path
        d="M10 25.5h6.2l3-7.5 4.6 12.6 3.4-8.1 2.2 3h8.6"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="38" cy="25.5" r="2.6" fill="#E9B949" />
      <defs>
        <linearGradient
          id="hp-grad"
          x1="0"
          y1="0"
          x2="48"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F614E" />
          <stop offset="1" stopColor="#2F9375" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="#top"
      className="flex items-center gap-3 rounded-xl"
      aria-label="Haven Park Medical Centre — back to top"
    >
      <LogoMark className={compact ? "h-9 w-9" : "h-10 w-10"} />
      <span className="leading-none">
        <span className="block font-display text-[1.15rem] font-extrabold tracking-tight text-haven-950">
          Haven Park
        </span>
        <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-haven-600">
          Medical Centre
        </span>
      </span>
    </Link>
  );
}
