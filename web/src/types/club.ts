/**
 * @module types/club
 * Definiciones de tipos e interfaces para la entidad Club.
 * Centraliza la estructura de datos compartida entre la API y el frontend.
 */

/**
 * Representa un club dentro del sistema.
 */
export type Club = {
  id: number;
  nombre: string;
  slug: string;
  escudo: string | null;
};
