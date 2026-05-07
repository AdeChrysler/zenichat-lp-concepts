import { DEMO_CTA_HREF } from "./Brand";

const TIERS = [
  {
    name: "Starter",
    price: "Rp 490rb",
    cadence: "/bulan",
    blurb: "UMKM yang baru mulai mengotomasi WhatsApp.",
    features: [
      "1 nomor WhatsApp",
      "1.000 percakapan AI / bulan",
      "Inbox tim 3 user",
      "Dasbor analitik dasar",
    ],
    cta: "Coba Starter",
    highlight: false,
  },
  {
    name: "Growth",
    price: "Rp 1.490rb",
    cadence: "/bulan",
    blurb: "Brand yang serius scaling WhatsApp jadi channel utama.",
    features: [
      "3 nomor WhatsApp",
      "5.000 percakapan AI / bulan",
      "Inbox tim 10 user",
      "Routing & SLA otomatis",
      "Lead score + CRM sync",
    ],
    cta: "Pilih Growth",
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "",
    blurb: "Tim 20+ orang, multi-brand, integrasi internal.",
    features: [
      "Nomor & seat tak terbatas",
      "Volume AI sesuai kebutuhan",
      "API + webhook + SSO",
      "Customer success manager",
    ],
    cta: "Hubungi Sales",
    highlight: false,
  },
];

export function Pricing({ id = "harga" }: { id?: string }) {
  return (
    <section id={id} className="section">
      <div className="container-lp">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Harga</span>
          <h2 className="heading-h2 mt-3">
            Mulai gratis, scale saat siap
          </h2>
          <p className="body-lg mt-4">
            Tidak ada biaya tersembunyi. Ganti plan kapan saja.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={t.highlight ? "card-accent p-7 relative" : "card-dark p-7 relative"}
            >
              {t.highlight && (
                <span
                  className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wider"
                  style={{ background: "var(--color-accent)", color: "#fff" }}
                >
                  PALING POPULER
                </span>
              )}
              <h3 className="heading-h3">{t.name}</h3>
              <p className="mt-2 text-sm text-white/60">{t.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">
                  {t.price}
                </span>
                <span className="text-sm text-white/55">{t.cadence}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white/75">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--color-accent-bright)" }}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={DEMO_CTA_HREF}
                className={t.highlight ? "btn-primary mt-7 w-full" : "btn-ghost mt-7 w-full"}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
