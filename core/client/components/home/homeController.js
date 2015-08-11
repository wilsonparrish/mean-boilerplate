(function () {
    "use strict";

    angular.module('app')
        .controller('homeController', function ($scope, $http) {
            $scope.test = "If you see this Angular is working!";

            $http.get('https://mysterious-eyrie-4450.herokuapp.com/api/users').then(function (res) {
                console.log('Success', res);
                $scope.mentors = res.data;
                // For JSON responses, resp.data contains the result
            }, function (err) {
                console.error('ERR', err);
                // err.status will contain the status code
            });
        });


} ());

