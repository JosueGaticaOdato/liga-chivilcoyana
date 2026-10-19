import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi aplicación",
  description: "Aplicación web desarrollada con Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
