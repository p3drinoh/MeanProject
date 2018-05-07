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
   // vm.edit = edit;
    vm.sortKey = "data";
    vm.reverse = true;
    vm.filtrarConsulta = filtrarConsulta;
    vm.remover = remover;

    consultaService.query(function(cadastros){
      vm.cadastros = cadastros;
    }, function(error){
      console.log(error);
    });

    function ordenar(keyname) {
      vm.sortKey = keyname;
      vm.reverse = !vm.reverse;
    }

   /* if($routeParams.cadastroId) {
			recursoCadastro.get({cadastroId: $routeParams.cadastroId}, function(cadastro) {
				$scope.cadastro = cadastro; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a foto'
			});
		}*/

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
 function remover (cadastro) {
      recursoConsulta.delete({cadastroId: cadastro._id}, function() {
        var indiceDoCadastro = vm.cadastros.indexOf(cadastro);
        vm.cadastros.splice(indiceDoCadastro, 1);
        $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
      }, function(erro) {
        console.log(erro);
        $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
      });
    };
}
})();
