import express from "express";

import {
    getCharacters,
    getCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
} from "../controllers/characterController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Character:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Rick Sanchez
 *         status:
 *           type: string
 *           example: Alive
 *         species:
 *           type: string
 *           example: Human
 */

/**
 * @swagger
 * /api/characters:
 *   get:
 *     summary: Obtener todos los personajes
 *     tags:
 *       - Characters
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Lista de personajes
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data:
 *                 - id: 1
 *                   name: Rick Sanchez
 *                   status: Alive
 *                   species: Human
 */
router.get("/", getCharacters);

/**
 * @swagger
 * /api/characters/{id}:
 *   get:
 *     summary: Obtener personaje por ID
 *     tags:
 *       - Characters
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Personaje encontrado
 *       404:
 *         description: Personaje no encontrado
 */
router.get("/:id", getCharacter);

/**
 * @swagger
 * /api/characters:
 *   post:
 *     summary: Crear personaje
 *     tags:
 *       - Characters
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Character'
 *           example:
 *             name: Morty Smith
 *             status: Alive
 *             species: Human
 *     responses:
 *       201:
 *         description: Personaje creado correctamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data:
 *                 id: 2
 *                 name: Morty Smith
 *                 status: Alive
 *                 species: Human
 */
router.post("/", createCharacter);

/**
 * @swagger
 * /api/characters/{id}:
 *   put:
 *     summary: Actualizar personaje
 *     tags:
 *       - Characters
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             status: Dead
 *     responses:
 *       200:
 *         description: Personaje actualizado
 *       404:
 *         description: Personaje no encontrado
 */
router.put("/:id", updateCharacter);

/**
 * @swagger
 * /api/characters/{id}:
 *   delete:
 *     summary: Eliminar personaje
 *     tags:
 *       - Characters
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Personaje eliminado
 *       404:
 *         description: Personaje no encontrado
 */
router.delete("/:id", deleteCharacter);

export default router;