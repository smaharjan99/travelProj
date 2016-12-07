'use strict';

var appName = angular.module("travelApp", ['ngRoute', 'ui.bootstrap']);
appName.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider.when('/', {
            controller: "travelCtrl",
            templateUrl: "/views/homePage.html"
        })
        .when("/about", {
            //controller: "travelCtrl",
            templateUrl: "/views/aboutPage.html"
        })
        .when("/reservations", {
            //controller: "travelCtrl",
            templateUrl: "/views/reservationsPage.html"
        })
        .when("/destinations", {
            controller: "travelCtrl",
            templateUrl: "/views/destinationsPage.html"
        })
        .when("/contact", {
            //controller: "travelCtrl",
            templateUrl: "/views/contactPage.html"
        })
        .when("/bookings", {
            controller: "travelCtrl",
            templateUrl: "/views/bookings.html"
        })
        .when("/hotels", {
            templateUrl: "/views/hotels.html"
        })
        .when("/contactUs", {
            templateUrl: "/views/contactPage.html"
        })
        .otherwise({
            templateUrl: "/views/error.html"
        });
    $locationProvider
        .html5Mode(false)
        .hashPrefix('!');
}]);