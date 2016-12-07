angular.module("travelApp").service("travelService", ["$http", function ($http) {

    this.flightObj = {
        depart: "",
        destination: "",
        departdate: "",
        arrivaldate: "",
        passanger: "",
        class: ""
    }

    var that = this;

    this.addList = addList;

    this.getList = function () {
        return $http({
            method: "GET",
            url: "/service/bookings"
        }).then(function (result) {
            return result.data
        });
    }

    this.postList = function (dataParam) {
        return $http({
            method: "POST",
            url: "/service/bookings",
            data: dataParam
        }).then(function (result) {
            return result.status
        });
    }

    function addList() {
        var tempObj = {
            depart: that.flightObj.depart,
            destination: that.flightObj.destination,
            departdate: that.flightObj.departdate.toLocaleDateString(),
            arrivaldate: that.flightObj.arrivaldate.toLocaleDateString(),
            passanger: that.flightObj.passanger,
            class: that.flightObj.class
        }
        console.log(tempObj);
        return that.postList(tempObj);
    }

}]);