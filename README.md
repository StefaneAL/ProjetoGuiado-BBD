# E aqui vamos nos!

## o objetivo é cumprir um contrato completo 

## o contrato consiste em :

### Requisitos 
- [ ]  **"/titulos/marvel"** Deverá retornar todos os títulos com o estudio Marvel
- [ ]  **"/titulos/ghibli"** Deverá retornar todos os títulos com o estudio Ghibli
- [ ]  **"/titulos/pixar"** Deverá retornar todos os títulos com o estudio Pixar

-  ✅   **"/estudios"** Deverá retornar todos os estudios cadastrados
- ✅  "**/titulos**" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

- [ ]  "**/estudios**" Deverá criar um estudio 
- [ ]  "**/titulos**"  Deverá criar um título 

- [ ]  "/titulos/[ID]" Deverá deletar titulo por id específico e retorna mensagem amigável
- [ ]  "/estudios/[ID]" Deverá deletar estudio por id específico e retorna mensagem amigável

- [ ]  "/titulos/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado
- [ ]  "/estudios/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado


### Regras de negócio

- [ ]  Não deverá ser possível criar estudio com o mesmo nome
- [ ]  Não deverá ser possível criar título com o mesmo nome
- [ ]  Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema, utilizando o numero do id do estudio correspondente no corpo da requisição

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

* 
