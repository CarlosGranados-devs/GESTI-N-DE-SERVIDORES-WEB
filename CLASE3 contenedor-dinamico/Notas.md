# Clase 3 Servidores Web

Cómo levantar y probar los proyectos en TypeScript.

---

## Servidores y Puertos
* **Servidor Estático:** Corre en `http://localhost:3005` 
* **Contenedor Dinámico:** Corre en `http://localhost:3006` 

---

## Estructura de archivos y rutas internas:
* `servidor-estatico.ts` -> Servidor estático (Raíz del proyecto)
* `contenedor-dinamico.ts` -> Contenedor dinámico (Raíz del proyecto)
* `publico/saludo.html` -> HTML estático servido por el servidor 3005
* `package.json` / `tsconfig.json` -> Configuración del proyecto

---

## Cómo ejecutar los archivos

En la terminal, dentro de la carpeta del proyecto:

1. **Levantar el Servidor Estático:**
   ```bash
   npx tsx servidor-estatico.ts
   npx tsx contenedor-dinamico.ts

   Para cambiar entre ellos ctrl + c y poner el otro comando
   para correr ambos a la vez poner cada comando en una terminal