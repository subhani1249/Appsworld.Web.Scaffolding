'use strict';

/**
 * @ngdoc directive
 * @name appsworld.directive:nativeTab
 * @description
 * # nativeTab
 */
angular.module('appsworld')
  .directive('nativeTab', function () {
    return {
      restrict: 'A',
      link: function( scope , element , attributes ){
        var $element = angular.element(element);
        $element.on('click', function(e) {
          e.preventDefault();
          $element.tab('show');
        });
      }
    };
  });
