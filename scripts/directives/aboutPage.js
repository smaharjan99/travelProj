angular.module("travelApp").directive("aboutPage", function () {
    return {
        restrict: "EAMC",
        controller: "travelCtrl",
        templateUrl: "/views/aboutPage.html",
        link: function ($scope) {

        }
    };
});