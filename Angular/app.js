(function () {
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckContoller',LunchCheckContoller);

LunchCheckContoller.$inject = ['$scope'];

function LunchCheckContoller($scope) {
  $scope.Items = '';
  $scope.CheckLunch = function () {
    // body...
    var numOfItems = $scope.Items
    .split(',')
    .filter(x => x.trim() != '')
    .length;

    if (numOfItems == 0) {
      $scope.message = "Enter some data please";
    } else if (numOfItems <= 3) {
      $scope.message = "Its not too much.Enjoy your lunch!!"
    } else{
      $scope.message = "It's too much dude!!"
    }
  };
  // body...
};

})();
