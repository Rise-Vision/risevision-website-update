angular.module('risevision.website')

	.controller('WebinarCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('../../partials/js/webinar.json')
    .success(function(data) {
    $scope.webinars = data;
  })
}]);