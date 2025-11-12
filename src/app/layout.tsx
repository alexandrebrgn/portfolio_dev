import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://votre-domaine.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alexandre Bourguignon - Développeur & Concepteur",
    template: "%s | Alexandre Bourguignon"
  },
  description: "Portfolio d'Alexandre Bourguignon, étudiant en Bachelor CDA. Découvrez mes projets de développement web, applications et compétences en développement.",
  keywords: [
    "Alexandre Bourguignon",
    "Alexandre Bourguignon portfolio",
    "portfolio développeur",
    "développeur",
    "portfolio",
    "React",
    "TypeScript",
    "Next.js",
    "développement web",
    "CDA",
    "La Roche-Sur-Yon"
  ],
  authors: [{ name: "Alexandre Bourguignon" }],
  creator: "Alexandre Bourguignon",
  publisher: "Alexandre Bourguignon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Alexandre Bourguignon - Portfolio",
    title: "Alexandre Bourguignon - Développeur & Concepteur",
    description: "Portfolio d'Alexandre Bourguignon, étudiant en Bachelor CDA. Découvrez mes projets de développement web et applications.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`, // À créer
        width: 1200,
        height: 630,
        alt: "Alexandre Bourguignon - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandre Bourguignon - Développeur & Concepteur",
    description: "Portfolio d'Alexandre Bourguignon, étudiant en Bachelor CDA.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@votre_twitter", // Si vous avez un compte Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'votre-code-verification-google',
    // yandex: 'votre-code-verification-yandex',
    // yahoo: 'votre-code-verification-yahoo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href={siteUrl} />
        <script
                dangerouslySetInnerHTML={{
                    __html: `
              addEventListener('load', () => {
                document.documentElement.classList.add('loaded');
              });
            `,
                }}
            />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}