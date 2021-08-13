const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

const getAll = async (req, res) => {
    const titulos = await Titulo.find().populate("estudio")
    res.status(200).json(titulos)
  }

const getId = async (req, res) =>{
  const getTituloById = await Titulo.findById(req.params.id)
  Titulo.findOne({id:req.params.id},
    function(err){
      if(err){
        res.status(500).json({message: err.message})
      }else{
        res.status(200).json(getTituloById)
      }
    })
}

const criateTitle = async (req, res) => {
    const titulo = new Titulo({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      genero: req.body.genero,
      descricao: req.body.descricao,
      estudio: req.body.estudio,
      criadoEm: req.body.criadoEm
    })
  
    const tituloJaExistente = await Titulo.findOne({
      nome: req.body.nome
    })
  
    if(tituloJaExistente){
      return res.status(401).json({
        erro: 'Titulo já existente'
      })
    }
  
    try {
      const novoTitulo = await titulo.save()
      res.status(201).json(novoTitulo)
    } catch (err) {
      res.status(400).json({
         message: err.message
        })
    }
  }

const getAllGhibli = async (req, res,next) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "ghibli")
    res.json(titulosFiltrados)
}

const getAllPixar = async (req, res,next) => {
  const titulos = await Titulo.find().populate('estudio')
  const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Pixar")
  res.json(titulosFiltrados)
}

const getAllMarvel = async (req, res,next) => {
  const titulos = await Titulo.find().populate('estudio')
  const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Marvel")
  res.json(titulosFiltrados)
}

const updateInfo = async(req, res) => {
  
  try {
    const titulo = await Titulo.findById(req.params.id)
    if (titulo == null) {
      return res.status(404).json({message: "titulo não foi encontrado"})
    }
    if (req.body.nome != null) {
      titulo.nome = req.body.nome
    }
    if(req.body.genero != null){
      titulo.genero = req.body.genero
    }

    if(req.body.descricao != null){
      titulo.descricao = req.body.descricao
    }
    const tituloAtualizado = await titulo.save()
    res.status(200).json(tituloAtualizado)

  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

module.exports = {
    getAll,
    criateTitle,
    getAllGhibli,
    getAllPixar,
    getAllMarvel,
    updateInfo,
    getId
}