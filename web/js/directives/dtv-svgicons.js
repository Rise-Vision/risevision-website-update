'use strict';

angular.module('risevision.website')

.directive('svgIcon', function() {
    function link(scope, element, attrs) {
      function path(icon) {
        // return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' + '<path d="' + icons1[icon] + '"/>' + '<path d="' + icons2[icon] + '"/>' + '</svg>';
      }

      function renderSVG() {
          element.html( path(attrs.p) );
      }
      
      renderSVG();
    }

    return {
      link: link,
      restrict: 'E'
    };
});