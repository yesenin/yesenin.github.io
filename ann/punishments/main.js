angular.module('punishments', [])
.controller('MainCtrl', function($scope){
    $scope.players = {
        player1: {name: 'A', points: 0, totalPoints: 0, wordList: [], currentWord: ""},
        player2: {name: 'B', points: 0, totalPoints: 0, wordList: [], currentWord: ""}};
    $scope.wordList = [];
    $scope.newWord = "";
    
    $scope.add = function() {
        if ($scope.wordList.indexOf($scope.newWord) < 0) {
            $scope.wordList.push($scope.newWord);
        }
        $scope.newWord = "";
    }
    
    $scope.punish = function(player) {
        $scope.players[player].points += 1;
        $scope.players[player].totalPoints += 1;
        if ($scope.players[player].points == 3) {
            var i = Math.floor(Math.random()*$scope.wordList.length);
            $scope.players[player].currentWord = $scope.wordList[i];
            $scope.wordList.splice(i, 1);
        }
    }
    
    $scope.complete = function(player) {
        $scope.players[player].wordList.push($scope.players[player].currentWord);
        $scope.players[player].currentWord = "";
        $scope.players[player].points = 0;
    }
    
    $scope.canPunish = function(player) {
        return !($scope.players[player].currentWord === "" && $scope.players[player].points < 3 && $scope.wordList.length > 0);
    }
    
    $scope.canComplete = function(player) {
        return !($scope.players[player].currentWord !== "");
    }
});