const mongoose = require('mongoose')
const Estudio = require('../models/estudio')

//ok
const getAll =  async (req, res) => {
    const estudios = await Estudio.find()
    res.json(estudios)
  }

//ok
const criateStudio =  async (req, res) => {
    const estudio = new Estudio({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      criadoEm: req.body.criadoEm,
    })
   
    const estudioJaExiste = await Estudio.findOne({
      nome: req.body.nome
    })
  
    if(estudioJaExiste){
      return res.status(409).json({
        erro: 'Estudio já cadastrado'
      })
    }
  
    try{
      const novoEstudio = await estudio.save()
      res.status(201).json(novoEstudio)
    }catch{
      res.status(400).json({
        message: err.message
      })
    }
  }

//não atualizaatualiza mas ainda não devolve 
const updateStudio =async (req,res) => {
    const estudioId = req.params.id
    let novoNome = req.body.nome
    
    Estudio.findByIdAndUpdate(
      estudioId, 
      {$set: {nome:novoNome}}, 
      function(err){
        if(err){
          res.status(500).json({message: err.message})
        }else{
          res.status(200).json()
        }
      } 
    )  
  }

module.exports = {
    getAll,
    criateStudio,
    updateStudio
}