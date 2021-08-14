const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudiosControllers')


//listar todos os estudios
router.get('/',controller.getAll)

//criar um novo estudio
router.post('/', controller.criateStudio)

//atualizar uma informacao especifica num estudio
router.patch('/:id', controller.updateEstudio)

//deletar um estudio/delete/findById/remove
router.delete('/:id', controller.deleteEstudio)

module.exports = router