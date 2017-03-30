var app = angular.module('PaintApp', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/jobs/:expandJobId?', {
      templateUrl: '/views/jobs.html',
      controller: 'JobsController',
      controllerAs: 'jc'
    })
    .when('/jobs', {
      templateUrl: '/views/jobs.html',
      controller: 'JobsController',
      controllerAs: 'jc'
    })
    .when('/clients', {
      templateUrl: '/views/clients.html',
      controller: 'ClientsController',
      controllerAs: 'ac'
    })
    .otherwise({
      redirectTo: 'clients'
    })
}]);

app.filter("emptyToStart", function () {
    return function (array, key) {
        if(!angular.isArray(array)) return;
        var present = array.filter(function (item) {
            return item[key];
        });
        var empty = array.filter(function (item) {
            return !item[key]
        });
        return empty.concat(present);
    };
});
