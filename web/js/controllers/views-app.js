'use strict';

angular.module("risevision.website")


// var MockupsApp = angular.module('risevision.website', [
//   'ngRoute',
//   'ngTouch',
//   'ui.router',
//   'ui.bootstrap',
//   'risevision.website.directives',
//   'angular-flexslider'
// ]);

  .controller(.controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };
}))

  .controller(.controller('MultipleSlidersCtrl', function ($scope) {
  $scope.slideshows = [
  [
    'logos/image32.jpg',
    'logos/image3.jpg',
    'logos/image4.jpg',
    'logos/image5.jpg'
    ]
  ];
}))


.controller(.controller('WebinarCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('js/webinar.json')
    .then(function(req) {
    $scope.webinars = req.data;
  })
}]))


// Vertilize Container
  .directive(.directive('vertilizeContainer', [
    function(){
      return {
        restrict: 'EA',
        controller: [
          '$scope', '$window',
          function($scope, $window){
            // Alias this
            var _this = this;

            // Array of children heights
            _this.childrenHeights = [];

            // API: Allocate child, return index for tracking.
            _this.allocateMe = function(){
              _this.childrenHeights.push(0);
              return (_this.childrenHeights.length - 1);
            };

            // API: Update a child's height
            _this.updateMyHeight = function(index, height){
              _this.childrenHeights[index] = height;
            };

            // API: Get tallest height
            _this.getTallestHeight = function(){
              var height = 0;
              for (var i=0; i < _this.childrenHeights.length; i=i+1){
                height = Math.max(height, _this.childrenHeights[i]);
              }
              return height;
            };

            // Add window resize to digest cycle
            angular.element($window).bind('resize', function(){
              return $scope.$apply();
            });            
          }
        ]
      };
    }
  ]))

  // Vertilize Item
    .directive(.directive('vertilize', [
    function(){
      return {
        restrict: 'EA',
        require: '^vertilizeContainer',
        link: function(scope, element, attrs, parent){
          // My index allocation
          var myIndex = parent.allocateMe();

          // Get my real height by cloning so my height is not affected.
          var getMyRealHeight = function(){
            var clone = element.clone()
              .removeAttr('vertilize')
              .css({
                height: '',
                width: element.width(),
                position: 'fixed',
                top: 0,
                left: 0,
                visibility: 'hidden'
              });
            element.after(clone);
            var realHeight = clone.height();
            clone['remove']();
            return realHeight;
          };

          // Watch my height
          scope.$watch(getMyRealHeight, function(myNewHeight){
            if (myNewHeight){
              parent.updateMyHeight(myIndex, myNewHeight);
            }
          });

          // Watch for tallest height change
          scope.$watch(parent.getTallestHeight, function(tallestHeight){
            if (tallestHeight){
              element.css('height', tallestHeight);
            }
          });
        }
      };
    }
  ]))


.controller(.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size, template) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: template,
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

}))

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

.controller(.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}))
