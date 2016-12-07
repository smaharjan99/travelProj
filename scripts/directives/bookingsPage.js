angular.module("travelApp").directive("bookings", function () {
    return {
        restrict: "EAMC",
        controller: "travelCtrl",
        templateUrl: "/views/bookings.html"
    }

});