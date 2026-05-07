import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const VARIANT = (process.env.NEXT_PUBLIC_LP_VARIANT || "c").toLowerCase();

const TITLES: Record<string, string> = {
  a: "ZeniChat — AI Sales Agent untuk WhatsApp Bisnis",
  b: "ZeniChat — Otomasi WhatsApp untuk Bisnis Indonesia",
  c: "ZeniChat — Conversion OS untuk WhatsApp",
};
const DESC: Record<string, string> = {
  a: "Tutup lebih banyak deal di WhatsApp dengan agen AI yang merespon, mengkualifikasi, dan menjual 24/7. Diuji ratusan brand di Indonesia.",
  b: "Inbox tim, AI yang bisa diajari, dan otomasi WhatsApp dalam satu workspace. Rapikan operasional dalam hitungan jam, bukan minggu.",
  c: "Tangkap lead, kualifikasi otomatis, dan ukur konversi WhatsApp di satu Conversion OS. Dipakai brand FNB, klinik, dan otomotif.",
};

export const metadata: Metadata = {
  title: TITLES[VARIANT] || TITLES.c,
  description: DESC[VARIANT] || DESC.c,
  openGraph: {
    title: TITLES[VARIANT] || TITLES.c,
    description: DESC[VARIANT] || DESC.c,
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '810870472012444');
fbq('track', 'PageView');`}
        </Script>
      </head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=810870472012444&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
