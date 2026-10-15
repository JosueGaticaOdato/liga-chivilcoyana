# API -Liga Chivilcoyana de Futbol

Backend en **Laravel 12** con soporte para **Filament** y autenticación mediante **Sanctum**. Provee la API REST pública consumida por el frontend (`web/`), los endpoints de gestión y el panel de administración para la carga de resultados, torneos, fixture y cómputo de tablas de posiciones de la Liga Chivilcoyana de Fútbol (Chivilcoy, Buenos Aires, Argentina).

## Tabla de Contenidos

1. [Responsabilidades y Arquitectura](#-responsabilidades-y-arquitectura)
2. [Estructura del Proyecto](#-estructura-del-proyecto)
3. [Entidades y Modelo de Dominio](#-entidades-y-modelo-de-dominio)
4. [Requisitos Previos](#-requisitos-previos)
5. [Instalación y Configuración](#-instalación-y-configuración)
6. [Comandos de Desarrollo](#-comandos-de-desarrollo)
7. [Contrato de la API (`/api/v1`)](#-contrato-de-la-api-apiv1)
8. [Formato de Respuestas JSON](#-formato-de-respuestas-json)

---

## 1. Responsabilidades y Arquitectura

El backend está concebido como una API REST desacoplada y un panel administrativo unificado:

- **API Pública de solo lectura (`/api/v1`)**:
  - Consumida por el frontend en Next.js (App Router) y potenciales clientes móviles o externos.
  - Expone torneos, categorías (Primera, Reserva, Femenino, Inferiores), fixture, partidos, incidencias y tablas de posiciones.
- **Panel Administrativo (`/admin`)**:
  - Carga de planillas de partidos, designaciones arbitrales y estados de encuentro.

---

## 2. Estructura del Proyecto

```text
api/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── Api/           # Controladores de la API REST pública y privada
│   │   ├── Requests/          # Validaciones de datos de entrada (Form Requests)
│   │   └── Resources/         # Transformadores de recursos JSON (API Resources)
│   ├── Models/                # Modelos Eloquent y relaciones de la Liga
│   ├── Providers/             # Service Providers de la aplicación
│   └── Services/              # Lógica de negocio (posiciones, desempates, fixtures)
├── bootstrap/                 # Inicialización y configuración de rutas/middleware
├── config/                    # Archivos de configuración de Laravel
├── database/
│   ├── factories/             # Generadores de datos ficticios para pruebas
│   ├── migrations/            # Definición del esquema de la base de datos
│   └── seeders/               # Semillas con datos iniciales (clubes locales, roles)
├── public/                    # Punto de entrada web (index.php)
├── routes/
│   ├── api.php                # Definición de rutas de la API (/api/v1)
│   └── console.php            # Comandos artisan personalizados
└── tests/
    ├── Feature/               # Tests de integración y endpoints HTTP
    └── Unit/                  # Tests unitarios de servicios y lógica aislada
```

---

## 3. Entidades y Modelo de Dominio

El sistema modela el ecosistema de la Liga Chivilcoyana:

| Entidad | Descripción |
|---|---|
| **Club** | Institución afiliada (nombre, apodo, año de fundación, estadio, colores, escudo). |

---

## 4. Requisitos Previos

Asegúrate de contar con las siguientes herramientas en tu entorno local:

- **PHP**: 8.2 o superior (recomendado 8.3+)
- **Composer**: 2.x
- **Base de Datos**: MySQL

---

## 5. Instalación y Configuración

Sigue estos pasos para poner en marcha el backend localmente:

### 1. Clonar el repositorio y posicionarse en `api/`

```bash
cd api
```

### 2. Configurar variables de entorno

Copia el archivo de ejemplo y ajusta los valores necesarios:

```bash
cp .env.example .env
```

### 3. Instalar dependencias con Composer

```bash
composer install
```

### 4. Generar la clave de la aplicación

```bash
php artisan key:generate
```

### 5. Configurar la Base de Datos

Crea la base de datos en tu servidor MySQL y ajusta en `.env`:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=liga_chivilcoyana
DB_USERNAME=root
DB_PASSWORD=tu_password
```

### 6. Ejecutar migraciones y seeders

Crea la estructura de tablas y carga los datos de prueba:

```bash
php artisan migrate --seed
```

---

## 6. Comandos de Desarrollo

| Comando | Descripción |
|---|---|
| `php artisan serve` | Inicia el servidor de desarrollo en `http://localhost:8000` |
| `php artisan migrate` | Ejecuta las migraciones pendientes |
| `php artisan migrate:fresh --seed` | Limpia la base de datos, recrea las tablas y ejecuta los seeders |
| `php artisan test` o `composer test` | Corre la suite de pruebas automatizadas (PHPUnit) |
| `php artisan pail` | Monitoreo y streaming de logs en tiempo real por consola |
| `php artisan route:list` | Muestra el listado de todas las rutas y métodos registrados |
| `php artisan tinker` | Abre la consola interactiva REPL para probar modelos y servicios |
| `php artisan optimize:clear` | Limpia la caché de configuración, rutas y vistas |

---

## 7. Contrato de la API (`/api/v1`)

La API pública se agrupa bajo el prefijo `/api/v1`:

### Estado del Sistema
| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/up` | Health check del servicio Laravel (retorna HTTP 200 OK) |

### Torneos y Competencia

### Partidos y Resultados

### Clubes e Institucional

---

## 8. Formato de Respuestas JSON

Todas las respuestas de la API mantienen una estructura consistente:

### Respuesta exitosa (Colección o Recurso)

```json
{
  "data": [
    {
      "id": 1,
      "name": "Deportivo Colón",
      "slug": "deportivo-colon",
      "founded_year": 1930,
      "stadium": "Estadio Juan Lucio Zanichelli"
    }
  ],
  "meta": {
    "total": 1
  }
}
```

### Respuesta de error

```json
{
  "message": "Recurso no encontrado.",
  "errors": {
    "id": [
      "El identificador del torneo no existe."
    ]
  }
}
```