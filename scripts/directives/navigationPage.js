angular.module("travelApp").directive("navigationPage", function () {
    return {
        restrict: "EAMC",
        controller: "travelCtrl",
        templateUrl: "/views/navigationPage.html",
        link: function ($scope) {

        }
    };
});