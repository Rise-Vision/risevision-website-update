'use strict';

angular.module('risevision.website')

.controller('WebinarCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('https://api.citrixonline.com:443/G2W/rest/organizers/7757233020513793286/webinars')
    .then(function(req) {
    $scope.webinars = req.data;
  })
}]);