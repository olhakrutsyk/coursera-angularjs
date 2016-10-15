(function(){
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchChecker);

    LunchChecker.$injector = ['$scope'];

    function LunchChecker($scope) {
        $scope.dishes = "";
        $scope.message = "";

        $scope.check = function() {
            if (!$scope.dishes) {
                $scope.message = "Please enter data first";
            } else {
                var dishes = $scope.dishes.split(',');
                for (var i=0; i< dishes.length; i++) {
                    if (dishes[i] == false) {
                        dishes.splice(i, 1);
                    }
                }
                if (dishes.length > 3) {
                    $scope.message = "Too much!";
                } else {
                    $scope.message = "Enjoy!";
                }
            }
        };
    }

})();
