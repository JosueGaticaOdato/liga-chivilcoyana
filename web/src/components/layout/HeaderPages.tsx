/**
 * @module components/layout/HeaderPage
 * Componente de diseño (layout) para el encabezado de gran parte de las paginas.
 * Contiene el titulo de la pagina actual y subtitulos si fuera el caso.
 */

"use client";

import type { ReactNode } from "react";

/**
 * Propiedades esperadas por el componente Header
 */
type HeaderProps = {
  title: string;
  subtitle?: string | null;
  image?: string | null;
  imageAlt?: string;
  children?: ReactNode;
};

/**
 * Renderiza el encabezado de las páginas de la aplicación.
 *
 * @param props Propiedades de configuración del encabezado.
 * @returns Elemento JSX que representa la estructura del header.
 */
export default function HeaderPage({
  title,
  subtitle = null,
  image = null,
  imageAlt = "",
  children,
}: HeaderProps) {
  return (
    <header
      className={`relative flex h-64 flex-col items-center justify-center ${image ? "" : "lg:items-start"} mb-8 gap-0 overflow-hidden bg-[linear-gradient(90deg,var(--color-degradado-1),var(--color-degradado-2))] p-16 text-center`}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay"
        style={{
          backgroundImage: "url('/images/background.png')",
        }}
      ></div>
      {/* Gradient Overlay Layer */}
      <div className="absolute inset-0 z-1 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-degradado-1)_90%,transparent)_0%,color-mix(in_srgb,var(--color-degradado-2)_60%,transparent)_50%,transparent_100%)]"></div>

      {/* Header image */}
      {image && (
        <figure className="relative z-10 h-20 w-20">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-contain"
          />
        </figure>
      )}

      {/* Header content */}
      <div className="flex flex-col items-center gap-0 md:items-start">
        {/* Title */}
        <h1
          className={`relative z-2 pb-2 ${image ? "text-[1.5rem] md:text-[2.5rem]" : "text-[2.5rem] md:text-[3.5rem]"} [font-family:var(--fuente-primaria)] font-bold tracking-tight text-(--color-letras-secundario) filter-(--sombra-header)`}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="relative z-2 text-[1.5rem] font-bold tracking-tight text-(--color-letras-secundario) filter-(--sombra-header) md:text-[2.5rem]">
            {subtitle}
          </p>
        )}
      </div>

      {/* Slot content */}
      {children}
    </header>
  );
}
