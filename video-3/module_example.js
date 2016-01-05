var myFeature = angular.module("MyFeature", []);

myFeature.provider('myProvider', function() {
  this.$get = function() {
    return "I am a provider, the basic building block of modules."
  };
});

myFeature.value("myValue", "I'm a value...but under the hood I'm a provider.")

myFeature.factory('myFactory', function() {
  return "I'm a factory...just another way to define a provider."
});

myFeature.service('myService', function() {
  this.saySomething = function(){
    return "I'm a service...a little more complex, but still just a provider."
  };
});

myFeature.provider('dynamic', function() {
  var message = "";
  this.setMessage = function(msg){ message = msg };
  this.$get = function() {
    return message
  };
});

myFeature.config(function(dynamicProvider) {
  dynamicProvider.setMessage("I'm a provider with message configured at runtime");
});

myFeature.controller("MyController", function ($scope, myProvider, myValue, myFactory, myService, dynamic) {
  $scope.provider = myProvider;
  $scope.value = myValue;
  $scope.factory = myFactory;
  $scope.service = myService.saySomething();
  $scope.dynamic = dynamic;
});


var myApp = angular.module("myApp", ["MyFeature"]);

