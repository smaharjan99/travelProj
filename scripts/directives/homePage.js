angular.module("travelApp").directive("homePage", function () {
    return {
        restrict: "EAMC",
        controller: "travelCtrl",
        templateUrl: "/views/homePage.html",
        link: function ($scope) {

        }
    };
});