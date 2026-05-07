import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { FinalCta } from "@/components/FinalCta";
import { DEMO_CTA_HREF, WHATSAPP_CTA_HREF } from "@/components/Brand";

const STATS = [
  { value: "24/7", label: "AI standby tanpa lembur" },
  { value: "3x", label: "Response speed vs admin manual" },
  { value: "5", label: "Industri yang sudah diuji" },
  { value: "1", label: "Workspace untuk semua nomor" },
];

const GROWTH_MAP = [
  {
    n: "01",
    title: "Awareness lebih tajam",
    body: "Lacak iklan mana yang menghasilkan chat berkualitas, lengkap dengan biaya per closed-deal.",
  },
  {
    n: "02",
    title: "Funnel WhatsApp yang terstruktur",
    body: "Setiap lead masuk ke stage yang jelas — kualifikasi, demo, proposal, closing — bukan menumpuk di inbox.",
  },
  {
    n: "03",
    title: "Konversi yang dapat diukur",
    body: "Hubungkan order ke percakapan asalnya. Setiap rupiah revenue punya akar yang jelas.",
  },
  {
    n: "04",
    title: "Retensi yang otomatis",
    body: "Reminder, repeat order, dan win-back jalan sendiri tanpa Anda harus mengingat tanggal.",
  },
];

const USE_CASES = [
  { title: "FNB", desc: "Reservasi & katering otomatis." },
  { title: "Fashion", desc: "Tanya stok, ukuran, restock alert." },
  { title: "Klinik", desc: "Booking konsultasi & post-care." },
  { title: "Otomotif", desc: "Test drive & simulasi kredit." },
  { title: "Salon", desc: "Reschedule, paket, loyalty." },
];

function RailDecor() {
  return (
    <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(0,136,255,0.4) 50%, transparent 100%)",
      }}
    />
  );
}

function ProductUiMock() {
  return (
    <div className="card-dark overflow-hidden mx-auto max-w-3xl">
      <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-3 text-xs text-white/55">app.zenichat.id / growth-map</span>
      </div>
      <div className="grid grid-cols-[180px_1fr] divide-x divide-white/8 min-h-[340px]">
        <aside className="p-4 text-xs space-y-1.5 text-white/65">
          {["Dasbor", "Inbox", "Lead", "Automation", "Insight", "Settings"].map((it, i) => (
            <div
              key={it}
              className={`rounded-md px-2.5 py-2 ${i === 2 ? "bg-white/8 text-white" : ""}`}
            >
              {it}
            </div>
          ))}
        </aside>
        <section className="p-6">
          <p className="text-xs text-white/55 uppercase tracking-widest">Lead Pipeline</p>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[
              { name: "Capture", n: 312 },
              { name: "Qualified", n: 184 },
              { name: "Demo", n: 96 },
              { name: "Closed", n: 41 },
            ].map((c, i) => (
              <div
                key={c.name}
                className="rounded-lg border border-white/10 bg-white/4 p-3"
              >
                <p className="text-[10px] uppercase tracking-widest text-white/55">{c.name}</p>
                <p
                  className="mt-1.5 text-2xl font-semibold tracking-tight"
                  style={{
                    color: i === 3 ? "var(--color-accent-bright)" : "#fff",
                  }}
                >
                  {c.n}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-12 items-end gap-1.5 h-28">
            {[18, 24, 28, 22, 38, 32, 44, 50, 42, 58, 66, 78].map((h, i) => (
              <div
                key={i}
                className="rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background:
                    i === 11 ? "var(--color-accent)" : "rgba(0,136,255,0.32)",
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export function VariantA() {
  return (
    <main id="top" className="min-h-screen">
      <TopNav />

      {/* Hero */}
      <section className="section pt-24 text-center">
        <div className="container-lp-narrow">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold tracking-widest uppercase"
            style={{
              borderColor: "rgba(0,136,255,0.4)",
              background: "rgba(0,102,255,0.08)",
              color: "var(--color-accent-bright)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full pulse-glow"
              style={{ background: "var(--color-accent-bright)" }}
            />
            Growth Map untuk WhatsApp
          </span>
          <h1 className="heading-hero mt-7 mx-auto max-w-4xl">
            Petakan pertumbuhan bisnis Anda{" "}
            <span className="accent-text">lewat satu channel: WhatsApp.</span>
          </h1>
          <p className="body-lg mt-6 mx-auto max-w-2xl">
            ZeniChat menggabungkan AI sales agent, inbox tim, dan analitik konversi — supaya setiap chat
            jadi node pertumbuhan yang bisa Anda ukur, bukan beban operasional.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={DEMO_CTA_HREF} className="btn-primary">Demo Gratis 20 Menit</a>
            <a href={WHATSAPP_CTA_HREF} className="btn-ghost">Pelajari Cara Kerja</a>
          </div>
        </div>

        <div className="container-lp mt-16 relative">
          <RailDecor />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="card-dark p-5 text-left">
                <p className="text-3xl font-semibold tracking-tight">{s.value}</p>
                <p className="mt-1 text-xs text-white/55">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Map */}
      <section id="cara-kerja" className="section border-t border-white/8">
        <div className="container-lp">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Growth Map</span>
            <h2 className="heading-h2 mt-3">
              Empat tahap pertumbuhan, satu peta yang jelas
            </h2>
            <p className="body-lg mt-4">
              ZeniChat memetakan customer journey Anda dari iklan ke order, supaya tim tahu titik
              optimasi yang paling menggerakkan revenue.
            </p>
          </div>
          <div className="relative mt-14">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px -z-10"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(0,136,255,0.5) 20%, rgba(0,136,255,0.5) 80%, transparent 100%)",
              }}
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {GROWTH_MAP.map((s, i) => (
                <div
                  key={s.n}
                  className="card-dark p-6 relative"
                  style={{
                    transform:
                      i % 2 === 1 ? "translateY(28px)" : "translateY(0)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-6 rounded-full px-3 py-0.5 text-[10px] font-semibold tracking-widest uppercase"
                    style={{ background: "var(--color-accent)", color: "#fff" }}
                  >
                    {s.n}
                  </span>
                  <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2.5 text-sm text-white/65">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product UI */}
      <section id="fitur" className="section">
        <div className="container-lp">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Produk</span>
            <h2 className="heading-h2 mt-3">
              Satu workspace. Semua jawaban tentang WhatsApp Anda.
            </h2>
          </div>
          <div className="mt-14">
            <ProductUiMock />
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section border-t border-white/8">
        <div className="container-lp">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Industri</span>
            <h2 className="heading-h2 mt-3">
              Sudah teruji di berbagai jenis bisnis
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {USE_CASES.map((u) => (
              <div
                key={u.title}
                className="card-dark p-6 transition-colors hover:border-white/20"
              >
                <h3 className="text-base font-semibold">{u.title}</h3>
                <p className="mt-2 text-sm text-white/60">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      <FinalCta
        title="Mulai petakan pertumbuhan WhatsApp Anda hari ini."
        blurb="Demo 20 menit. Anda akan melihat Growth Map, dasbor analitik, dan estimasi konversi yang realistis."
      />

      <Footer />
    </main>
  );
}
