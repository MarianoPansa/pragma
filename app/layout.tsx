import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, DM_Sans } from "next/font/google"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
})

const SITE_URL = "https://www.bepragma.com.ar"
const TITLE = "Pragma — Inteligencia Artificial para equipos legales"
const DESCRIPTION =
  "Capacitaciones, diagnóstico e implementación de soluciones de IA para estudios jurídicos, equipos legales in-house y empresas. Resultados concretos en semanas, no en meses."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "IA legal",
    "inteligencia artificial abogados",
    "legaltech",
    "automatización legal",
    "capacitación IA estudios jurídicos",
    "Pragma",
  ],
  authors: [{ name: "Pragma" }],
  alternates: { canonical: "/" },
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
    apple: "/favicon.svg",
  },
  robots: { index: true, follow: true, "max-image-preview": "large" } as Metadata["robots"],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Pragma",
    title: TITLE,
    description:
      "De abogados, para abogados. IA aplicada a tu práctica legal: soluciones concretas, personalizadas y con resultados que se ven en el día a día de tu estudio o tu área legal.",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "De abogados, para abogados. IA aplicada a tu práctica legal, con soluciones concretas y resultados que se ven en el día a día.",
    images: [{ url: "/og-image.png", alt: TITLE }],
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0c14",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${bricolage.variable} ${dmSans.variable} bg-cream`}>
      <body className="font-sans bg-cream text-dark">{children}</body>
    </html>
  )
}
