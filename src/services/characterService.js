import characters from "../data/bd.json" assert { type: "json" };

/**
 * Obtener todos los personajes
 *
 * @returns {Promise<Array<Object>>}
 * Retorna un arreglo con todos los personajes
 */
const getAllCharacters = async () => {

    return characters;
};

/**
 * Obtener personaje por ID
 *
 * @param {number} id - ID del personaje a buscar
 *
 * @returns {Promise<Object|null>}
 * Retorna el personaje encontrado o null si no existe
 */
const getCharacterById = async (id) => {

    /**
     * Buscar personaje dentro del arreglo
     */
    const character = characters.find(
        character => character.id === parseInt(id)
    );

    return character;
};

/**
 * Crear personaje
 *
 * Genera un nuevo objeto combinando:
 * - Un ID automático
 * - Las propiedades recibidas desde newCharacter
 *
 * @param {Object} newCharacter - Datos del nuevo personaje
 *
 * @returns {Promise<Object>}
 * Retorna el personaje creado
 */
const createCharacter = async (newCharacter) => {

    /**
     * Crear nuevo objeto utilizando
     * el operador spread (...)
     */
    const character = {

        /**
         * Generar ID incremental
         */
        id: characters.length + 1,

        /**
         * Expandir propiedades del nuevo personaje
         */
        ...newCharacter
    };

    /**
     * Agregar personaje al arreglo
     */
    characters.push(character);

    return character;
};

/**
 * Actualizar personaje
 *
 * Busca un personaje por ID y reemplaza
 * únicamente las propiedades enviadas.
 *
 * @param {number} id - ID del personaje
 * @param {Object} data - Datos a actualizar
 *
 * @returns {Promise<Object|null>}
 * Retorna el personaje actualizado o null si no existe
 */
const updateCharacter = async (id, data) => {

    /**
     * Buscar índice del personaje
     */
    const index = characters.findIndex(
        character => character.id === parseInt(id)
    );

    /**
     * Validar si existe
     */
    if (index === -1) {
        return null;
    }

    /**
     * Combinar objeto actual
     * con los nuevos datos
     */
    characters[index] = {

        /**
         * Mantener propiedades actuales
         */
        ...characters[index],

        /**
         * Sobrescribir con nuevos valores
         */
        ...data
    };

    return characters[index];
};

/**
 * Eliminar personaje
 *
 * Busca un personaje por ID y lo elimina
 * del arreglo principal.
 *
 * @param {number} id - ID del personaje a eliminar
 *
 * @returns {Promise<Object|null>}
 * Retorna el personaje eliminado o null si no existe
 */
const deleteCharacter = async (id) => {

    /**
     * Buscar índice del personaje
     */
    const index = characters.findIndex(
        character => character.id === parseInt(id)
    );

    /**
     * Validar existencia
     */
    if (index === -1) {
        return null;
    }

    /**
     * Guardar personaje eliminado
     */
    const deletedCharacter = characters[index];

    /**
     * Eliminar personaje del arreglo
     */
    characters.splice(index, 1);

    return deletedCharacter;
};

export {
    getAllCharacters,
    getCharacterById,
    createCharacter,
    updateCharacter,
    deleteCharacter
};