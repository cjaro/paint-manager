var app = angular.module('PaintApp', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/clients', {
      templateUrl: '/views/clients.html',
      controller: 'ClientsController',
      controllerAs: 'cc'
    })
    .when('/accordian', {
      templateUrl: '/views/accordian.html',
      controller: 'AccordionDemoCtrl',
      controllerAs: 'ac'
    })
    .otherwise({
      redirectTo: 'accordian'
    })
}]);
