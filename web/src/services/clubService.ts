/**
 * @module services/clubService
 * Capa de servicio para la entidad Club
 * Encapsula todas las peticiones a la API externas relacionadas con los clubes
 */

import { apiFetch } from "../lib/api";
import { ApiResponse } from "../types/api";
import { Club } from "../types/club";

/**
 * Obtiene la lista completa de clubes
 *
 * @returns Promesa que resuleve con el arreglo de clubes
 */
export async function getClubes(): Promise<Club[]> {
  const response = await apiFetch<ApiResponse<Club[]>>("/clubes");

  return response.data;
}
