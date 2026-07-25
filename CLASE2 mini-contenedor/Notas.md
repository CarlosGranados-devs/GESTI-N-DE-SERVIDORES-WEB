# Clase 2 - Contenedor Web Base (Módulo HTTP Nativo)

## Puerto de Ejecución
- **Base URL:** `http://localhost:3000`

---

## Rutas y Ejemplos de Prueba

### 1. Saludo
Devuelve un mensaje HTML de bienvenida.
- **Ruta:** `/saludo`
- **Parámetro opcional:** `nombre`
- **Ejemplos:**
  - `http://localhost:3000/saludo`
  - `http://localhost:3000/saludo?nombre=Carlos`

### 2. Suma
Suma dos números recibidos por parámetro y devuelve texto plano.
- **Ruta:** `/suma`
- **Parámetros opcionales:** `a`, `b`
- **Ejemplos:**
  - `http://localhost:3000/suma?a=5&b=10`
  - `http://localhost:3000/suma` *(usa valores por defecto `a=0`, `b=0`)*

### 3. Despedida
Devuelve un mensaje HTML de despedida.
- **Ruta:** `/despedida`
- **Parámetro opcional:** `nombre`
- **Ejemplos:**
  - `http://localhost:3000/despedida`
  - `http://localhost:3000/despedida?nombre=Carlos`

---

## Comandos
- Ejecutar servidor `npx ts-node src/index.ts`
- Compilar TypeScript: `npx tsc`

