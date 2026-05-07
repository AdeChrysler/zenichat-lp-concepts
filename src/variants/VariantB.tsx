import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { FinalCta } from "@/components/FinalCta";
import { DEMO_CTA_HREF, WHATSAPP_CTA_HREF } from "@/components/Brand";

const STEPS = [
  {
    n: 1,
    title: "Hubungkan WhatsApp Bisnis",
    body: "Sambungkan nomor existing dalam 5 menit. Tidak perlu API meta yang ribet — kami yang urus.",
  },
  {
    n: 2,
    title: "Latih AI dengan Brand Voice Anda",
    body: "Tempel link katalog, FAQ, dan produk. AI mempelajari tone dan kebijakan tim Anda otomatis.",
  },
  {
    n: 3,
    title: "Lepas. Pantau. Optimasi.",
    body: "Tim hanya intervensi saat AI butuh konfirmasi. Sisanya otomatis 24/7.",
  },
];

const FEATURES = [
  {
    title: "Inbox tim yang rapi",
    body: "Semua chat dari semua nomor di satu tempat. Assign, tag, dan handover tanpa kehilangan konteks.",
  },
  {
    title: "AI yang bisa diajari",
    body: "Tambah satu kalimat ke knowledge base, AI langsung pakai jawaban baru di percakapan berikutnya.",
  },
  {
    title: "Otomasi tanpa coding",
    body: "Trigger broadcast, follow-up, dan reminder dengan kondisi yang Anda set sendiri.",
  },
  {
    title: "Aman & private",
    body: "Data tersimpan di server Indonesia, terenkripsi, dan tidak pernah dipakai untuk training model publik.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Dari 6 admin chat 12 jam sehari sekarang cukup 2 admin part-time. Closing rate naik 31%.",
    name: "Dimas P.",
    role: "Owner, Kirana Resto",
  },
  {
    quote:
      "Booking konsultasi yang dulu sering hangus karena admin telat balas, sekarang langsung confirmed dalam menit.",
    name: "dr. Lisa S.",
    role: "Founder, Nara Clinic",
  },
  {
    quote:
      "AI-nya tidak terdengar seperti bot. Customer kami sering tidak sadar yang membalas adalah AI.",
    name: "Rendy A.",
    role: "Sales Lead, Auto Vista",
  },
];

function InboxMock() {
  const items = [
    { name: "Kirana Resto", msg: "Reservasi Jumat malam 4 orang", t: "2m", unread: true },
    { name: "Nara Clinic", msg: "Konsultasi facial besok pagi", t: "9m", unread: true },
    { name: "Auto Vista", msg: "Test drive Avanza minggu depan", t: "21m", unread: false },
    { name: "Loka Beauty", msg: "Promo bundling skincare", t: "1j", unread: false },
  ];
  return (
    <div className="card-dark overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-3.5">
        <span className="text-sm font-semibold">Inbox Tim</span>
        <span className="text-[11px] text-white/55">4 chat aktif</span>
      </div>
      <ul>
        {items.map((it) => (
          <li
            key={it.name}
            className="flex items-center gap-4 border-b border-white/5 px-5 py-4 last:border-b-0"
          >
            <span
              className="h-9 w-9 shrink-0 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent), var(--color-accent-bright))",
              }}
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium truncate">{it.name}</p>
              <p className="text-xs text-white/55 truncate">{it.msg}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[11px] text-white/45">{it.t}</span>
              {it.unread && (
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: "var(--color-accent-bright)" }}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WorkspaceMock() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="card-dark p-5">
        <p className="text-xs uppercase tracking-widest text-white/45">Automation</p>
        <p className="mt-2 font-semibold">Lead nurture H+1, H+3, H+7</p>
        <div className="mt-4 space-y-2">
          {["Send template", "Wait 1 day", "Send follow-up", "Tag: nurtured"].map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-md border border-white/8 bg-white/4 px-3 py-2 text-xs"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--color-accent-bright)" }}
              />
              {s}
            </div>
          ))}
        </div>
      </div>
      <div className="card-dark p-5">
        <p className="text-xs uppercase tracking-widest text-white/45">Lead Summary</p>
        <p className="mt-2 font-semibold">348 lead minggu ini</p>
        <div className="mt-4 space-y-2.5 text-xs">
          {[
            { label: "Hot", val: 86, color: "var(--color-accent)" },
            { label: "Warm", val: 142, color: "rgba(0,136,255,0.55)" },
            { label: "Cold", val: 120, color: "rgba(255,255,255,0.18)" },
          ].map((r) => (
            <div key={r.label}>
              <div className="flex justify-between">
                <span>{r.label}</span>
                <span>{r.val}</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-white/8">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${(r.val / 348) * 100}%`, background: r.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VariantB() {
  return (
    <main id="top" className="min-h-screen">
      <TopNav />

      {/* Hero */}
      <section className="section pt-20">
        <div className="container-lp grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Untuk bisnis yang serius dengan WhatsApp</span>
            <h1 className="heading-hero mt-4">
              Inbox, AI, dan otomasi WhatsApp{" "}
              <span className="accent-text">dalam satu workspace.</span>
            </h1>
            <p className="body-lg mt-6 max-w-xl">
              ZeniChat menyatukan operasional WhatsApp tim Anda. Tidak perlu lagi switch antara aplikasi
              bawaan, spreadsheet, dan grup admin.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={DEMO_CTA_HREF} className="btn-primary">Mulai Demo Gratis</a>
              <a href={WHATSAPP_CTA_HREF} className="btn-ghost">Tanya via WhatsApp</a>
            </div>
            <p className="mt-6 text-xs text-white/45">
              Tanpa kartu kredit · Setup 5 menit · Support bahasa Indonesia
            </p>
          </div>
          <div className="lg:pl-8">
            <InboxMock />
          </div>
        </div>
      </section>

      {/* 3 step */}
      <section id="cara-kerja" className="section border-t border-white/8">
        <div className="container-lp">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-h2">Tiga langkah untuk pakai</h2>
            <p className="body-lg mt-4">
              Mayoritas tim sudah live di WhatsApp dengan ZeniChat dalam waktu kurang dari 1 hari.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="card-dark p-7 relative">
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full font-semibold"
                  style={{ background: "var(--color-accent)", color: "#fff" }}
                >
                  {s.n}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm text-white/65">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="fitur" className="section">
        <div className="container-lp grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Fitur</span>
            <h2 className="heading-h2 mt-3">
              Semua yang dibutuhkan, tidak yang tidak Anda butuhkan.
            </h2>
            <p className="body-lg mt-5">
              Kami fokus pada empat hal yang benar-benar membuat selisih, bukan menumpuk fitur untuk
              terlihat ramai.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title}>
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-white/65">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
          <WorkspaceMock />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section border-t border-white/8">
        <div className="container-lp">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Testimoni</span>
            <h2 className="heading-h2 mt-3">Apa kata tim yang sudah pakai</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="card-dark p-7">
                <blockquote className="text-sm text-white/85 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className="h-9 w-9 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-accent), var(--color-accent-bright))",
                    }}
                  />
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-white/55">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      <FinalCta
        title="Rapikan operasional WhatsApp dalam satu workspace."
        blurb="Demo singkat 20 menit. Kami bantu mapping flow Anda dan tunjukkan setup di bisnis serupa."
      />

      <Footer />
    </main>
  );
}
