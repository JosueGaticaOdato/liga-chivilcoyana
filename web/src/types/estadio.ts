/**
 * @module types/estadio
 * Definiciones de tipos e interfaces para la entidad Estadio.
 * Centraliza la estructura de datos compartida entre la API y el frontend.
 */

/**
 * Representa un estadio dentro del sistema.
 */
export interface Estadio {
  id: number;
  nombre: string;
  direccion: string;
  latitud: number;
  longitud: number;
  capacidad: number;
}
