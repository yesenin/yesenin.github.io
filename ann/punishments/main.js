angular.module('punishments', [])
.service('PunishService', function($http) {
    this.get = function() {
            var raw = '{"he":{"name":"H","points":0,"totalPoints":0,"wordList":[],"currentWord":""},"she":{"name":"S","points":0,"totalPoints":0,"wordList":[],"currentWord":""},"wordList":[],"history":[]}';
            //return JSON.parse(raw);
            return $http.get('http://178.62.58.179/api/punishment');
        }
    this.post = function(data) {
            var raw = '{"he":{"name":"H","points":0,"totalPoints":0,"wordList":[],"currentWord":""},"she":{"name":"S","points":0,"totalPoints":0,"wordList":[],"currentWord":""},"wordList":[],"history":[]}';
            //return JSON.parse(raw);
            return $http.post('http://178.62.58.179/api/punishment', data);
        }
})
.controller('MainCtrl', function($scope, PunishService){
    PunishService.get().then(function(response) {
        $scope.data = response.data.data[0];
        $scope.canPunish = function(player) {
            return !($scope.data[player].currentWord === "" && $scope.data[player].points < 3 && $scope.data.wordList.length > 0);
        }

        $scope.canComplete = function(player) {
            return !($scope.data[player].currentWord !== "");
        }
    });
    $scope.newWord = "";
    $scope.add = function() {
        if ($scope.newWord === "")
            return;
        if ($scope.data.history.indexOf($scope.newWord) < 0) {
            $scope.data.wordList.push($scope.newWord);
            $scope.data.history.push($scope.newWord);
        }
        $scope.newWord = "";
    }
    
    $scope.punish = function(player) {
        $scope.data[player].points += 1;
        $scope.data[player].totalPoints += 1;
        if ($scope.data[player].points == 3) {
            var i = Math.floor(Math.random()*$scope.data.wordList.length);
            $scope.data[player].currentWord = $scope.data.wordList[i];
            $scope.data.wordList.splice(i, 1);
        }
    }
    
    $scope.complete = function(player) {
        $scope.data[player].wordList.push($scope.data[player].currentWord);
        $scope.data[player].currentWord = "";
        $scope.data[player].points = 0;
    }
});