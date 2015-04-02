'use strict';

angular.module('testApp')
  .directive('addressDialog', function (ModalService) {

    function showDialog(scope) {
      var inputs, isAdding = scope.address === undefined;
      if (isAdding) {
        inputs = {
          title: 'Add Address',
          address: {}
        };
      } else {
        inputs = {
          title: 'Update Address',
          address: scope.address
        };
      }
      ModalService.showModal({
        templateUrl: 'views/modals/modal.html',
        controller: 'modalController',
        inputs: inputs
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          if (result !== 'cancel') {
            scope.onUpdate({$address: result});
          }
        });
      });
    }

    return {
      restrict: 'A',
      scope: {
        address: '=addressDialog',
        onUpdate: '&'
      },
      link: function postLink(scope, element) {

        element.on('click', function(){
          showDialog(scope);
        });

      }
    };
  });
