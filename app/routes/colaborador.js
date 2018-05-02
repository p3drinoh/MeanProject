module.exports = function(app){

  var api = app.api.colaborador;

  app.get('/v1/colaboradores', api.lista);
};
