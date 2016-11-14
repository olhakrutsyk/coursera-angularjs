(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])

    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ShoppingListCheckOffService() {
        var service = this;
        service.toBuy = [
            { name: "cookies", quantity: 10 },
            { name: "mandarins", quantity: 15 },
            { name: "chocolates", quantity: 8 },
            { name: "tomatoes", quantity: 20},
            { name: "melons", quantity: 5 }
        ];
        service.bought = [];

        service.alreadyBought = function (index, items) {
            var item = service.toBuy[index];
            service.toBuy.splice(index, 1);
            service.bought.push(item);
        };
    }

    function ToBuyController(shopList) {
        var controller = this;
        controller.buyItems = shopList.toBuy;
        controller.alreadyBought = shopList.alreadyBought;
    }

    function AlreadyBoughtController(shopList) {
        var controller = this;
        controller.bougthItems = shopList.bought;
    }
})();
