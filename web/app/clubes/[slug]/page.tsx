/**
 * @module app/clubes/[slug]/page
 * Página con detalles de un club especifico
 * Muestra informacion institucional, proximos partidos, resultados y tabla de posiciones.
 */

import HeaderPage from "@/src/components/layout/HeaderPages";
import { getClubBySlug } from "@/src/services/clubService";
import { formatDate } from "@/src/utils/date";
import { Metadata } from "next";
import { notFound } from "next/navigation";

/**
 * Propiedades esperadas para la pagina
 */
interface ClubPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Genera los metadatos dinamicos de la pagina del club.
 *
 * Obtiene la informacion del club mediante un slug para construir el titulo
 * y la descripcion utilizados por los motores de busqueda y las plataformas
 * que muestran vistas previas al sitio
 *
 * @param params - Parametros dinamicos de la ruta
 * @returns Metadatos SEO del club
 */
export async function generateMetadata({
  params,
}: ClubPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const club = await getClubBySlug(slug);

    return {
      title: `${club.nombre} | Liga Chivilcoyana de Fútbol`,
      description: `Información de ${club.nombre} en la Liga Chivilcoyana de Fútbol.`,
    };
  } catch {
    return {
      title: "Club no encontrado",
    };
  }
}

/**
 * Renderiza la pagina de detalle de un club
 *
 * Obtiene el club correspondiente al slug recibido en la URL
 * y muestra su información. Si el club no existe o no puede
 * obtenerse, redirige a la página 404.
 *
 * @param params - Parámetros dinámicos de la ruta.
 * @returns Contenido de la página del club.
 */
export default async function ClubPage({ params }: ClubPageProps) {
  const { slug } = await params;

  let club;

  try {
    club = await getClubBySlug(slug);
  } catch (error) {
    notFound();
  }

  return (
    <>
      <HeaderPage
        title={
          club.nombre_institucional ? club.nombre_institucional : club.nombre
        }
        image={club.escudo}
        imageAlt={`Escudo ${club.nombre}`}
      />

      <section className="mx-4 grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr] lg:p-8">
        {/* COLUMNA IZQUIERDA */}
        <div>
          {/* SOBRE EL CLUB */}
          <section className="mb-4 rounded-2xl bg-(--color-blanco) p-6 shadow-(--sombra-suave)">
            <header className="mb-4">
              <h2 className="flex items-center gap-2 text-[1.4rem] font-extrabold">
                {/* <ion-icon
                  name="alert-circle-outline"
                  className="text-[1.5rem] font-extrabold text-(--color-primario)"
                ></ion-icon> */}
                Sobre el Club
              </h2>
            </header>

            <article className="mb-6">
              <p>{club.descripcion}</p>
            </article>

            <ul className="flex flex-col gap-4 lg:flex-row lg:justify-evenly">
              <li className="w-full rounded-xl bg-(--color-bg-muted) p-4 text-center">
                <span className="mb-1 block text-xs text-(--color-letras-cuaternario) uppercase">
                  Fundación
                </span>

                <strong className="text-base text-(--color-letras-primario)">
                  {formatDate(club.fecha_fundacion)}
                </strong>
              </li>

              {/* ESTADIO */}
              {club.estadio && (
                <li className="w-full rounded-xl bg-(--color-bg-muted) p-4 text-center">
                  <span className="mb-1 block text-xs text-(--color-letras-cuaternario) uppercase">
                    Estadio
                  </span>

                  <strong className="text-base text-(--color-letras-primario)">
                    {club.estadio.nombre}
                  </strong>
                </li>
              )}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
