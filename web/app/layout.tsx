import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Liga Chivilcoyana de Fútbol",
    template: "%s | Liga Chivilcoyana de Fútbol",
  },
  description: "Sitio oficial de la Liga Chivilcoyana de Fútbol.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
