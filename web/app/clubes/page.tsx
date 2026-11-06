/**
 * @module app/clubes/page
 * Página principal de la sección de Clubes.
 * Punto de entrada (Server Component) para la ruta /clubes en el App Router de Next.js.
 */

import ClubCard from "@/src/components/clubes/ClubCard";
import HeaderPage from "@/src/components/layout/HeaderPages";
import { getClubes } from "@/src/services/clubService";
import type { Metadata } from "next";

/**
 * Metadatos estáticos de la página para optimización SEO
 * y configuración del título en la pestaña del navegador.
 */
export const metadata: Metadata = {
  title: "Clubes",
};

/**
 * Renderiza la vista principal donde se visualizarán los clubes.
 * Al ser una función asíncrona, permite realizar fetching de datos directamente en el servidor.
 *
 * @returns Elemento JSX que representa el contenido de la página.
 */
export default async function ClubesPage() {
  try {
    const clubes = await getClubes();

    return (
      <>
        <HeaderPage title="Clubes" />
        <section className="grid grid-cols-1 gap-5 px-4 pb-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {clubes.map(function (club) {
            return <ClubCard key={club.id} club={club} />;
          })}
        </section>
      </>
    );
  } catch {
    return <div>h1</div>;
  }
}
