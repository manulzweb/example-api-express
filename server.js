import dotenv from "dotenv";

import app from "./src/app.js";

/**
 * Cargar variables de entorno
 *
 * Permite acceder a las variables definidas
 * en el archivo .env mediante process.env
 *
 * @returns {void}
 */
dotenv.config();

/**
 * Puerto del servidor
 *
 * Usa el puerto definido en las variables
 * de entorno o el puerto 3000 por defecto.
 *
 * @type {number}
 */
const PORT = process.env.PORT || 3000;

/**
 * Inicializar servidor Express
 *
 * Levanta la aplicación y deja disponible
 * la API para recibir solicitudes HTTP.
 *
 * @param {number} PORT - Puerto de ejecución
 * @param {Function} callback - Función ejecutada al iniciar
 *
 * @returns {Object} Instancia del servidor HTTP
 */
app.listen(PORT, () => {

    /**
     * Mostrar mensaje de servidor activo
     */
    console.log(`Servidor ejecutándose en puerto ${PORT}`);

    /**
     * Mostrar URL de Swagger
     */
    console.log(
        `Swagger disponible en http://localhost:${PORT}/api/docs`
    );
});