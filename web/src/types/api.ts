/**
 * @module types/api
 * Definiciones de tipos genéricos para la comunicación con la API.
 * Establece el contrato estándar de las respuestas HTTP en toda la aplicación.
 */

/**
 * Envoltorio (wrapper) genérico para estandarizar las respuestas de la API.
 * 
 * @template T - El tipo de estructura de datos que se espera recibir.
 */
export type ApiResponse<T> = {
  data: T;
}