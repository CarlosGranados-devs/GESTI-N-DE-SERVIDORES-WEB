import * as http from "http";
import * as fs from "fs";
import * as path from "path";

// Crea el servidor HTTP estático
const servidor = http.createServer((req, res) => {

    // Define la ruta absoluta del archivo HTML a servir
    const archivo = path.join(__dirname, "publico", "saludo.html");
    
    // Lee el archivo HTML del sistema de archivos
    fs.readFile(archivo, (error, contenido) => {
        // Manejo de error si el archivo no existe
        if (error) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Archivo no encontrado");
            return;
        }
        // Responde enviando el contenido del archivo HTML con codificación UTF-8
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(contenido);
    });
});

// Escucha peticiones en el puerto 3005 según los requerimientos de la rúbrica
servidor.listen(3005, () => console.log("Servidor estatico en :3005"));
