"use strict";
angular.module("risevision.website", ["ui.odometer", "risevision.common.header", "ui.bootstrap","ui.bootstrap.tpls", "ui.router", "risevision.common.loading"])

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

        $urlRouterProvider.otherwise('/');
    
        $stateProvider
        
            // HOME PAGE
            .state('home', {
                url: '/',
                templateUrl: 'partials/home-view.html'
                // controller: 'ModalDemoCtrl'
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

            // CONTACT PAGE
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/contact-view.html'
            })

            // SELLERS PAGE
            .state('sellers', {
                url: '/sellers',
                templateUrl: 'partials/sellers-view.html',
                controller: 'ModalDemoCtrl'
            })

        });
    
