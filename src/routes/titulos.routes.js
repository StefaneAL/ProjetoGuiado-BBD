
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

//listar todos os titulos/get/find
router.get('/', async (req, res) => {
  const titulos = await Titulo.find().populate("estudio")
  res.status(200).json(titulos)
})

//criar um novo titulo/post/save
router.post('/', async (req, res) => {
  const titulo = new Titulo({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    genero: req.body.genero,
    descricao: req.body.descricao,
    estudio: req.body.estudio,
    criadoEm: req.body.criadoEm
  })

  try {
    const novoTitulo = await titulo.save()
    res.status(201).json(novoTitulo)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
})

module.exports = router