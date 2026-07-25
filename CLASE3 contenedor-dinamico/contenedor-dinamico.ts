import * as http from "http";
import { URL } from "url";

// Crea el servidor HTTP dinámico
const servidor = http.createServer((req, res) => {
    // Parsea la URL de la petición para extraer la ruta y los parámetros
    const url = new URL(req.url ?? "/", `http://${req.headers.host}`);

    // Valida si la ruta coincide con la endpoint solicitada
    if (url.pathname === "/hora-saludo") {
        // Extrae el parámetro query nombre con un valor por defecto si no existe
        const nombre = url.searchParams.get("nombre") ?? "visitante";
        
        // Obtiene la hora actual para determinar el saludo dinámico
        const hora = new Date().getHours();
        const saludo = hora < 12 ? "Buenos dias" : hora < 19 ? "Buenas tardes" : "Buenas noches";

        // Devuelve la respuesta HTML dinámica con el saludo y el nombre
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(`<h1>${saludo} ${nombre}</h1>`);
        return;
    }

    // Respuesta para cualquier otra ruta no definida Error 404
    res.writeHead(404).end("No encontrado");
});

// Escucha peticiones en el puerto 3006
servidor.listen(3006, () => console.log("Contenedor dinamico en :3006"));