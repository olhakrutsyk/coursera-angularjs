(function () {
	'use strict';

	angular.module('NarrowItDownApp', [])

	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItems)
	.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

	MenuSearchService.$inject = ['$http', 'ApiBasePath'];
	NarrowItDownController.$inject = ['MenuSearchService'];

	function NarrowItDownController(menuSearch) {
		var controller = this;
		controller.search = function (input) {
			menuSearch.getMatchedMenuItems(input).then(function (result) {
				controller.found = result;
			});
		};
		controller.removeItem = function (index) {
			controller.found.splice(index, 1);
		}
	}

	function MenuSearchService($http, ApiBasePath) {
		var service = this;

		service.getMatchedMenuItems = function (searchTerm) {
			return $http({
				method: 'GET',
				url: ApiBasePath + '/menu_items.json'
			}).then(function (result) {
				var foundItems = result.data.menu_items.filter(function (item) {
				return item.description.indexOf(searchTerm) !== -1;
			});
				return foundItems;
			});
		}
	}

	function FoundItems() {
		var ddo = {
			templateUrl: 'foundItems.html',
			restrict: 'E',
			replace: true,
			scope: {
				items: '<foundItems',
				onRemove: '&'
			}
		};
		return ddo;
	}

})();
