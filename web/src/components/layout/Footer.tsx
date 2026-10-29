"use client";

import Link from "next/link";

export default function footer() {
  return (
    <footer className="grid grid-cols-1 gap-12 bg-(--color-footer) px-6 py-8 pb-4 text-center font-(--fuente-secundaria) text-(--color-letras-secundario) lg:grid-cols-[3fr_1fr_1fr] lg:p-12 lg:text-left">
      {/* BRAND */}
      <section className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <img
          className="mb-4 h-auto max-h-32 w-auto"
          src="/images/logo.png"
          alt="Logo Liga Chivilcoyana de Fútbol"
        />

        <p className="mb-4">Liga Chivilcoyana de Futbol</p>
      </section>

      {/* NAVEGACIÓN */}
      <nav aria-label="Navegación del sitio">
        <h2 className="mb-4 border-b border-(--color-blanco) pb-3 text-center text-[1.2rem] font-extrabold lg:text-left">
          Navegación
        </h2>

        <ul className="flex flex-col items-center gap-4 lg:items-start lg:pl-1">
          <li className="text-base">
            <Link href="/partidos" className="text-(--color-letras-secundario)">
              Partidos
            </Link>
          </li>

          <li className="text-base">
            <Link href="/torneos" className="text-(--color-letras-secundario)">
              Torneos
            </Link>
          </li>

          <li className="text-base">
            <Link href="/clubes" className="text-(--color-letras-secundario)">
              Clubes
            </Link>
          </li>
        </ul>
      </nav>

      {/* CONTACTO */}
      <address className="not-italic">
        <h2 className="mb-4 border-b border-(--color-blanco) pb-3 text-center text-[1.2rem] font-extrabold lg:text-left">
          Contacto
        </h2>

        <ul className="flex flex-col items-center gap-4 lg:items-start lg:pl-1">
          <li className="text-base">contacto@gmail.com</li>

          <li className="text-base">+54 11 1111 1111</li>

          <li className="text-base">Dirección: av asad 123</li>
        </ul>
      </address>

      {/* COPYRIGHT */}
      <small className="col-span-full border-t border-(--color-letras-secundario) pt-4 text-center text-[0.8rem] text-(--color-letras-secundario)">
        <em className="p-2 font-normal">
          Copyright © 2026 – Liga Chivilcoyana de Fútbol. Todos los derechos
          reservados.
        </em>
      </small>
    </footer>
  );
}
