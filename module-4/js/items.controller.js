(function () {
	'use strict';

	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

  ItemsController.$inject = ['MenuDataService', 'items', '$rootScope'];
  function ItemsController(MenuDataService, items, $rootScope) {
    var ItemsCtrl = this;
    ItemsCtrl.items = items;

  }

})();
