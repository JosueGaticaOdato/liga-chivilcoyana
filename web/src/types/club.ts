/**
 * @module types/club
 * Definiciones de tipos e interfaces para la entidad Club.
 * Centraliza la estructura de datos compartida entre la API y el frontend.
 */

import { Estadio } from "./estadio";

/**
 * Representa un club resumido dentro del sistema.
 */
export interface Club {
  id: number;
  nombre: string;
  slug: string;
  escudo: string | null;
}

/**
 * Representa un club completo dentro del sistema.
 * Extiende de los campos de Club
 */
export interface ClubDetail extends Club {
  nombre_institucional: string;
  fecha_fundacion: string | null;
  presidente: string | null;
  descripcion: string | null;
  estadio: Estadio | null;
}
