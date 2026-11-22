import { Geist, Geist_Mono } from "next/font/google";
import EditorialShell from "../white/editorial/EditorialShell";
import JsonLd from "../white/editorial/JsonLd";
import { graph, personSchema, SITE, websiteSchema } from "../white/seo";
import "./globals.css";
import "../white/editorial/editorial.css";

/* Self-hosted at build time: no request to Google Fonts, no layout shift. */
const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: [
    "Pappu Dey",
    "software engineer",
    "SaaS developer",
    "full-stack developer",
    "React developer",
    "Node.js developer",
    "Laravel developer",
    "Chattogram",
    "Bangladesh",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
  formatDetection: { telephone: false },
};

export const viewport = {
  themeColor: "#ffffff",
  colorScheme: "light dark",
};

/* Runs before first paint: marks JS as available (motion start states are
   gated on html.js, so nothing is hidden without JS) and applies the stored
   or system theme, so dark-mode visitors never see a white flash. */
const bootScript = `(function(){var d=document.documentElement;d.classList.add("js");try{var t=localStorage.getItem("pd-theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.dataset.theme=t;if(t==="dark"){d.classList.add("white-dark")}}catch(e){d.dataset.theme="light"}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`et-page ${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <JsonLd data={graph(personSchema(), websiteSchema())} />
      </head>
      <body className="white-page">
        <div className="white-root min-h-screen">
          <EditorialShell>{children}</EditorialShell>
        </div>
      </body>
    </html>
  );
}
