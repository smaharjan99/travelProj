angular.module("travelApp").directive("reservationsPage", function () {
    return {
        restrict: "EAMC",
        controller: "travelCtrl",
        templateUrl: "/views/reservationsPage.html",
        link: function ($scope) {

        }
    };
});