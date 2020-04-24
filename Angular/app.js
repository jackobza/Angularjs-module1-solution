(function () {
'use strict';

angular.module('NameCalculator',[])

.controller('NameCalculatorConntroller',function($scope){
  $scope.name = "";
  $scope.totalvalue = 0;

  $scope.displayNumeric= function () {
    var totalNameValue = calculating($scope.name);
    $scope.totalvalue = totalNameValue;
    var x = everyLetter($scope.name);
  };
  function calculating(string) {
    var sum = 0;
    for (var i = 0; i < string.length; i++) {
      sum += string.charCodeAt(i);
    }
    return sum;
  };
  function everyLetter(string) {
    // body...
    var counter = 0;
    var count = [] ;
    for (var i = 0; i < string.length; i++) {
      var sum = 0;
      var ch = [];
      for (var i = 0; i < ch.length; i++) {
         if (string.charCodeAt(i)=ch[i]) {
          counter++;

         }
      }

      
    }
  }
});


})();
