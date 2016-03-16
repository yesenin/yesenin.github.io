var app = angular.module('verbs2', [
    'ngRoute'
  ]);

app.config(function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'main.html',
            controller: 'MainCtrl'
        })
        .when('/add', {
            templateUrl: 'add.html',
            controller: 'AddCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
})

app.service('VerbService', function($http) {
    this.get = function() {
            return $http.get('http://178.62.58.179/api/verbs');
        }
})

app.controller('MainCtrl', function($scope, VerbService){
    VerbService.get().then(function(response) {
        $scope.data = response.data.data;
    });
});

app.controller('AddCtrl', function($scope, VerbService){
    VerbService.get().then(function(response) {
        $scope.data = response.data.data;
    });
});