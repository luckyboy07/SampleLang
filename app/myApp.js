'use strict';
angular.module('myApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('bank', {
                url: '/bank',
                templateUrl: 'app/view/bank.html'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'app/view/register.html',
            })
            .state('asd', {
                url: '/asd',
                templateUrl: 'app/view/asd.html',
                controller: 'mainCtrl'
            });

        $urlRouterProvider.otherwise('/asd');
    });