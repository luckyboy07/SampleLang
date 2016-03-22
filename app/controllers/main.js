'use strict';

angular.module("myApp")
    .controller('mainCtrl', function($scope) {
        console.log('mainCtrl');
        $scope.firstName = "John";
        $scope.lastName = "Doe";


    })
    .controller('bankCtrl', function($scope, $state, $stateParams, bankFctry) {
        $scope.names = [];
        bankFctry.getAllBanks().then(function(data) {
            if (data.statusCode == 200 && data.response.success) {
                $scope.names = data.response.result;
            }
        });

        $scope.addBank = function() {
            $state.go('bankdetails');
        };

        $scope.getBankDetails = function(bk_id) {
            $state.go('bankdetails', { bk_id: bk_id });
        }
        $scope.deleteBank = function(bk_id){
            $state.go('bank', {bk_id: bk_id});

        }


    })
    .controller('bankDetailCtrl', function($scope, $state, $stateParams, $timeout, bankFctry) {
        $scope.details = {};

        if ($stateParams.bk_id) {
            bankFctry.getBankDetails($stateParams.bk_id).then(function(data) {
                if (data.statusCode == 200 && data.response.success) {
                    $scope.details = data.response.result[0];
                }
            });
        }

        $scope.saveBank = function() {
            if ($stateParams.bk_id) {
                console.log('UPDATE $scope.details: ', $scope.details);
                bankFctry.updateBank($stateParams.bk_id, $scope.details).then(function(data) {
                    if (data.statusCode == 200 && data.response.success) {
                        console.log('RESPONSE: ', data);
                        $timeout(function() {
                            $state.go('bank');
                        }, 300);
                    }
                });
            } else {
                console.log('CREATE $scope.details: ', $scope.details);
                bankFctry.saveBank($scope.details).then(function(data) {
                    if (data.statusCode == 200 && data.response.success) {
                        console.log('RESPONSE: ', data);
                        $timeout(function() {
                            $state.go('bank');
                        }, 300);
                    }
                });
            }
            $scope.deleteBank = function(bk_id) {
                console.log('DELETE $scope.details: ', $scope.details);
                bankFctry.deleteBankDetail($stateParams.bk_id, $scope.details).then(function(data) {
                    if (data.statusCode == 200 && data.response.success) {
                         console.log('RESPONSE: ', data);
                        $timeout(function() {
                            $state.go('bank');
                        }, 300);
                        
                    }
                });
            }

        };

    })


.controller('suppCtrl', function($scope, $state, $stateParams, suppFctory) {
    $scope.names = [];
    $scope.details = {};

    if ($stateParams.pt_id !== undefined) {
        console.log('$stateParams.pt_id: ', $stateParams.pt_id);

        suppFctory.getSuppDetails($stateParams.pt_id).then(function(data) {
            if (data.statusCode == 200 && data.response.success) {
                $scope.details = data.response.result;
                console.log('$scope.details: ', $scope.details);
            }
        });
    } else {
        suppFctory.getAllSupplier().then(function(data) {
            console.log('data: ', data);
            if (data.statusCode == 200 && data.response.success) {
                $scope.names = data.response.result;
            }
        });
    }
    $scope.getSuppDetails = function(pt_id) {
        $state.go('supplierdetails', { pt_id: pt_id });
    };

});