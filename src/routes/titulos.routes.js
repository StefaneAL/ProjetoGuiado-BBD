
const express = require('express')
const router = express.Router()
const controller = require("../controllers/titulosControllers")

//listar todos os titulos/get/find
router.get('/',controller.getAll )

//criar um novo titulo/post/save
router.post('/', controller.criateTitle)

//busca titulos da pixar
router.get('/ghibli', controller.getAllGhibli)

//busca titulos da Marvel
router.get('/pixar', controller.getAllPixar)

//busca titulos Ghibli 
router.get('/marvel', controller.getAllMarvel)

///"/titulos/[ID] altera informação específica 
//router.patch('/:id', controller.updateInfo)


module.exports = router