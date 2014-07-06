angular.module('resource-eip', ['ngResource']).
    factory('EIP', function($resource) {
      var Admin = $resource('../admin/eip',
          {}, {
            update: { method: 'PUT'},
          query: {method:'GET'}
          }
      );
 
      return Admin;
    });