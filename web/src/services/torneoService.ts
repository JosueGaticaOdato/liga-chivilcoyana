/**
 * @module services/torneoService
 * Capa de servicio para la entidad Torneo
 * Encapsula todas las peticiones a la API externas relacionadas con los torneos
 */

import { cache } from "react";
import { apiFetch } from "../lib/api";
import { ApiResponse } from "../types/api";
import { Torneo } from "../types/torneo";

/**
 * Obtiene la lista completa de los torneos activos
 *
 * @returns Promesa que resuleve con el arreglo con los torneos
 */
export async function getTorneos(): Promise<Torneo[]> {
  const response = await apiFetch<ApiResponse<Torneo[]>>("/torneos");

  console.log(response);

  return response.data;
}

/**
 * Obtiene un torneo dado su slug
 *
 * @param slug - Identificador único del torneo en la URL.
 * @returns Información del torneo solicitado.
 */
export const getTorneoBySlug = cache(async (slug: string): Promise<Torneo> => {
  const response = await apiFetch<{ data: Torneo }>(`/torneos/${slug}`);

  return response.data;
});
