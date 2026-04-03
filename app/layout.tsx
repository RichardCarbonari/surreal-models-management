import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Surreal Models Management",
  description: "Agência de modelos premium. Conectando talentos extraordinários às maiores oportunidades do mundo da moda e publicidade.",
  keywords: ["modelos", "agência", "moda", "surreal", "management"],
  openGraph: {
    title: "Surreal Models Management",
    description: "Conectando talentos extraordinários às maiores oportunidades do mundo.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
