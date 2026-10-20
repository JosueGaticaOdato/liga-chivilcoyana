# Web - Liga Chivilcoyana de Futbol

Frontend en **Next.js 16** (App Router) con **React 19**, **TypeScript** y **Tailwind CSS v4**. Es el portal web oficial y público de la Liga Chivilcoyana de Fútbol (Chivilcoy, Buenos Aires, Argentina), diseñado para hinchas, periodistas, clubes y la comunidad deportiva, consumiendo la API REST pública provista por el backend (`api/`).

## Tabla de Contenidos

1. [Responsabilidades y Arquitectura](#1-responsabilidades-y-arquitectura)
2. [Estructura del Proyecto](#2-estructura-del-proyecto)
3. [Módulos y Alcance Funcional](#3-módulos-y-alcance-funcional)
4. [Requisitos Previos](#4-requisitos-previos)
5. [Instalación y Configuración](#5-instalación-y-configuración)
6. [Comandos de Desarrollo](#6-comandos-de-desarrollo)
7. [Integración con la API (`/api/v1`)](#7-integración-con-la-api-apiv1)
8. [Convenciones y Buenas Prácticas](#8-convenciones-y-buenas-prácticas)

---

## 1. Responsabilidades y Arquitectura

El frontend está diseñado como una aplicación web moderna, rápida y completamente desacoplada del backend:

- **Renderizado Híbrido (Server & Client Components)**:
  - **Server Components (RSC)**: Utilizados por defecto para vistas estáticas o indexables (portada, información institucional de clubes, tablas de posiciones), optimizando el SEO, el tiempo de primer byte (TTFB) y minimizando el tamaño del bundle de JavaScript en el cliente.
  - **Client Components (`'use client'`)**: Empleados para elementos interactivos como filtros dinámicos por torneo/categoría, selectores de fecha en fixtures, modales de detalle de partidos y actualizaciones de marcadores.
- **Consumo Desacoplado de la API REST (`/api/v1`)**:
  - Toda la comunicación con el backend se realiza a través de una capa de servicios centralizada (`src/services/`) con contratos tipados en TypeScript (`src/types/`).
- **Diseño Adaptativo (Mobile-First)**:
  - Estilizado con Tailwind CSS v4, asegurando una experiencia fluida y rápida en smartphones para consultas en la cancha o durante los días de partido.

---

## 2. Estructura del Proyecto

```text
web/
├── app/                         # Páginas, layouts y rutas (Next.js App Router)
│   ├── favicon.ico              # Favicon institucional
│   ├── globals.css              # Directivas de Tailwind CSS v4 y estilos base
│   ├── layout.tsx               # Root layout principal (HTML, Body, metadata y estructura global)
│   └── page.tsx                 # Portada / Home pública
├── public/                      # Recursos estáticos públicos (logos, imágenes, iconos)
├── src/
│   ├── components/              # Componentes visuales y de interfaz de usuario
│   ├── hooks/                   # Custom React hooks con lógica de estado reutilizable
│   ├── lib/                     # Configuración compartida, cliente HTTP y helpers de formateo
│   ├── services/                # Funciones cliente para consumo de endpoints de Laravel
│   └── types/                   # Definiciones e interfaces TypeScript para datos de la API
├── .env.example                 # Plantilla de variables de entorno requeridas
├── eslint.config.mjs            # Reglas de linting y calidad de código
├── next.config.ts               # Configuración del framework Next.js y Turbopack
├── package.json                 # Dependencias, metadatos y scripts de ejecución
└── tsconfig.json                # Configuración del compilador TypeScript y alias (@/*)
```

---

## 3. Módulos y Alcance Funcional

La aplicación web ofrece la información deportiva e institucional de la Liga Chivilcoyana:

| Módulo / Vista | Descripción |
|---|---|
| **Inicio (Home)** | Resumen de la fecha en disputa, partidos destacados, accesos rápidos a posiciones y últimas novedades. |

---

## 4. Requisitos Previos

Asegúrate de contar con las siguientes herramientas en tu entorno local:

- **Node.js**: 20.x o superior (LTS recomendado)
- **npm**: 10.x o superior (o gestor compatible como `pnpm` o `yarn`)
- **Backend API**: Servidor de la API Laravel en ejecución (por defecto en `http://localhost:8000`)

---

## 5. Instalación y Configuración

Sigue estos pasos para poner en marcha el frontend localmente:

### 1. Posicionarse en el directorio `web/`

```bash
cd web
```

### 2. Configurar variables de entorno

Copia el archivo de ejemplo y crea tu configuración local:

```bash
cp .env.example .env.local
```

Ajusta la URL base de la API en `.env.local` según tu entorno:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

### 3. Instalar dependencias con npm

```bash
npm install
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

### 5. Acceder a la aplicación

Abre tu navegador en [http://localhost:3000](http://localhost:3000).

---

## 6. Comandos de Desarrollo

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con Turbopack en `http://localhost:3000` |
| `npm run build` | Compila y optimiza la aplicación para el entorno de producción |
| `npm run start` | Inicia el servidor en modo producción (requiere previo `npm run build`) |
| `npm run lint` | Ejecuta el análisis estático de código mediante ESLint |

---

## 7. Integración con la API (`/api/v1`)

El frontend consume la API pública de Laravel definida en `api/routes/api.php`:

### Cliente HTTP y Servicios

Las peticiones al backend se concentran en `src/services/` utilizando un cliente base configurado en `src/lib/`:

```typescript
// src/services/clubs.service.ts
import { ApiResponse, Club } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getClubs(): Promise<Club[]> {
  const response = await fetch(`${API_URL}/clubs`, {
    next: { revalidate: 60 }, // Revalidación ISR cada 60 segundos
  });

  if (!response.ok) {
    throw new Error("Error al obtener el listado de clubes");
  }

  const json: ApiResponse<Club[]> = await response.json();
  return json.data;
}
```

### Modelado de Tipos

Las respuestas respetan la estructura uniforme de Laravel Resources (`{ data: ..., meta: ... }`):

```typescript
// src/types/api.ts
export interface ApiResponse<T> {
  data: T;
  meta?: {
    total?: number;
    current_page?: number;
    last_page?: number;
  };
}

export interface Club {
  id: number;
  name: string;
  slug: string;
  nickname?: string;
  founded_year?: number;
  stadium?: string;
  logo_url?: string;
}
```

---

## 8. Convenciones y Buenas Prácticas

- **Alias de Rutas**: Utilizar el prefijo `@/*` para importar módulos de forma limpia desde la raíz de `web/` (configurado en `tsconfig.json`).
- **Separación de Responsabilidades**:
  - Componentes visuales puros en `src/components/`.
  - Consultas y transformaciones de datos en `src/services/`.
  - Tipos e interfaces de dominio en `src/types/`.
  - Helpers y clientes en `src/lib/`.
- **Estándar de Commits**:
  - Seguir la convención establecida en [`docs/commits.md`](../docs/commits.md) utilizando el alcance `web`:
    - `feat(web): agrega tabla de posiciones`
    - `fix(web): corrige renderizado de tarjetas de partidos`
    - `style(web): ajusta diseño responsive del menú principal`