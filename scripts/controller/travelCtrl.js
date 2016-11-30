'use strict';

angular.module("travelApp").controller("travelCtrl", ["$scope", "travelService", function ($scope, $travelService) {

    $scope.destinationsList = [
        'The Shire',
        'Rivendell',
        'Isengard',
        'Mordor'
    ],
        $scope.status = {
            isopen: false
        };

    $scope.toggled = function (open) {
        $log.log('Dropdown is now: ', open);
    };
    $scope.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appenToEl = angular.element(document.querySelector('#dropdown-long-content'));

}]);