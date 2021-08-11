const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

const getAll = async (req, res) => {
    const titulos = await Titulo.find().populate("estudio")
    res.status(200).json(titulos)
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

//"/titulos/[ID]" Deverá alterar informação específica 
//dentro de um titulo por id específico e retorna o título alterado
  // const pega id do body
  
  //switch
    //let pega info do body
    //case ifo === X 
      //faça a alteração na let, retorne let alterada  e brake
      //se let errada enterege uma mensagem

  //valido se id existe com try/catch

module.exports = {
    getAll,
    criateTitle
}