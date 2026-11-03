/**
 * @module app/layout
 * Layout principal (Root Layout) de la aplicación.
 * Define la estructura base del documento HTML y engloba todas las páginas
 * con elementos de interfaz compartidos como el Header y el Footer.
 */

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

/**
 * Metadatos globales de la aplicación para optimización SEO.
 * Utiliza un template ("%s | ...") para que las subpáginas (como Clubes)
 * inyecten automáticamente su título sin perder el nombre de la Liga.
 */
export const metadata: Metadata = {
  title: {
    default: "Liga Chivilcoyana de Fútbol",
    template: "%s | Liga Chivilcoyana de Fútbol",
  },
  description: "Sitio oficial de la Liga Chivilcoyana de Fútbol.",
};

/**
 * Propiedades esperadas por el componente RootLayout.
 */
type RootLayoutProps = {
  children: React.ReactNode;
};

/**
 * Renderiza la estructura base de HTML de toda la aplicación.
 * Define el idioma principal y estructura el contenido entre el encabezado y el pie de página.
 *
 * @param props - Propiedades del componente.
 * @param props.children - Contenido dinámico de las páginas anidadas.
 * @returns Elemento JSX que representa el cascarón de la aplicación.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="bg-(--color-bg-muted) pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
