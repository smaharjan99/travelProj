angular.module("travelApp").directive("footerPage", function () {
    return {
        restrict: "EAMC",
        controller: "travelCtrl",
        templateUrl: "/views/footerPage.html",
        link: function ($scope) {

        }
    };
});