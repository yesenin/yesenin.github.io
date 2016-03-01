angular.module('verbs', [])
.service('VerbService', function($http) {
    return {
        getData: function() {
            return $http.get('verbs.json');
        }
    };
})
.controller('MainCtrl', function($scope, VerbService){
   VerbService.getData().then(function(data){
      $scope.data = JSON.parse(data);
   });
});