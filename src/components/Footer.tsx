import { ZeniChatLogo } from "./Brand";

export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="container-lp py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <ZeniChatLogo />
            <p className="text-sm text-white/55 max-w-md">
              Conversion OS untuk WhatsApp. Dibuat di Indonesia.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/55">
            <a href="https://zenichat.id" className="hover:text-white">
              zenichat.id
            </a>
            <a href="mailto:hi@zenichat.id" className="hover:text-white">
              hi@zenichat.id
            </a>
            <span>© {new Date().getFullYear()} ZeniChat</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
