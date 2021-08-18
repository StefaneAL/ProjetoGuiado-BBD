
const express = require('express')
const router = express.Router()
const controller = require("../controllers/titulosControllers")

router.get('/',controller.getAll )

router.post('/', controller.criateTitle)

router.get('/titulos/ghibli', controller.getAllGhibli)

router.get('/titulos/pixar', controller.getAllPixar)

router.get('/titulos/marvel', controller.getAllMarvel)

router.patch('/:id', controller.updateInfo)

router.get('/:id', controller.getId)

router.delete('/:id', controller.deleteTitulo)


module.exports = router
