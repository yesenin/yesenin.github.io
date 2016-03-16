var app = angular.module('verbs2', []);

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