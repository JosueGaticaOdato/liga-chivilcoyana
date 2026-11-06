/**
 * Formatea una fecha en español-Argentina
 *
 * @param date - Fecha en formato YYYY-MM-DD.
 * @returns Fecha formateada (ej. 15 de marzo de 1925).
 */
export function formatDate(date: string | null): string {
  if (!date) return "";

  return new Date(date).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
