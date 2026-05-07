import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { FinalCta } from "@/components/FinalCta";
import { DEMO_CTA_HREF, WHATSAPP_CTA_HREF } from "@/components/Brand";

const STEPS = [
  {
    n: "01",
    name: "Capture",
    blurb: "Tangkap setiap chat dari iklan, organic, dan landing page tanpa kehilangan satupun lead.",
  },
  {
    n: "02",
    name: "Qualify",
    blurb: "AI memahami niat, lokasi, dan budget — kasih lead score 0–100 dalam hitungan detik.",
  },
  {
    n: "03",
    name: "Route",
    blurb: "Lead panas masuk ke sales senior, lead dingin masuk nurture flow otomatis.",
  },
  {
    n: "04",
    name: "Learn",
    blurb: "Setiap percakapan menjadi data: response time, win rate, dan objection mapping.",
  },
];

const INDUSTRIES = [
  {
    title: "FNB",
    blurb: "Reservasi, katering, dan birthday booking via WhatsApp — auto-confirm + reminder H-1.",
    metric: "+38% repeat order",
  },
  {
    title: "Klinik & Aesthetic",
    blurb: "Konsultasi awal, booking treatment, follow-up post-care — semua dengan tone yang on-brand.",
    metric: "−54% no-show",
  },
  {
    title: "Otomotif",
    blurb: "Test drive, simulasi kredit, dan handover ke sales advisor terdekat secara real-time.",
    metric: "+2.3x SPK closed",
  },
];

function ChatBubbleHero() {
  return (
    <div className="card-dark p-5 max-w-md mx-auto">
      <div className="flex items-center gap-3 border-b border-white/8 pb-3">
        <span className="h-9 w-9 rounded-full" style={{ background: "var(--color-accent)" }} />
        <div className="flex-1">
          <p className="text-sm font-semibold">ZeniChat AI</p>
          <p className="text-[11px] text-white/55">Aktif sekarang</p>
        </div>
        <span
          className="h-2 w-2 rounded-full pulse-glow"
          style={{ background: "#22c55e" }}
        />
      </div>
      <div className="mt-4 space-y-2.5 text-[13px]">
        <div className="rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[78%] bg-white/8">
          Halo, saya tertarik paket katering 50 pax untuk acara kantor.
        </div>
        <div
          className="ml-auto rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[80%]"
          style={{ background: "var(--color-accent)", color: "#fff" }}
        >
          Halo, terima kasih! Untuk 50 pax kami punya 3 paket. Acara kapan dan di mana ya, Kak?
        </div>
        <div className="rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[78%] bg-white/8">
          Jumat depan, kantor di Sudirman.
        </div>
        <div
          className="ml-auto rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[80%]"
          style={{ background: "var(--color-accent)", color: "#fff" }}
        >
          Siap. Saya kirim 3 opsi menu + estimasi harga sekarang. Mau saya lock slot untuk Jumat?
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-lg border border-white/10 bg-white/4 px-3 py-2 text-[11px] text-white/55">
        <span>Lead Score</span>
        <span className="font-semibold text-white">92 / 100 — Hot</span>
      </div>
    </div>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="card-dark p-5">
      <p className="text-3xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-sm text-white/55">{label}</p>
    </div>
  );
}

export function VariantC() {
  return (
    <main id="top" className="min-h-screen">
      <TopNav />

      {/* Hero */}
      <section className="section pt-20">
        <div className="container-lp grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-widest uppercase"
              style={{
                borderColor: "rgba(0,136,255,0.4)",
                background: "rgba(0,102,255,0.1)",
                color: "var(--color-accent-bright)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full pulse-glow" style={{ background: "var(--color-accent-bright)" }} />
              Conversion OS untuk WhatsApp
            </span>
            <h1 className="heading-hero mt-6">
              Ubah setiap chat WhatsApp jadi <span className="accent-text">revenue terukur.</span>
            </h1>
            <p className="body-lg mt-6 max-w-xl">
              ZeniChat menangkap, mengkualifikasi, dan mengukur konversi dari setiap percakapan WhatsApp
              — tanpa tim Anda harus mengetik ulang follow-up yang sama setiap hari.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={DEMO_CTA_HREF} className="btn-primary">Demo Gratis 20 Menit</a>
              <a href={WHATSAPP_CTA_HREF} className="btn-ghost">Lihat Cara Kerja</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <MetricCard value="2.4x" label="Lead jadi customer" />
              <MetricCard value="<60s" label="Response time AI" />
              <MetricCard value="24/7" label="Tidak pernah miss chat" />
            </div>
          </div>
          <div className="lg:pl-8">
            <ChatBubbleHero />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-white/8 py-8">
        <div className="container-lp">
          <p className="text-center text-xs uppercase tracking-[0.18em] text-white/45">
            Dipakai 200+ brand di Indonesia
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-white/55">
            {["Kirana Resto", "Nara Clinic", "Auto Vista", "Bali Stay", "Loka Beauty", "Rumah Pintar"].map(
              (n) => (
                <span key={n} className="text-sm font-medium">
                  {n}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Conversion OS / Cara Kerja */}
      <section id="cara-kerja" className="section">
        <div className="container-lp">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Cara Kerja</span>
            <h2 className="heading-h2 mt-3">
              Empat tahap dari chat menuju closed-deal
            </h2>
            <p className="body-lg mt-4">
              Conversion OS terdiri dari empat modul yang bekerja bersamaan, bukan empat tools terpisah.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="card-dark p-6">
                <span
                  className="text-xs font-semibold tracking-widest"
                  style={{ color: "var(--color-accent-bright)" }}
                >
                  {s.n}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-white/65">{s.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard mock */}
      <section id="fitur" className="section">
        <div className="container-lp grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="card-dark overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 text-xs text-white/55">app.zenichat.id / dashboard</span>
            </div>
            <div className="p-7">
              <p className="text-sm text-white/55">Konversi minggu ini</p>
              <p className="mt-1 text-4xl font-semibold tracking-tight">
                Rp 248.500.000
              </p>
              <p className="mt-1 text-xs accent-text">+18% dari minggu lalu</p>
              <div className="mt-7 grid grid-cols-7 items-end gap-2 h-36">
                {[28, 42, 36, 58, 72, 64, 88].map((h, i) => (
                  <div
                    key={i}
                    className="rounded-t-md"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 6
                          ? "var(--color-accent)"
                          : "rgba(0,136,255,0.28)",
                    }}
                  />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[11px] text-white/45">
                {["S", "S", "R", "K", "J", "S", "M"].map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow">Dasbor</span>
            <h2 className="heading-h2 mt-3">
              Setiap chat punya angka.
              <br />
              Setiap angka punya konteks.
            </h2>
            <p className="body-lg mt-5">
              Lihat lead score, response time, win rate, dan revenue per percakapan — tidak perlu
              menebak kanal mana yang paling profitable.
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              {[
                "Attribution dari iklan ke order, lengkap dengan UTM",
                "Real-time alert saat lead score di atas 80",
                "Export ke Google Sheets / data warehouse",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-white/80">
                  <span
                    aria-hidden
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--color-accent-bright)" }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container-lp">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Industri</span>
            <h2 className="heading-h2 mt-3">
              Sudah teruji di industri yang transaksinya lewat WhatsApp
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {INDUSTRIES.map((it) => (
              <div key={it.title} className="card-dark p-7 flex flex-col">
                <h3 className="heading-h3">{it.title}</h3>
                <p className="mt-3 text-sm text-white/65 flex-1">{it.blurb}</p>
                <p
                  className="mt-5 text-sm font-semibold"
                  style={{ color: "var(--color-accent-bright)" }}
                >
                  {it.metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      <FinalCta />

      <Footer />
    </main>
  );
}
