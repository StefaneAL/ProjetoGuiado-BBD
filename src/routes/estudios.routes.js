const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudiosControllers')


//listar todos os estudios
router.get('/',controller.getAll)

//criar um novo estudio
router.post('/', controller.criateStudio)

//listar um estudio/get/findById

//atualizar uma informacao especifica num estudio
router.patch("/:id", controller.updateStudio)

//deletar um estudio/delete/findById/remove

module.exports = router