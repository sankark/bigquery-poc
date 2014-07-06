var app=angular.module('Home', ['$strap.directives','toggle-switch','resource-admin','resource-eip']).
  config(function($routeProvider,$httpProvider) {
    $routeProvider.
      when('/', {controller:HomeCtrl, templateUrl:'ci_admin_edit.html'}).
      otherwise({redirectTo:'/'});
    $httpProvider.defaults.headers.put['Content-Type'] =  'application/json';
  });
  
  function HomeCtrl($scope,Admin,EIP) {
	  
	  $scope.ci = Admin.query();
	  $scope.save = function(){
		  				Admin.save($scope.ci,function(resp){alertService.add(resp.status, resp.msg);});
	  };
	  
	  $scope.attachEIP = function(){
		  EIP.save($scope.ci,function(resp){alertService.add(resp.status, resp.msg);});
	  };
	  $scope.stop_all = function(){
			Admin.del($scope.ci,function(resp){alertService.add(resp.status, resp.msg);});
};
  }