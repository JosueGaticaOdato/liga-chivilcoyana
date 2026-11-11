/**
 * @module types/equipo
 * Definiciones de tipos e interfaces para la entidad Equipo.
 * Centraliza la estructura de datos compartida entre la API y el frontend.
 */

import { Categoria } from "./categoria";
import { Club } from "./club";

/**
 * Representa un equipo resumido dentro del sistema.
 */
export interface Equipo {
  id: number;
  nombre: string;
  club: Club;
  categoria: Categoria;
  // activo: boolean;
}
