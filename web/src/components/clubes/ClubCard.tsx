/**
 * @module components/clubes/ClubCard
 * Componente visual para la entidad Club
 * Muestra la informacion de un club individual en formato de tarjeta (card)
 */

import { Club } from "@/src/types/club";
import Image from "next/image";

/**
 * Propiedades esperadas por el componente ClubCard
 */
type ClubCardProps = {
  club: Club;
};

/**
 * Renderiza la tarjeta de presentacion de un club.
 *
 * @param props - Propiedades del componente
 * @param props.club - Objeto con la informacion del club a renderizar
 * @returns Elemento TSX que representa la tarjeta del club
 */
export default function ClubCard({ club }: ClubCardProps) {
  return (
    <a href="#" className="group">
      <article className="flex h-24 items-center gap-4 overflow-hidden rounded-lg border-b-[5px] border-l-[6px] border-b-transparent border-l-(--color-primario) bg-(--color-blanco) shadow-(--sombra-ultra-suave) transition-all duration-300 ease-in-out md:h-28 md:border-l-8 lg:hover:-translate-y-1.25 lg:hover:border-b-(--color-primario) lg:hover:shadow-(--sombra-suave)">
        <figure className="h-18 w-22 shrink-0 transition-transform duration-300 ease-in-out md:h-24 md:w-32 lg:group-hover:scale-125">
          {club.escudo ? (
            <img
              src={club.escudo}
              alt={`Escudo de ${club.nombre}`}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-100 text-sm text-gray-500">
              Sin escudo
            </div>
          )}
        </figure>
        <h2 className="text-[1.3rem] font-(--fuente-tercearia) text-(--color-letras-primario) md:text-[1.6rem]">
          {club.nombre}
        </h2>
      </article>
    </a>
  );
}
