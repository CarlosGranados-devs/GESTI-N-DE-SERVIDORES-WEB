import * as http from "http";
import { URL } from "url";

// Route handlers (o funciones equivalentes a servlets)
function manejarSaludo(nombre: string): string {
    return `<h1>Hola, ${nombre}!</h1><p>Bienvenido a tu primer contenedor web.</p>`;
}

function manejarDespedida(nombre: string): string {
    return `<h1>Adiós, ${nombre}!</h1><p>¡Vuelve pronto!</p>`;
}

// El contenedor web (servidor HTTP)
const servidor = http.createServer((req, res) => {
    // Descomponer la URL recibida
    const url = new URL(req.url ?? "/", `http://${req.headers.host}`);

    // Decidir qué handler ejecutar según la ruta
    if (url.pathname === "/saludo") {
        const nombre = url.searchParams.get("nombre") ?? "desconocido";
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(manejarSaludo(nombre));
        return;
    }

    if (url.pathname === "/suma") {
        const a = Number(url.searchParams.get("a") ?? 0);
        const b = Number(url.searchParams.get("b") ?? 0);
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(`El resultado de ${a} + ${b} es ${a + b}`);
        return;
    }

    if (url.pathname === "/despedida") {
        const nombre = url.searchParams.get("nombre") ?? "desconocido";
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(manejarDespedida(nombre));
        return;
    }

    // Respuesta por defecto para rutas no encontradas
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Ruta no encontrada");
});

// Escuchar en el puerto 3000
servidor.listen(3000, () => console.log("Servidor escuchando en http://localhost:3000"));