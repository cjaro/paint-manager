var app = angular.module('PaintApp', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/jobs', {
      templateUrl: '/views/jobs.html',
      controller: 'JobsController',
      controllerAs: 'jc'
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
