import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Surreal Models Management",
  description:
    "Agência de modelos premium. Conectando talentos extraordinários às maiores oportunidades do mundo da moda e publicidade.",
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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
