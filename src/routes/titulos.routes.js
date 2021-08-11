
const express = require('express')
const router = express.Router()
const controller = require("../controllers/titulosControllers")

//listar todos os titulos/get/find
router.get('/',controller.getAll )

//criar um novo titulo/post/save
router.post('/', controller.criateTitle)

///"/titulos/[ID] altera informação específica 

module.exports = router