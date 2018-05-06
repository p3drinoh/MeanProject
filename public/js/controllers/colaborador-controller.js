(function(){
  'use strict';

  angular
    .module('lasa')
    .controller('colaboradorController', colaboradorController);

    colaboradorController.$inject = [$http, $scope];

    function colaboradorController(){
      /* jshint validthis: true*/

      $http.get('/v1/colaboradores')
  			.success(function(colaboradores) {
  			$scope.colaboradores = colaboradores;
  		})
  		.error(function(erro) {
  			console.log(erro);
  		});
    }
})();
