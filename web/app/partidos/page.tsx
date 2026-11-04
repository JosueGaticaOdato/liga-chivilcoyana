/**
 * @module app/partidos/page
 * Página principal de la sección de Partidos.
 * Punto de entrada (Server Component) para la ruta /clubes en el App Router de Next.js.
 */

import type { Metadata } from "next";

/**
 * Metadatos estáticos de la página para optimización SEO
 * y configuración del título en la pestaña del navegador.
 */
export const metadata: Metadata = {
  title: "Partidos",
};

/**
 * Renderiza la vista principal donde se visualizarán los partidos.
 * Al ser una función asíncrona, permite realizar fetching de datos directamente en el servidor.
 *
 * @returns Elemento JSX que representa el contenido de la página.
 */
export default async function PartidosPage() {
  return <div>Partidos</div>;
}
