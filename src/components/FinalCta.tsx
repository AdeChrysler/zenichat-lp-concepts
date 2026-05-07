import { DEMO_CTA_HREF, WHATSAPP_CTA_HREF } from "./Brand";

export function FinalCta({
  title = "Siap mengubah WhatsApp jadi channel revenue utama?",
  blurb = "Demo 20 menit. Kami tunjukkan setup di bisnis serupa dan estimasi konversi yang realistis.",
}: {
  title?: string;
  blurb?: string;
}) {
  return (
    <section className="section">
      <div className="container-lp">
        <div
          className="card-accent overflow-hidden p-10 md:p-16 text-center relative"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,102,255,0.18) 0%, rgba(0,102,255,0.04) 100%)",
          }}
        >
          <h2 className="heading-h2 max-w-3xl mx-auto">{title}</h2>
          <p className="body-lg mt-5 max-w-2xl mx-auto">{blurb}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={DEMO_CTA_HREF} className="btn-primary">
              Jadwalkan Demo Gratis
            </a>
            <a href={WHATSAPP_CTA_HREF} className="btn-ghost">
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
