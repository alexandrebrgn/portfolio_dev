import { Metadata } from 'next';
import StructuredData from "@/components/SEO/StructuredData";
import HomeContent from "@/components/custom/HomeContent";
import {getProjectsCustom} from "@/lib/work";

export const metadata: Metadata = {
  title: "Accueil",
  description: "Bonjour, je suis Alexandre Bourguignon, étudiant en Bachelor CDA au campus Notre-Dame du Roc à La Roche-Sur-Yon. Développeur et concepteur passionné.",
  keywords: ["développeur", "portfolio", "React", "TypeScript", "Next.js", "développement web", "CDA", "La Roche-Sur-Yon"],
  authors: [{ name: "Alexandre Bourguignon" }],
  creator: "Alexandre Bourguignon",
  publisher: "Alexandre Bourguignon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    title: "Alexandre Bourguignon - Portfolio",
    description: "Développeur et concepteur, étudiant en Bachelor CDA. Découvrez mes compétences et projets.",
  },
};

export default function Home() {
    const projects = getProjectsCustom();
    return (
        <>
            <StructuredData type="Person" />
            <StructuredData type="WebSite" />
            <HomeContent projects={projects}/>
        </>
    );
}