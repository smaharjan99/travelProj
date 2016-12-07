'use strict';

angular.module("travelApp").controller("travelCtrl", ["$scope", "travelService", function ($scope, travelService) {

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
            name: 'Isengard',
            src: '#!/destinations'
        },
        {
            name: 'Mordor',
            src: '#!/destinations'
            }
    ];

    $scope.departingList = [
        {
            name: 'Dallas-FtWorth International Airport'
            },
        {
            name: 'Chicago Ohare International Airport'
            },
        {
            name: 'JFK International Airport'
            },
        {
            name: 'Washington Dulles Airport'
            },
        {
            name: 'Los Angeles (LAX) Airport'
        },
        {
            name: 'George Bush Intercontinental Houston Airport'
        },
        {
            name: 'Philadelphia International Airport'
        },
        {
            name: 'Phoenix Sky Harbor International Airport'
        },
        {
            name: 'Newark Liberty International Airport'
        },
        {
            name: 'Seattle Tacoma International Airport'
        }

    ];

    $scope.dlist = ['Dallas-FtWorth International Airport',
                   'Chicago Ohare International Airport',
                   'JFK International Airport',
                   'Washington Dulles Airport',
                   'Los Angeles (LAX) Airport',
                   'George Bush Intercontinental Houston Airport',
                   'Philadelphia International Airport',
                   'Phoenix Sky Harbor International Airport',
                    'Newark Liberty International Airport',
                   'Seattle Tacoma International Airport']

    $scope.alist = ['The Shire', 'Rivendell', 'Isengard', 'Mordor'];

    $scope.flightlist = {
        depart: "",
        destination: "",
        departdate: "",
        arrivaldate: "",
        passanger: "",
        class: ""
    };


    travelService.flightObj = $scope.flightlist;

    $scope.flightArray = [];

    updateFlightList();


    $scope.flightForm = {
        addList: function () {
            travelService.addList().then(function (response) {
                updateFlightList();
            });
        }
    }

    function updateFlightList() {
        var flightListPromise = travelService.getList();
        flightListPromise.then(function (response) {
            $scope.flightArray = response;
        });
    }

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