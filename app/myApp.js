'use strict';

angular.module('myApp', ['ui.router'])
    .constant('API_URL', 'http://52.64.27.145:5001/api/1.0')
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('bank', {
                url: '/bank',
                templateUrl: 'app/view/bank.html',
                controller: 'bankCtrl'
            })
            .state('bankdetails', {
                url: '/bank/:bk_id',
                templateUrl: 'app/view/bankdetail.html',
                controller: 'bankDetailCtrl'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'app/view/register.html',
            })
            .state('asd', {
                url: '/asd',
                templateUrl: 'app/view/asd.html',
                controller: 'mainCtrl',
            })
            .state('sample', {
                url: '/sample',
                templateUrl: 'app/view/sample.html'
            })
            .state('supplier', {
                url: '/supplier',
                templateUrl: 'app/view/supplier.html',
                controller: 'suppCtrl',
            })
            .state('supplierdetails', {
                url: '/supplierdetail/:pt_id',
                templateUrl: 'app/view/supplierdetail.html',
                controller: 'suppDetailCtrl'
            })
             .state('progress', {
                url: '/progress',
                templateUrl: 'app/view/progressbar.html',
                controller: 'ProgressDemoCtrl'
            });

        $urlRouterProvider.otherwise('/progress');

    });
