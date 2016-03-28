'use strict';

angular.module("myApp")
    .factory('bankFctry', function($q, $http, API_URL) {
        return {
            getAllBanks: function() {
                var deferred = $q.defer();
                $http({
                    url: API_URL + '/banks',
                    method: 'GET',
                }).then(function(res) {
                    // return res.data;
                    deferred.resolve(res.data);
                });
                return deferred.promise;
            },
            getBankDetails: function(bk_id) {
                var deferred = $q.defer();
                $http({
                    url: API_URL + '/banks/' + bk_id,
                    method: 'GET',
                }).then(function(res) {
                    deferred.resolve(res.data);
                });
                return deferred.promise;
            },
            saveBank: function(data){
                var deferred = $q.defer();
                $http({
                    url: API_URL + '/banks',
                    method: 'POST',
                    data: data
                }).then(function(res) {
                    deferred.resolve(res.data);
                });
                return deferred.promise;
            },
            updateBank: function(bk_id,data) {
                var deferred = $q.defer();
                $http({
                    url: API_URL + '/banks/' + bk_id,
                    method: 'PUT',
                    data: data
                }).then(function(res) {
                    deferred.resolve(res.data);
                });
                return deferred.promise;
            },
            // deleteBankDetail: function(bk_id) {
            //     var deferred = $q.defer();
            //     $http({
            //         url: API_URL + '/banks/' + bk_id,
            //         method: 'DELETE',
            //     }).then(function(res) {
            //         deferred.resolve(res.data);
            //     });
            //     return deferred.promise;
            // }
        }
    });