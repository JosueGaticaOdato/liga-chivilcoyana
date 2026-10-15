# Estándar de commits

## 1. Objetivo

Utilizar **Conventional Commits** como estándar para registrar los cambios realizados en el repositorio.

El objetivo es mantener un historial de Git claro, consistente y fácil de consultar, facilitando la identificación de nuevas funcionalidades, correcciones, refactorizaciones y otros cambios.

Este estándar se aplica a todos los commits realizados en el proyecto, independientemente de su tamaño.

## 2. Formato general

Todos los commits deben seguir la siguiente estructura:

```text
<tipo>(<alcance>): <descripción>
```

Los componentes son:

- **Tipo:** indica la naturaleza del cambio.
- **Alcance:** indica el módulo, componente o área afectada. Es opcional.
- **Descripción:** resume el cambio realizado de forma breve y concreta.

Ejemplos:

```text
feat(auth): agrega autenticación de usuarios
fix(api): corrige validación de solicitudes
docs: actualiza instrucciones de instalación
refactor(users): simplifica lógica de búsqueda
```

## 3. Tipos de commits

Se utilizarán los siguientes tipos:

| Tipo | Uso | Ejemplo |
|---|---|---|
| `feat` | Agregar una nueva funcionalidad. | `feat(auth): agrega inicio de sesión` |
| `fix` | Corregir un error o comportamiento incorrecto. | `fix(cart): corrige cálculo del total` |
| `docs` | Modificar documentación. | `docs: agrega guía de instalación` |
| `style` | Cambios de formato que no alteran la lógica. | `style: unifica formato del código` |
| `refactor` | Mejorar o reorganizar el código sin cambiar su comportamiento externo. | `refactor(api): simplifica manejo de errores` |
| `perf` | Mejorar el rendimiento. | `perf(search): optimiza consulta de resultados` |
| `test` | Agregar o modificar pruebas. | `test(auth): agrega pruebas de inicio de sesión` |
| `build` | Modificar dependencias, compilación o herramientas de construcción. | `build: actualiza dependencias de npm` |
| `ci` | Modificar integración o automatización de tareas. | `ci: agrega validación de tests en GitHub Actions` |
| `chore` | Tareas de mantenimiento que no encajan en los tipos anteriores. | `chore: configura archivo editorconfig` |
| `revert` | Revertir un commit anterior. | `revert: revierte cambio en autenticación` |

### Criterios para elegir el tipo

- Si agrego una capacidad nueva, utilizo `feat`.
- Si corrijo algo que no funciona como debería, utilizo `fix`.
- Si reorganizo código sin cambiar su comportamiento, utilizo `refactor`.
- Si mejoro el rendimiento, utilizo `perf`.
- Si modifico exclusivamente documentación, utilizo `docs`.
- Si trabajo específicamente sobre pruebas, utilizo `test`.
- Si realizo mantenimiento general, utilizo `chore`.

Si un cambio incluye varias tareas independientes, debo dividirlo en varios commits siempre que sea razonable.

## 4. Reglas de escritura

Todos los mensajes de commit deben cumplir las siguientes reglas:

1. Escribir la descripción en español.
2. Utilizar minúsculas en el tipo y en la descripción, salvo nombres propios o identificadores que requieran otra escritura.
3. Comenzar la descripción con un verbo en presente, expresado desde la perspectiva del proyecto.
4. Ser breve y describir el cambio concreto.
5. No terminar la descripción con un punto.
6. No incluir mensajes genéricos como `cambios`, `arreglos`, `actualizaciones` o `trabajo realizado`.
7. No incluir información irrelevante, emojis ni referencias personales.

### Ejemplos

Correctos:

```text
feat(products): agrega filtro por categoría
fix(auth): corrige expiración del token
refactor(database): separa acceso a datos de la lógica de negocio
docs: documenta variables de entorno
test(users): agrega pruebas de creación de usuarios
```

Incorrectos:

```text
actualizaciones
Fix: Se arreglaron algunas cosas.
feat: cambios en productos.
arreglos varios
WIP
```

## 5. Uso del alcance (scope)

El alcance es opcional y permite identificar el área del proyecto afectada.

Se escribe entre paréntesis, inmediatamente después del tipo.

```text
feat(products): agrega búsqueda por nombre
fix(auth): corrige validación de credenciales
docs(api): documenta endpoints disponibles
```

Reglas:

- Utilizar nombres cortos y representativos.
- Mantener una nomenclatura consistente a lo largo del proyecto.
- No incluir el alcance cuando no aporte información útil.
- No utilizar el nombre de una persona como alcance.

Los alcances deben adaptarse a la arquitectura real del proyecto, por ejemplo: `auth`, `users`, `products`, `api`, `database` o `config`.

## 6. Commits con descripciones extendidas

Cuando el cambio sea complejo y una sola línea no sea suficiente, puedo agregar un cuerpo explicativo separado por una línea en blanco.

```text
refactor(auth): centraliza validación de credenciales

- Extrae la validación a un servicio independiente.
- Elimina lógica duplicada en los controladores.
- Mantiene el comportamiento actual de autenticación.
```

El cuerpo debe explicar principalmente **por qué se realizó el cambio** y qué decisiones relevantes se tomaron.

No es obligatorio agregar un cuerpo en cambios pequeños.

## 7. Cambios incompatibles (breaking changes)

Cuando un cambio modifica una interfaz, contrato o comportamiento de forma incompatible con versiones anteriores, debo indicarlo agregando `!` después del tipo o del alcance.

```text
feat(api)!: modifica estructura de respuesta de usuarios
```

También puedo incluir un pie `BREAKING CHANGE` para explicar sus consecuencias:

```text
feat(api)!: modifica estructura de respuesta de usuarios

BREAKING CHANGE: el campo "name" se reemplaza por "full_name".
Los clientes existentes deben actualizar el procesamiento de respuestas.
```

Estos cambios deben identificarse explícitamente para facilitar futuras actualizaciones y migraciones.

## 8. Buenas prácticas

- **Un commit, un propósito:** cada commit debe representar un cambio lógico y coherente.
- **Commits pequeños:** evitar acumular funcionalidades, correcciones y refactorizaciones no relacionadas.
- **Historial comprensible:** cada mensaje debe permitir entender el objetivo del cambio sin inspeccionar inmediatamente todo el código.
- **Código verificable:** ejecutar las pruebas o verificaciones pertinentes antes de confirmar cambios.
- **Sin cambios accidentales:** revisar el contenido preparado para el commit antes de confirmarlo.
- **Sin archivos sensibles:** nunca incluir contraseñas, tokens, claves privadas ni archivos de configuración con secretos.
- **Sin commits innecesarios:** no crear commits vacíos ni utilizar mensajes temporales como `WIP` en el historial definitivo.

## 9. Flujo de trabajo recomendado

Antes de cada commit:

```bash
# Revisar los archivos modificados
git status

# Revisar los cambios realizados
git diff

# Preparar los archivos correspondientes
git add <archivo-o-directorio>

# Revisar exactamente lo preparado
git diff --cached

# Crear el commit
git commit -m "tipo(alcance): descripción"
```

Si todos los cambios pertenecen a una única tarea y ya fueron revisados, puedo preparar todos los archivos juntos.

## 10. Referencia rápida

| Situación | Tipo |
|---|---|
| Nueva funcionalidad | `feat` |
| Corrección de un error | `fix` |
| Documentación | `docs` |
| Formato sin cambios funcionales | `style` |
| Reorganización interna del código | `refactor` |
| Optimización de rendimiento | `perf` |
| Pruebas | `test` |
| Dependencias y compilación | `build` |
| Automatización e integración continua | `ci` |
| Mantenimiento general | `chore` |
| Reversión de un commit | `revert` |
| Cambio incompatible | `!` después del tipo o alcance |

### Regla principal

Cada commit debe responder claramente a esta pregunta:

**¿Qué cambio concreto introduce este commit?**

Si el mensaje no permite responderla con claridad, debo reformularlo antes de confirmar los cambios.