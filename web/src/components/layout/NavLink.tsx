/**
 * @module components/layout/NavLink
 * Componente de navegación interactivo.
 * Envuelve el Link de Next.js para detectar y aplicar estilos automáticamente
 * cuando la ruta actual coincide con el destino (estado activo).
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Propiedades esperadas por el componente NavLink.
 */
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

/**
 * Renderiza un elemento de lista (<li>) que contiene un enlace de navegación.
 * Utiliza `usePathname` para comparar la URL actual y resaltar visualmente
 * el enlace si el usuario se encuentra en esa página.
 *
 * @param props - Propiedades del componente.
 * @param props.href - URL de destino.
 * @param props.children - Texto o elementos visuales del enlace.
 * @returns Elemento JSX configurado con los estilos dinámicos de estado activo.
 */
export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const activo = pathname === href;

  return (
    <>
      <li className="text-[1.1rem] font-bold uppercase lg:transition-all lg:duration-350 lg:hover:scale-125 lg:hover:border-b-[3px] lg:hover:border-(--color-primario) lg:hover:text-(--color-primario)">
        <Link
          href={href}
          className={
            activo
              ? "border-b-[3px] border-(--color-primario) text-(--color-primario)"
              : ""
          }
        >
          {children}
        </Link>
      </li>
    </>
  );
}
