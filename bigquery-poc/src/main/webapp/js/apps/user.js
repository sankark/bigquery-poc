var app=angular.module('User', ['$strap.directives','toggle-switch','resource-admin']).
  config(function($routeProvider,$httpProvider) {
    $routeProvider.
      when('/', {controller:HomeCtrl, templateUrl:'ci_user_view.html'}).
      otherwise({redirectTo:'/'});
    $httpProvider.defaults.headers.put['Content-Type'] =  'application/json';
  });
  
  function HomeCtrl($scope,Admin) {
	  
	  $scope.ci = Admin.query();
	  $scope.save = function(){
		  				Admin.save($scope.ci,function(resp){alertService.add(resp.status, resp.msg);});
	  };
		  
  }