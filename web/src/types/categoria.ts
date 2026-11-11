/**
 * @module types/categorias
 * Definiciones de tipos e interfaces para la entidad Categorias.
 * Centraliza la estructura de datos compartida entre la API y el frontend.
 */

/**
 * Representa una categoria dentro del sistema.
 */
export interface Categoria {
  id: number;
  nombre: string;
  orden: number;
}
