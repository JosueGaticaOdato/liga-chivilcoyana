"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

export default function header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 flex h-28 w-full items-center justify-between bg-(--color-header) font-(--fuente-primaria) lg:justify-around">
      {/* LOGO */}
      <h1 className="flex h-full items-center justify-center">
        <Link href="/" className="flex h-full items-center px-4">
          <img
            src="/images/logo.png"
            alt="Logo Liga Chivilcoyana de Futbol"
            className="h-20 w-auto transition-all duration-350 lg:hover:scale-110"
          />
        </Link>
      </h1>

      {/* BOTON HAMBURGUESA */}
      <button
        className="z-3 mr-6 cursor-pointer text-[2.5rem] text-(--color-negro) lg:hidden"
        id="btnMenu"
        type="button"
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* NAVEGACIÓN */}
      <nav
        id="menu"
        className="absolute top-28 left-0 hidden w-full bg-(--color-header) lg:static lg:flex lg:w-[40%] lg:justify-center [&.active]:z-5 [&.active]:block"
      >
        <ul className="flex flex-col items-center gap-4 py-6 lg:flex-row lg:items-center lg:justify-around lg:gap-8">
          {/* PARTIDOS */}
          <NavLink href="/partidos">Partidos</NavLink>

          {/* TORNEOS */}
          <NavLink href="/torneos">Torneos</NavLink>

          {/* CLUBES */}
          <NavLink href="/clubes">Clubes</NavLink>

          {/* NOTICIAS */}
          {/* <NavLink href="noticias">Noticias</NavLink> */}

          {/* PANEL ADMIN MOBILE */}
          <li className="lg:hidden">
            <Link
              href="/admin"
              className="rounded-lg bg-(--color-primario) p-2 font-bold text-(--color-letras-secundario)"
            >
              Panel Admin
            </Link>
          </li>
        </ul>
      </nav>

      {/* PANEL ADMIN DESKTOP */}
      <Link
        className="mr-12 hidden rounded-lg border border-transparent bg-(--color-primario) p-2 font-extrabold text-(--color-letras-secundario) lg:block lg:transition-all lg:duration-350 lg:ease-in-out lg:hover:border-(--color-primario) lg:hover:bg-(--color-letras-secundario) lg:hover:text-(--color-primario)"
        href="/admin"
        id="admin-btn"
      >
        Panel Admin
      </Link>
    </header>
  );
}
