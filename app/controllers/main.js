'use strict';

angular.module("myApp")
    .controller('mainCtrl', function($scope) {
        console.log('mainCtrl');
        $scope.firstName = "John";
        $scope.lastName = "Doe";


    })
    .controller('carCtrl', function($scope) {
        $scope.names = [{
            brand: 'Honda',
            type: 'Civic',
            year: '2009',
            mileage: '21504',
            price: '10000',
            fuel: 'gasoline'
        }];
        $scope.orderByMe = function(x) {
            $scope.myOrderBy = x;
        }
    });