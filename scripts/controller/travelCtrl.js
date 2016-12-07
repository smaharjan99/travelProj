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
                name: 'Minas Tirith',
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
    var slides1 = $scope.slides2 = [];
    var slides2 = $scope.slides2 = [];
    var slides3 = $scope.slides2 = [];



    $scope.slides = [
        {
            image: '/images/map.jpg',
            text: 'asd',
            id: 0
    },
        {
            image: '/images/about1.jpg',
            text: 'asd',
            id: 1
  }]

    $scope.slides2 = [
        {
            image: '/images/shire3.jpg',
            text: 'THE SHIRE',
            id: 0
    },
        {
            image: '/images/rivendell1.jpg',
            text: 'RIVENDELL',
            id: 1
  },
        {
            image: '/images/minas1.jpg',
            text: 'MINAS TIRITH',
            id: 2
    },
        {
            image: '/images/mordor1.jpg',
            text: 'MORDOR',
            id: 3
  }
    ]

    $scope.slides1 = [
        {
            image: '/images/travel1.jpg',
            text: 'asd',
            id: 0
    },
        {
            image: '/images/error1.jpg',
            text: 'asd',
            id: 1
  }]
}]);