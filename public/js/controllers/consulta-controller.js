(function() {
  'use strict';

  angular
    .module('lasa')
    .controller('consultaController', consultaController);

  consultaController.$inject = ['$http', '$scope', 'consultaService'];

  function consultaController($http, $scope, consultaService) {
    /* jshint validthis: true*/
    var vm = this;

    vm.cadastro = [];
    vm.ordenar = ordenar;
    vm.edit = edit;
    vm.sortKey = "data";
    vm.reverse = true;
    vm.filtrarConsulta = filtrarConsulta;

    consultaService.query(function(cadastros){
      vm.cadastros = cadastros;
    }, function(error){
      console.log(error);
    });

    function ordenar(keyname) {
      vm.sortKey = keyname;
      vm.reverse = !vm.reverse;
    }

    function filtrarConsulta(filtro1, filtro2) {
      switch (filtro2) {
        case "nomeProd":
          vm.filtrarNomeProd = filtro1;
          if(vm.filtrarNomeProd===null)
            vm.filtrarNomeProd="";
          break;
        case "codProd":
          vm.filtrarCodProd = filtro1;
          if(vm.filtrarCodProd===null)
            vm.filtrarCodProd="";
          break;
        case "data":
          vm.filtrarData = filtro1;
          if(vm.filtrarData===null)
            vm.filtrarData="";
          break;
        case "precoProd":
          vm.filtrarPrecoProd = filtro1;
          if(vm.filtrarPrecoProd===null)
          vm.filtrarPrecoProd="";
          break;
        default:
          vm.filtrarNomeProd="";
          vm.filtrarCodprod="";
          vm.filtrarData="";
          vm.filtrarPrecoProd="";
      }
    }

    function edit(cadastros, index){
      vm.cadastro = angular.copy(cadastro);
      vm.cadastro.index = index;
    }

  }
})();
