var app = angular.module('PaintApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/clients', {
      templateUrl: '/views/clients.html',
      controller: 'ClientsController',
      controllerAs: 'cc'
    })
    .otherwise({
      redirectTo: 'clients'
    })
}]);
