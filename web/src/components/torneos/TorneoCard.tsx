/**
 * @module components/torneos/TorneoCard
 * Componente visual para la entidad Torneo
 * Muestra la informacion de un torneo individual en formato de tarjeta (card)
 */

import { Torneo } from "@/src/types/torneo";

/**
 * Propiedades esperadas por el componente TornebCard
 */
type TorneoCardProps = {
  torneo: Torneo;
};

/**
 * Renderiza la tarjeta de un torneo.
 *
 * @param props - Propiedades del componente
 * @param props.club - Objeto con la informacion del torneo a renderizar
 * @returns Elemento TSX que representa la tarjeta del torneo
 */
export default function ClubCard({ torneo }: TorneoCardProps) {
  return (
    <li>
      <a
        href="{{ route('torneos.torneo', $torneo.slug) }}"
        className="relative flex flex-col gap-4 rounded-xl border-b-4 border-l-8 border-b-transparent border-l-(--color-primario) bg-(--color-blanco) p-6 shadow-(--sombra-ultra-suave) transition-all duration-300 lg:hover:-translate-y-1 lg:hover:border-b-(--color-primario) lg:hover:shadow-(--sombra-suave)"
      >
        <article className="flex w-full items-start gap-4">
          {/* ICONO */}
          {/* <span className=" flex   h-16   w-16  shrink-0 items-center  justify-center rounded-full  bg-linear-to-br  from-(--color-degradado-1)   to-(--color-degradado-2) text-(--color-blanco)">
            <ion-icon
              name="trophy-outline"
              className="text-[2rem]"></ion-icon>
          </span> */}

          {/* DETALLES */}
          <section className="flex flex-col items-start">
            {/* ESTADO */}
            <span
              className="   mb-1  inline-flex rounded-full  px-2.5 py-0.5
                                    text-xs
                                    font-semibold

                                    {{ $torneo.estado === 'en_curso'
                                        ? 'bg-(--color-success) text-(--color-blanco)'
                                        : 'bg-(--color-error) text-(--color-blanco)'
                                    }}
                                "
            >
              {torneo.estado == "en_curso" ? "En Curso" : "Finalizado"}
            </span>

            {/* TITULO */}
            <h3 className="pb-1 text-[1.15rem] leading-[1.4rem] font-bold text-(--color-letras-primario) md:text-xl">
              {torneo.categoria.nombre} {torneo.nombre}{" "}
              {torneo.temporada.nombre}
            </h3>

            {/* CATEGORIA */}
            <p className="text-base text-(--color-letras-primario) md:text-[1.1rem]">
              Categoria: {torneo.categoria.nombre}
            </p>
          </section>
        </article>
      </a>
    </li>
  );
}
