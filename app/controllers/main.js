'use strict';

angular.module("myApp")
    .controller('mainCtrl', function($scope) {
        console.log('mainCtrl');
        $scope.firstName = "John";
        $scope.lastName = "Doe";


    })
    .controller('bankCtrl', function($scope, $state, $stateParams, $http, API_URL, bankFctry) {
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
        $scope.deleteBankDetail = function(bk_id) {
            $http({
                    method: 'DELETE',
                    url: API_URL + '/banks/' + bk_id,
                })
                .success(function(data) {
                    $scope.status = "The Person Deleted Successfully!!!";

                })
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
            $scope.deleteBankDetail = function(bk_id) {
                if ($stateParams.bk_id) {
                    console.log('DELETE $scope.details: ', $scope.details);
                    bankFctry.deleteBankDetail($stateParams.bk_id, $scope.details).then(function(data) {
                        if (data.statusCode == 200 && data.response.success) {
                            console.log('RESPONSE: ', data);

                        }
                    });
                }
            }

        };

    })


.controller('suppCtrl', function($scope, $state, $stateParams, $timeout, $http, API_URL, suppFctory) {
        $scope.names = [];
        suppFctory.getAllSupplier().then(function(data) {
            if (data.statusCode == 200 && data.response.success) {
                $scope.names = data.response.result;
            }

        });

        $scope.getSuppDetails = function(pt_id) {
            $state.go('supplierdetails', { pt_id: pt_id });
        };
        $scope.addSupplier = function() {
            $state.go('supplierdetails');
        }
        $scope.deleteSuppDetail = function(pt_id) {
            $http({
                    method: 'DELETE',
                    url: API_URL + '/paytype/' + pt_id,
                })
                .success(function(data) {
                    console.log( "Deleted Successfully!!!");
                    $timeout(function() {
                        $state.go('progress');
                    }, 300);

                })
        }

    })
    .controller('suppDetailCtrl', function($scope, $state, $stateParams, $timeout, suppFctory) {
        $scope.details = {};

        if ($stateParams.pt_id) {
            suppFctory.getSuppDetails($stateParams.pt_id).then(function(data) {
                if (data.statusCode == 200 && data.response.success) {
                    $scope.details = data.response.result[0];

                }
            });
        }
        $scope.saveSupplier = function() {
            if ($stateParams.pt_id) {
                console.log('UPDATE $scope.details: ', $scope.details);
                suppFctory.updateSupplier($stateParams.pt_id, $scope.details).then(function(data) {
                    if (data.statusCode == 200 && data.response.success) {
                        console.log('RESPONSE: ', data);
                        $timeout(function() {
                            $state.go('supplier');
                        }, 300);
                    }
                });
            } else {
                console.log('CREATE $scope.details: ', $scope.details);
                suppFctory.saveSupplier($scope.details).then(function(data) {
                    if (data.statusCode == 200 && data.response.success) {
                        console.log('RESPONSE: ', data);
                        $timeout(function() {
                            $state.go('supplier');
                        }, 300);
                    }
                });
            }

        };


    });
