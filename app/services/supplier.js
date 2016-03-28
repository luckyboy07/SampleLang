'use strict';

angular.module("myApp")
    .factory('suppFctory', function($q, $http, API_URL) {
        return {
            getAllSupplier: function() {
                var deferred = $q.defer();
                $http({
                    url: API_URL + '/paytype',
                    method: 'GET',
                }).then(function(res) {
                    // return res.data;
                    deferred.resolve(res.data);
                });
                return deferred.promise;
            },
            getSuppDetails: function(pt_id) {
                var deferred = $q.defer();
                $http({
                    url: API_URL + '/paytype/' + pt_id,
                    method: 'GET',
                }).then(function(res) {
                    deferred.resolve(res.data);
                });
                return deferred.promise;
            },
             saveSupplier: function(data){
                var deferred = $q.defer();
                $http({
                    url: API_URL + '/paytype',
                    method: 'POST',
                    data: data
                }).then(function(res) {
                    deferred.resolve(res.data);
                });
                return deferred.promise;
            },
            updateSupplier: function(pt_id,data) {
                var deferred = $q.defer();
                $http({
                    url: API_URL + '/paytype/' + pt_id,
                    method: 'PUT',
                    data: data
                }).then(function(res) {
                    deferred.resolve(res.data);
                });
                return deferred.promise;
            }
        }
    });