var myApp = angular.module("myApp", []);

myApp.controller("ApplesController", function ($scope) {
	$scope.apples = 10;
});

myApp.controller("OrangesController", function ($scope) {
	$scope.oranges = 20;
});

