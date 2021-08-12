# E aqui vamos nos!

## o objetivo é cumprir um contrato completo 

## o contrato consiste em :

### Requisitos 
find/filter
- ✅ **"/titulos/marvel"** Deverá retornar todos os títulos com o estudio Marvel
- ✅ **"/titulos/ghibli"** Deverá retornar todos os títulos com o estudio Ghibli
- ✅ **"/titulos/pixar"** Deverá retornar todos os títulos com o estudio Pixar


- ✅   **"/estudios"** Deverá retornar todos os estudios cadastrados
- ✅  **"/titulos"** Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

- ✅  **"/estudios"** Deverá criar um estudio 
- ✅  **"/titulos"**  Deverá criar um título 

- [ ]  "/titulos/[ID]" Deverá deletar titulo por id específico e retorna mensagem amigável
- ✅  "/estudios/[ID]" Deverá deletar estudio por id específico e retorna mensagem amigável

- ✅  "/titulos/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado
- [ ]  "/estudios/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o estudio alterado


### Regras de negócio

- ✅  Não deverá ser possível criar estudio com o mesmo nome
- ✅  Não deverá ser possível criar título com o mesmo nome
- ✅  Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema, utilizando o numero do id do estudio correspondente no corpo da requisição

<br>
<br>

### Dados para Collection Estudios

- id: autogerado e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


### API deve retornar seguinte JSON:

```jsx
[
    {
    "criadoEm": "data de criação gerada pelo Date",
    "_id": "id gerado pelo mongoDB",
    "nome": "Marvel",
    "__v": 0
    },
    {
    "criadoEm": "data de criação gerada pelo Date",
    "_id": "id gerado pelo mongoDB",
    "nome": "Ghibli",
    "__v": 0
  },
  {
    "criadoEm": "data de criação gerada pelo Date",
    "_id": "id gerado pelo mongoDB",
    "nome": "Pixar",
    "__v": 0
  }
]
```
<br>
<br>

### Dados para Collection Titulos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- genero: texto e obrigatório
- descricao: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório
- estudio: referencia do estudio cadastrado previamente obrigatório


### API deve retornar seguinte JSON:

```jsx
[
  {
    "criadoEm": "data de criação gerada pelo Date",
    "_id": "id gerado pelo mongoDB",
    "nome": "Nome do filme",
    "genero": "Genero do filme",
    "descricao": "Descrição do filme.",
    "estudio": {
      "criadoEm": "data de criação gerada pelo Date",
      "_id": "id gerado pelo mongoDB",
      "nome": "Nome do estudio",
    }
  }
]
```
<br>
<br>



## *Aqui vai cada emoção que senti no momento de cumprir os requisitos*
* Já tinhamos feito os {GET} para checar `estudio` e `titulo` em aula e tambem fizemos o {POST} para criar o `estudio`, eu tive um pouco de dificuldade em usar o `.populate` então, depois de alguma pesquisa, entendi que meu ero estava na forma como estava declarando o `"_id":` no `Postman`, mas depois de compreender as etapas comecei a cadastrar os`titulo`. 

* Quando terminei de cadastrar os filmes e checar vi que ja tinha cumprido a regra de negocio 

  <img src="https://media.giphy.com/media/43VhxnrEOQ44U/giphy.gif" width="150" height="100" />


 ### Ficou assim : 
  * **"/estudios"** Deverá retornar todos os estudios cadastrados
  ```javascript
  router.get('/', async (req, res) => {
  const estudios = await Estudio.find()
  res.json(estudios)
  })
```
* **"/titulos"** Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

```javascript
router.get('/', async (req, res) => {
  const titulos = await Titulo.find().populate("estudio")
  res.status(200).json(titulos)
})
```
* **"/estudios"** Deverá criar um estudio 

  * Não deverá ser possível criar estudio com o mesmo nome

```javascript
router.post('/', async (req, res) => {
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
})
```

* **"/titulos"**  Deverá criar um título 

  * Não deverá ser possível criar título com o mesmo nome
  
  * Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema, utilizando o numero do id do estudio correspondente no corpo da requisição

```javascript
router.post('/', async (req, res) => {
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
    return res.status(409).json({
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
})
```
