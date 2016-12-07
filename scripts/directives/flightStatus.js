angular.module("travelApp").directive("flightStatus", function () {
    return {
        restrict: "EAC",
        controller: "travelCtrl",
        templateUrl: "/views/flightStatus.html"
    };
});