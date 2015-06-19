'use strict';

angular.module('risevision.website.controllers')

.controller('WebinarCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('js/webinar.json')
    .then(function(req) {
    $scope.webinars = req.data;
  })
}]);