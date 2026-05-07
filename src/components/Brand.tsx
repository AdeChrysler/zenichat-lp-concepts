export const DEMO_CTA_HREF =
  "https://zenichat.id/?lp=preview#contact";
export const WHATSAPP_CTA_HREF =
  "https://wa.me/6281228600073?text=Halo%2C%20saya%20tertarik%20dengan%20demo%20ZeniChat";

export function ZeniChatLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className="inline-flex h-7 w-7 items-center justify-center rounded-md"
        style={{
          background: "var(--color-accent)",
          boxShadow: "0 6px 18px -6px var(--color-accent-glow)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 6h18M3 12h12M3 18h18"
            stroke="#ffffff"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="font-semibold tracking-tight text-white">
        ZeniChat
      </span>
    </span>
  );
}
