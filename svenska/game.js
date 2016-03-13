var dict_raw  = '[{"id":"0","sw":"ser","en":"see"},{"id":"1","sw":"kommer","en":"come"},{"id":"2","sw":"simmar","en":"swim"},{"id":"3","sw":"skriver","en":"write"},{"id":"4","sw":"sjunger","en":"sing"},{"id":"5","sw":"väljer","en":"choose"},{"id":"6","sw":"går","en":"walk"},{"id":"7","sw":"hoppar","en":"jump"},{"id":"8","sw":"lagar","en":"cook"},{"id":"9","sw":"sover","en":"sleep"},{"id":"10","sw":"springer","en":"run"},{"id":"11","sw":"åker","en":"going"},{"id":"12","sw":"regnar","en":"rain"},{"id":"13","sw":"hör","en":"listen"},{"id":"14","sw":"säljer","en":"sell"},{"id":"15","sw":"betalar","en":"pay"},{"id":"16","sw":"vill","en":"want"},{"id":"17","sw":"hittar","en":"find"},{"id":"18","sw":"arbetar","en":"work"},{"id":"19","sw":"ritar","en":"draw"},{"id":"20","sw":"ha","en":"have"},{"id":"21","sw":"köper","en":"buy"},{"id":"22","sw":"använder","en":"use"},{"id":"23","sw":"visar","en":"show"},{"id":"24","sw":"leker","en":"play"},{"id":"25","sw":"skrattar","en":"laugh"},{"id":"26","sw":"gråter","en":"cry"},{"id":"27","sw":"tvättar","en":"wash"},{"id":"28","sw":"lyssnar","en":"listen"},{"id":"29","sw":"står","en":"stand"},{"id":"30","sw":"pratar","en":"talk"},{"id":"31","sw":"flyger","en":"fly"},{"id":"32","sw":"finns","en":"is"},{"id":"33","sw":"tar","en":"take"},{"id":"34","sw":"stöttar","en":"support"},{"id":"35","sw":"sitter","en":"sit"}]';

var dict = JSON.parse(dict_raw);

var check = function(id, en) {
      if (dict[id].en === en) {
          return "alert-success";
      }
  return "alert-danger";
};

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

angular.module("GameApp", [])
.controller("GameCtrl", function($scope) {
    var init = function() {
        var right = Math.floor(Math.random() * dict.length);
        var indicies = [];
        while(indicies.length < 2) {
            var temp = Math.floor(Math.random() * dict.length);
            if (temp != right) {
                indicies.push(temp);
            }
        }
        $scope.verb = dict[right];
        $scope.foo = [
            {word: dict[indicies[0]], en: dict[indicies[0]].en},
            {word: dict[indicies[1]], en: dict[indicies[1]].en},
            {word: dict[right], en: dict[right].en}
        ];
        shuffle($scope.foo);
        $scope.options = [];
        for (i in $scope.foo) {
            $scope.options.push(
                {'word': $scope.foo[i].en, 'class': 'alert-info'}
            );
        };
        
    };
    $scope.answer = function($event) {
        $(event.root).addClass('clicked');
        $scope.options = [];
        for (i in $scope.foo) {
            $scope.options.push(
                {'word': $scope.foo[i].en, 'class': check($scope.verb.id, $scope.foo[i].en)}
            );
        };
    };
    $scope.next = function() {
        init();  
    };
    init();
});