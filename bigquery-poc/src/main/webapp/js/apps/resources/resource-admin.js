angular.module('resource-admin', ['ngResource']).
    factory('Admin', function($resource) {
      var Admin = $resource('../admin/edit',
          {}, {
            update: { method: 'PUT'},
          query: {method:'GET'},
          del:{method:'DELETE'}
          }
      );
 
      return Admin;
    });