import swaggerJsdoc from "swagger-jsdoc";

/**
 * Configuración principal de Swagger
 *
 * @type {Object}
 */
const options = {

    /**
     * Definición base de OpenAPI
     */
    definition: {

        /**
         * Versión del estándar OpenAPI
         *
         * @type {string}
         */
        openapi: "3.0.0",

        /**
         * Información general de la API
         */
        info: {

            /**
             * Nombre de la API
             *
             * @type {string}
             */
            title: "Rick and Morty API",

            /**
             * Versión actual de la API
             *
             * @type {string}
             */
            version: "1.0.0",

            /**
             * Descripción general de la API
             *
             * @type {string}
             */
            description: "API modular desarrollada con Express.js"
        },

        /**
         * Componentes reutilizables de OpenAPI
         */
        components: {

            /**
             * Configuración de esquemas de seguridad
             */
            securitySchemes: {

                /**
                 * Autenticación mediante API Key
                 */
                ApiKeyAuth: {

                    /**
                     * Tipo de autenticación
                     *
                     * @type {string}
                     */
                    type: "apiKey",

                    /**
                     * Lugar donde se enviará la API Key
                     *
                     * @type {string}
                     */
                    in: "header",

                    /**
                     * Nombre del header esperado
                     *
                     * @type {string}
                     */
                    name: "x-api-key"
                }
            }
        },

        /**
         * Seguridad global aplicada a todos los endpoints
         *
         * @type {Array<Object>}
         */
        security: [
            {
                ApiKeyAuth: []
            }
        ]
    },

    /**
     * Archivos donde Swagger buscará documentación
     *
     * @type {Array<string>}
     */
    apis: ["./src/routes/*.js"]
};

/**
 * Genera la especificación Swagger/OpenAPI
 *
 * @param {Object} options - Configuración Swagger
 *
 * @returns {Object} Documento OpenAPI generado
 */
const swaggerSpec = swaggerJsdoc(options);

/**
 * Exporta la especificación Swagger
 *
 * @returns {Object} Configuración OpenAPI lista para usar
 */
export default swaggerSpec;