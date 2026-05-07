import { ZeniChatLogo, DEMO_CTA_HREF } from "./Brand";

export function TopNav({ links }: { links?: { label: string; href: string }[] }) {
  const navLinks = links || [
    { label: "Fitur", href: "#fitur" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Harga", href: "#harga" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <nav className="border-b border-white/8">
      <div className="container-lp flex items-center justify-between py-5">
        <a href="#top" aria-label="ZeniChat">
          <ZeniChatLogo />
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={DEMO_CTA_HREF}
          className="btn-primary text-[13px]"
          style={{ padding: "10px 20px" }}
        >
          Demo Gratis
        </a>
      </div>
    </nav>
  );
}
