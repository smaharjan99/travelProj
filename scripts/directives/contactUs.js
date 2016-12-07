angular.module("travelApp").directive("contactUs", function () {
    return {
        restrict: "EAMC",
        controller: "travelCtrl",
        templateUrl: "/views/contactPage.html",
        link: function ($scope) {

        }
    };
});