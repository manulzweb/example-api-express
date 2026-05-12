import {
    getAllCharacters,
    getCharacterById,
    createCharacter as createCharacterService,
    updateCharacter as updateCharacterService,
    deleteCharacter as deleteCharacterService
} from "../services/characterService.js";

/**
 * GET - Obtener todos los personajes
 *
 * @param {Object} req - Objeto de solicitud de Express
 * @param {Object} res - Objeto de respuesta de Express
 *
 * @returns {Promise<Object>} Respuesta JSON con la lista de personajes
 */
const getCharacters = async (req, res) => {

    try {

        const characters = await getAllCharacters();

        return res.status(200).json({
            success: true,
            data: characters
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * GET por ID - Obtener un personaje específico
 *
 * @param {Object} req - Objeto de solicitud de Express
 * @param {Object} req.params - Parámetros enviados en la URL
 * @param {string} req.params.id - ID del personaje
 * @param {Object} res - Objeto de respuesta de Express
 *
 * @returns {Promise<Object>} Respuesta JSON con el personaje encontrado
 */
const getCharacter = async (req, res) => {

    try {

        const { id } = req.params;

        const character = await getCharacterById(id);

        if (!character) {

            return res.status(404).json({
                success: false,
                message: "Personaje no encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            data: character
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * POST - Crear personaje
 *
 * @param {Object} req - Objeto de solicitud de Express
 * @param {Object} req.body - Datos del personaje enviados en el body
 * @param {Object} res - Objeto de respuesta de Express
 *
 * @returns {Promise<Object>} Respuesta JSON con el personaje creado
 */
const createCharacter = async (req, res) => {

    try {

        const newCharacter = await createCharacterService(req.body);

        return res.status(201).json({
            success: true,
            data: newCharacter
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * PUT - Actualizar personaje
 *
 * @param {Object} req - Objeto de solicitud de Express
 * @param {Object} req.params - Parámetros enviados en la URL
 * @param {string} req.params.id - ID del personaje a actualizar
 * @param {Object} req.body - Datos actualizados del personaje
 * @param {Object} res - Objeto de respuesta de Express
 *
 * @returns {Promise<Object>} Respuesta JSON con el personaje actualizado
 */
const updateCharacter = async (req, res) => {

    try {

        const updatedCharacter = await updateCharacterService(
            req.params.id,
            req.body
        );

        if (!updatedCharacter) {

            return res.status(404).json({
                success: false,
                message: "Personaje no encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            data: updatedCharacter
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * DELETE - Eliminar personaje
 *
 * @param {Object} req - Objeto de solicitud de Express
 * @param {Object} req.params - Parámetros enviados en la URL
 * @param {string} req.params.id - ID del personaje a eliminar
 * @param {Object} res - Objeto de respuesta de Express
 *
 * @returns {Promise<Object>} Respuesta JSON confirmando la eliminación
 */
const deleteCharacter = async (req, res) => {

    try {

        const deletedCharacter = await deleteCharacterService(
            req.params.id
        );

        if (!deletedCharacter) {

            return res.status(404).json({
                success: false,
                message: "Personaje no encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Personaje eliminado",
            data: deletedCharacter
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export {
    getCharacters,
    getCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
};