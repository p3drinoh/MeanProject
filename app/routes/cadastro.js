module.exports = function(app) {

  var api = app.api.cadastro;

  app.route('/v1/cadastros')
  .post(api.adiciona)
  .get(api.lista);

app.route('/v1/cadastros/:cadastroId')
  .delete(api.removePorId)
  .get(api.buscaPorId)
  .put(api.atualiza);
};
