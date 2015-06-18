"use strict";
angular.module("risevision.website", ["ui.router", "risevision.common.header", "ui.bootstrap","ui.bootstrap.tpls", "risevision.website.controllers", "risevision.website.directives", "risevision.common.loading"])

    .controller("CommonHeaderNavbarController", function($rootScope,$scope,$state) {
        $rootScope.navOptions = [{
            title: "About Us",
            link: $state.href("about")
        },{
            title: "Pricing",
            link: $state.href("pricing")
        },{
            title: "Webinar",
            link: $state.href("webinar")
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
                controller: 'ModalDemoCtrl'
            })

            // ABOUT PAGE
            .state('about', {
                url: '/about',
                templateUrl: 'partials/about-view.html'
            })

            // PRICING PAGE
            .state('pricing', {
                url: '/pricing',
                templateUrl: 'partials/pricing-view.html'
            })

            // WEBINAR PAGE
            .state('webinar', {
                url: '/webinar',
                templateUrl: 'partials/webinars-view.html',
                controller: 'WebinarCtrl'
            })
        });
    
