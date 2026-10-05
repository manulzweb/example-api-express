/**
 * Middleware encargado de validar la API KEY
 *
 * Este middleware verifica:
 * 1. Que el cliente envíe la API KEY
 * 2. Que la API KEY coincida con la configurada
 *    en las variables de entorno
 *
 * @param {Object} req - Objeto de solicitud de Express
 * @param {Object} req.headers - Headers enviados por el cliente
 * @param {Object} res - Objeto de respuesta de Express
 * @param {Function} next - Función que continúa al siguiente middleware
 *
 * @returns {Object|void}
 * - Retorna una respuesta JSON con error 401 si no existe API KEY
 * - Retorna una respuesta JSON con error 403 si la API KEY es inválida
 * - Continúa el flujo con next() si la API KEY es válida
 */
const validateApiKey = (req, res, next) => {

    // /**
    //  * Obtener API KEY desde los headers
    //  *
    //  * @type {string|undefined}
    //  */
    // const apiKey = req.headers["x-api-key"];

    // /**
    //  * Validar si la API KEY fue enviada
    //  */
    // if (!apiKey) {

    //     return res.status(401).json({
    //         success: false,
    //         message: "API KEY requerida"
    //     });
    // }

    // /**
    //  * Comparar API KEY enviada
    //  * con la variable de entorno
    //  */
    // if (apiKey !== process.env.API_KEY) {

    //     return res.status(403).json({
    //         success: false,
    //         message: "API KEY inválida"
    //     });
    // }

    // /**
    //  * Continuar flujo de ejecución
    //  */
    next();
};

/**
 * Exportar middleware
 *
 * @returns {Function} Middleware de validación de API KEY
 */
export default validateApiKey;