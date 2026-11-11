/**
 * @module types/torneos
 * Definiciones de tipos e interfaces para la entidad Torneo.
 * Centraliza la estructura de datos compartida entre la API y el frontend.
 */

import { Categoria } from "./categoria";
import { Temporada } from "./temporada";

export type TorneoEstado = "planificado" | "en_curso" | "finalizado";

/**
 * Representa un torneo dentro del sistema.
 */
export interface Torneo {
  id: number;
  nombre: string;

  temporada: Temporada;
  categoria: Categoria;

  slug: String;
  fecha_inicio: String;
  fecha_fin: String;
  descripcion: String;
  estado: TorneoEstado;
}
