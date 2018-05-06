var mongoose = require('mongoose');
var schema = mongoose.Schema({

nomeProd : {
  type: String,
  require:true
},
data : {
  type:Date,
  default: new Date()
},
codProd : {
  type:Number,
  require:true
},
precProd : {
  type:String,
  require:true
}
});

var Cadastro = mongoose.model('Cadastro', schema);

