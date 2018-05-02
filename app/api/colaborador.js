var mongoose = require('mongoose');
var model = mongoose.model('Usuario');
var api = {};

api.lista = function(req, res){
  model
    .findOne({
      nome: req.usuario.nome
    })
    .then(function(usuario){
      var colaboradores = [
        {valor: usuario.nome}
      ];
      res.json(colaboradores);
    })
}

module.exports = api;
