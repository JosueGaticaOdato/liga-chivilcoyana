"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

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
