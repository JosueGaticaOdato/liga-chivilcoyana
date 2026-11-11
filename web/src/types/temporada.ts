/**
 * @module types/temporada
 * Definiciones de tipos e interfaces para la entidad Temporada.
 * Centraliza la estructura de datos compartida entre la API y el frontend.
 */

/**
 * Representa una temporada dentro del sistema.
 */
export interface Temporada {
  id: number;
  nombre: string;
  fecha_inicio: String;
  fecha_fin: String;
  activa: boolean;
}
