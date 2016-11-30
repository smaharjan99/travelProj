angular.module("travelApp").directive("destinationsPage", function () {
    return {
        restrict: "EAMC",
        controller: "travelCtrl",
        templateUrl: "/views/destinationsPage.html",
        link: function ($scope) {

        }
    };
});