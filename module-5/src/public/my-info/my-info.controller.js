(function () {

'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService', 'ApiPath', 'MenuService'];

function MyInfoController(SignUpService, ApiPath, MenuService) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;

  $ctrl.userInfo = SignUpService.user;

  if ($ctrl.userInfo) {
    MenuService.getMenuItem($ctrl.userInfo.dish).then(function (response) {
      $ctrl.favoriteDish = response;
    });
  }
}

})();
