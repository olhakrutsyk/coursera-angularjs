(function () {

'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'SignUpService'];

function SignUpController(MenuService, SignUpService) {
  var $ctrl = this;
  $ctrl.saved = false;
  $ctrl.wrongDish = false;

  $ctrl.submit = function () {

    MenuService.getMenuItem($ctrl.user.dish).then(function () {
      SignUpService.user = $ctrl.user;
      $ctrl.saved = true;
      $ctrl.wrongDish = false;
    }, function () {
      $ctrl.saved = false;
      $ctrl.wrongDish = true;
    });

  }
}

})();
