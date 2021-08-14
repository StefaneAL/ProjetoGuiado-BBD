
const express = require('express')
const router = express.Router()
const controller = require("../controllers/titulosControllers")

router.get('/',controller.getAll )

router.post('/', controller.criateTitle)

router.get('/ghibli', controller.getAllGhibli)

router.get('/pixar', controller.getAllPixar)

router.get('/marvel', controller.getAllMarvel)

router.patch('/:id', controller.updateInfo)

router.get('/:id', controller.getId)

router.delete('/:id', controller.deleteTitulo)


module.exports = router