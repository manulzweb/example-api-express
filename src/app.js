import express from "express";

import swaggerUi from "swagger-ui-express";

import swaggerSpec from "./config/swagger.js";

import characterRoutes from "./routes/characterRoutes.js";

import validateApiKey from "./middlewares/apiKeyMiddleware.js";

/**
 * Crear instancia principal de Express
 *
 * @type {Object}
 */
const app = express();

/**
 * Middleware para manejar JSON
 *
 * Permite que la aplicación pueda:
 * - Leer datos enviados en formato JSON
 * - Acceder al body mediante req.body
 *
 * @middleware express.json
 *
 * @returns {Function} Middleware de Express
 */
app.use(express.json());

/**
 * Configuración de Swagger UI
 *
 * Endpoint disponible:
 * /api/docs
 *
 * Permite visualizar y probar
 * la documentación interactiva de la API.
 *
 * @route GET /api/docs
 *
 * @param {string} path - Ruta de acceso a Swagger
 * @param {Function} swaggerUi.serve - Middleware estático Swagger
 * @param {Function} swaggerUi.setup - Configuración visual Swagger
 *
 * @returns {void}
 */
app.use(
    "/api/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

/**
 * Middleware global para validar API KEY
 *
 * Todas las rutas posteriores a este middleware
 * requerirán autenticación mediante:
 *
 * Header:
 * x-api-key
 *
 * @middleware validateApiKey
 *
 * @returns {void}
 */
app.use(validateApiKey);

/**
 * Rutas principales de personajes
 *
 * Base URL:
 * /api/characters
 *
 * Endpoints disponibles:
 * - GET /
 * - GET /:id
 * - POST /
 * - PUT /:id
 * - DELETE /:id
 *
 * @route /api/characters
 *
 * @param {string} path - Ruta base
 * @param {Object} characterRoutes - Router de Express
 *
 * @returns {void}
 */
app.use("/api/characters", characterRoutes);

/**
 * Exportar aplicación Express
 *
 * @returns {Object} Instancia principal de Express
 */
export default app;