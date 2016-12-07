angular.module("travelApp").directive("hotels", function () {
    return {
        restrict: "EAMC",
        controller: "travelCtrl",
        templateUrl: "/views/hotels.html",
        link: function ($scope) {

        }
    };
});