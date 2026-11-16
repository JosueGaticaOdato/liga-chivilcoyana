/**
 * @module app/torneos/page
 * Página principal de la sección de Torneos.
 * Punto de entrada (Server Component) para la ruta /torneos en el App Router de Next.js.
 */
import HeaderPage from "@/src/components/layout/HeaderPages";
import TorneoCard from "@/src/components/torneos/TorneoCard";
import { getTorneos } from "@/src/services/torneoService";
import type { Metadata } from "next";

/**
 * Metadatos estáticos de la página para optimización SEO
 * y configuración del título en la pestaña del navegador.
 */
export const metadata: Metadata = {
  title: "Torneos",
};

/**
 * Renderiza la vista principal donde se visualizarán los torneos.
 * Al ser una función asíncrona, permite realizar fetching de datos directamente en el servidor.
 *
 * @returns Elemento JSX que representa el contenido de la página.
 */
export default async function TorneosPage() {
  try {
    const torneos = await getTorneos();

    return (
      <>
        <HeaderPage title="Torneos" />
        <section className="mx-4 lg:mx-40">
          <ul className="flex flex-col gap-6 pb-8">
            {torneos.map(function (torneo) {
              return <TorneoCard key={torneo.id} torneo={torneo} />;
            })}
          </ul>
        </section>
      </>
    );
  } catch {
    return <div>h1</div>;
  }
}
