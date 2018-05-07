/*jslint node: true */
/*jshint esversion: 6 */

(function () {
  'use strict';

  angular
    .module('lasa')
    .service('consultaService', consultaService);

  consultaService.$inject = ['$http', '$resource'];

  

  function consultaService($http, $resource) {

    const rota = '/v1/cadastros/:cadastroId';

    return $resource(rota, null, {
      'update': {
        method: 'PUT'
      }
    });

    this.remover = function(cadastro) {
      var indiceDoCadastro= cadastro.indexOf(foto);
			cadastro.splice(indiceDoCadastro, 1);
      return $http.delete();
    }
  }

 

})();

/*
.factory("consultaService", function(recursoConsulta, $q) {
  var service = {};
  service.cadastrar = function(cadastro) {
    return $q(function(resolve, reject) {

      if(cadastro._id) {
        recursoConsulta.update({cadastroId: cadastro._id}, cadastro, function() {
          resolve({
            mensagem: 'Cadastro' + cadastro.codProd + 'atualizado com sucesso',
            inclusao: false
          });
        }, function(erro) {
          console.log(erro);
          reject({
            mensagem: 'Não foi possível atualizar a foto ' + cadastro.codProd
          });
        });

      } else {
        recursoConsulta.save(cadastro, function() {
          resolve({
            mensagem: 'Foto ' + cadastro._id + ' incluída com sucesso',
            inclusao: true
          });
        }, function(erro) {
          console.log(erro);
          reject({
            mensagem: 'Não foi possível incluir a foto ' + foto.titulo
          });
        });
      }
    });
  };
  return service;

*/
