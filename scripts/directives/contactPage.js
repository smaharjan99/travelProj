angular.module("travelApp").directive("contactPage", function () {
    return {
        restrict: "EAMC",
        controller: "travelCtrl",
        templateUrl: "/views/contactPage.html",
        link: function ($scope) {

        }
    };
});