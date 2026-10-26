// URL base de la API obtenida desde las variables de entorno
const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * @module lib/api
 * Centralizacion de la logica de peticiones HTTP
 */

/**
 * Cliente HTTP base genérico para realizar peticiones a la API.
 *
 * @template T - El tipo de dato esperado en la respuesta JSON.
 * @param endpoint - La ruta específica a consultar (ej. "/clubes").
 * @returns Promesa que resuelve con la respuesta tipada como T.
 * @throws Error si la variable de entorno no está configurada o si la respuesta HTTP no es exitosa.
 */
export async function apiFetch<T>(endpoint: string): Promise<T> {
  if (!API_URL) {
    throw new Error("La variable NEXT_PUBLIC_API_URL no esta configurada.");
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      Accept: "application/json", // Esperar respuesta JSON
    },
    cache: "no-store", // No cachea
  });

  if (!response.ok) {
    throw new Error(`Error al consultar la API: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
