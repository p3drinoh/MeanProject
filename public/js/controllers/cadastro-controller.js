(function() {
  'use strict';

  angular
    .module('lasa')
    .controller('cadastroController', cadastroController);

  cadastroController.$inject = ['$http', '$scope', 'cadastroService', '$timeout', '$routeParams'];

  function cadastroController($http, $scope, cadastroService, $timeout, $routeParams) {
    /* jshint validthis: true*/
    var vm = this;

    vm.limpaCampos = limpaCampos;
    vm.limpaIdFreshdesk = limpaIdFreshdesk;
    vm.cadastrar = cadastrar;
    vm.confirmaCadastro = confirmaCadastro;
    vm.mensagem = '';
    vm.alerta = true;
    vm.colaborador = "";

    function confirmaCadastro(){
      vm.alerta = false;
      $timeout(function () {
        vm.mensagem = '';
      }, 3000);
    }
  

    function limpaCampos(formCadastro) {
      if(formCadastro){
        formCadastro.$setUntouched();
        formCadastro.$setPristine();
        delete vm.cadastro;
      }
    }

    function limpaIdFreshdesk(formCadastro) {
      if(formCadastro){
        vm.cadastro.idFreshdesk = "";
        formCadastro.idFreshdesk.$setUntouched();
        formCadastro.idFreshdesk.$setPristine();
      }
    }

    function cadastrar(cadastro,formCadastro) {
      cadastroService.cadastrar(cadastro)
      .success(function(cadastro) {
        console.log(cadastro);
        vm.mensagem = 'Cadastro efetuado com sucesso!'
        limpaCampos(formCadastro);
        confirmaCadastro();
      })
      .error(function(cadastro){
        console.log("Erro ao cadastrar");
      });
    }

    
  }
})();
