'use strict';

angular.module("travelApp").controller("travelCtrl", ["$scope", "travelService", function ($scope, $travelService) {

    $scope.destinationsList = [
            {
                name: 'The Shire',
                src: '#!/destinations'
            },
            {
                name: 'Rivendell',
                src: '#!/destinations'
            },
            {
                name: 'Isengard',
                src: '#!/destinations'
        },
            {
                name: 'Mordor',
                src: '#!/destinations'
            }
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

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];


    $scope.slides = [
        {
            image: '/images/map.jpg'
            text: 'asd',
            id: 0
    },
        {
            image: '/images/about1.jpg'
            text: 'asd',
            id: 1
  }]


}]);