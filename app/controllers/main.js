'use strict';

angular.module("myApp")
    .controller('mainCtrl', function($scope) {
        console.log('mainCtrl');
        $scope.firstName = "John";
        $scope.lastName = "Doe";

        
    });
