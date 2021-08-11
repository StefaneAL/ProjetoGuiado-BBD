const mongoose = require('mongoose')

const connect = () => {mongoose.connect('mongodb://localhost:27017/filmes-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(console.log('Database conectada com sucesso.'))
  .catch(err => console.err)
}

// const findById = (model, id) => {
//   let filteredData = model.find(item => item._id == id);

//   return filteredData;
// };

module.exports = { 
  connect, 
  //findById 
}
