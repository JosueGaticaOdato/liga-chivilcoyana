/**
 * @module services/clubService
 * Capa de servicio para la entidad Club
 * Encapsula todas las peticiones a la API externas relacionadas con los clubes
 */

import { cache } from "react";
import { apiFetch } from "../lib/api";
import { ApiResponse } from "../types/api";
import { Club, ClubDetail } from "../types/club";

/**
 * Obtiene la lista completa de clubes
 *
 * @returns Promesa que resuleve con el arreglo de clubes
 */
export async function getClubes(): Promise<Club[]> {
  const response = await apiFetch<ApiResponse<Club[]>>("/clubes");

  return response.data;
}

/**
 * Obtiene un club dado su slug
 *
 * @param slug - Identificador único del club en la URL.
 * @returns Información del club solicitado.
 */
export const getClubBySlug = cache(
  async (slug: string): Promise<ClubDetail> => {
    const response = await apiFetch<{ data: ClubDetail }>(`/clubes/${slug}`);

    return response.data;
  },
);
