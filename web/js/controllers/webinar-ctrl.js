angular.module('risevision.website')

.controller('WebinarCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('js/webinar.json')
    .then(function(req) {
    $scope.webinars = req.data;
  })
}]);