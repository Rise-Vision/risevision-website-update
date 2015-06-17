"use strict";
angular.module("risevision.website",["ui.router","risevision.common.header","ui.bootstrap","ui.bootstrap.tpls","risevision.common.loading"])

    .controller("CommonHeaderNavbarController", function($rootScope,$scope,$state) {
        $rootScope.navOptions = [{
            title: "About Us",
            link: $state.href("#")
        },{
            title: "Pricing",
            link: $state.href("#")
        },{
            title: "Webinar",
            link: $state.href("#")
        },{
            title: "Blog",
            link: $state.href("#")
        }];
    })

    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/home');
    
        $stateProvider
        
            // HOME PAGE
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home-view.html',

            })
        });
    
