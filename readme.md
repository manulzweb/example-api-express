````markdown
# Rick and Morty API - Express.js

API REST desarrollada con JavaScript y Express.js utilizando una arquitectura modular.

La API implementa:

- Express.js
- Arquitectura modular
- Middleware para API KEY
- Variables de entorno con dotenv
- Swagger para documentación
- CRUD básico
- async/await
- JSON local como base de datos simulada

---

# Tecnologías utilizadas

- Node.js
- Express.js
- Swagger UI
- Swagger JSDoc
- Dotenv

---

# Estructura del proyecto

```bash
example-api-express/
│
├── src/
│   ├── config/
│   │   └── swagger.js
│   │
│   ├── controllers/
│   │   └── characterController.js
│   │
│   ├── data/
│   │   └── characters.json
│   │
│   ├── middlewares/
│   │   └── apiKeyMiddleware.js
│   │
│   ├── routes/
│   │   └── characterRoutes.js
│   │
│   ├── services/
│   │   └── characterService.js
│   │
│   └── app.js
│
├── .env
├── package.json
└── server.js
````

---

# Instalación del proyecto

## 1. Clonar repositorio en caso de tenerlo versionado

```bash
git clone https://github.com/david-martinez-tl/example-api-express.git
```

---

## 2. Ingresar al proyecto

```bash
cd example-api-express
```

---

## 3. Instalar dependencias

```bash
npm install
```

---

# Variables de entorno

Crear archivo `.env`

```env
PORT=3000
API_KEY=123456789
```

---

# Ejecutar proyecto

```bash
node server.js
```

Servidor:

```bash
http://localhost:3000
```

---

# Swagger Documentation

La documentación Swagger estará disponible en:

```bash
http://localhost:3000/api/docs
```

---

# API KEY

Todas las peticiones requieren el siguiente header:

```http
x-api-key: 123456789
```

---

# Endpoints disponibles

| Método | Endpoint            | Descripción                  |
| ------ | ------------------- | ---------------------------- |
| GET    | /api/characters     | Obtener todos los personajes |
| GET    | /api/characters/:id | Obtener personaje por ID     |
| POST   | /api/characters     | Crear personaje              |
| PUT    | /api/characters/:id | Actualizar personaje         |
| DELETE | /api/characters/:id | Eliminar personaje           |

---

# Ejemplo GET

## Endpoint

```http
GET /api/characters
```

## Respuesta

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human"
    }
  ]
}
```

---

# Ejemplo POST

## Endpoint

```http
POST /api/characters
```

## Body

```json
{
  "name": "Summer Smith",
  "status": "Alive",
  "species": "Human"
}
```

## Respuesta

```json
{
  "success": true,
  "data": {
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human"
  }
}
```

---

# Ejemplo PUT

## Endpoint

```http
PUT /api/characters/1
```

## Body

```json
{
  "status": "Dead"
}
```

---

# Ejemplo DELETE

## Endpoint

```http
DELETE /api/characters/1
```

## Respuesta

```json
{
  "success": true,
  "message": "Personaje eliminado"
}
```

---

# Explicación de la arquitectura

La API se encuentra separada por responsabilidades:

---

## routes/

Contiene las rutas y endpoints de la API.

Ejemplo:

```javascript
router.get("/", characterController.getCharacters);
```

---

## controllers/

Recibe las peticiones HTTP y devuelve respuestas.

Ejemplo:

```javascript
res.status(200).json(data);
```

---

## services/

Contiene la lógica de negocio.

Ejemplo:

```javascript
const characters = await characterService.getAllCharacters();
```

---

## middlewares/

Contiene middlewares reutilizables.

Ejemplo:

```javascript
validateApiKey
```

---

## config/

Configuraciones globales del proyecto.

Ejemplo:

```javascript
Swagger
```

---

## data/

Simula una base de datos usando JSON.

---

# Buenas prácticas implementadas

* Arquitectura modular
* Código desacoplado
* Uso de variables de entorno
* Middleware reutilizable
* Manejo de errores
* Uso de async/await
* Swagger documentado
* Código comentado
* Separación de responsabilidades
* Fácil mantenimiento
* Fácil escalabilidad

---

# Dependencias utilizadas

```bash
npm install express dotenv swagger-ui-express swagger-jsdoc
```

---