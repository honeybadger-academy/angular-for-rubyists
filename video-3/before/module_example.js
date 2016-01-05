var myFeature = angular.module("myFeature", [])

myFeature.provider("myProvider", function(){
  this.$get = function(){
    return "I am a provider, the basic building block of modules."
  }
});

myFeature.value("myValue", "I'm a value...but under the hood I'm a provider.");

myFeature.factory("myFactory", function(){
  return "I'm a factory...a provider that runs a function"
});

myFeature.service("myService", function(){
  this.saySomething = function(){
    return "I'm a service...a provider that instantiates a function."
  };
});

myFeature.provider("dynamic", function(){
  var message = "";
  this.setMessage = function(m){ message = m };
  this.$get = function(){ return message };
});

myFeature.config(function(dynamicProvider){
  dynamicProvider.setMessage("This is a dynamic message: " + new Date());
});

myFeature.controller("MyController", function($scope, myProvider, myValue, myFactory, myService, dynamic){
  $scope.myProvider = myProvider;
  $scope.myValue = myValue;
  $scope.myFactory = myFactory;
  $scope.myService = myService;
  $scope.dynamic = dynamic;
});


var myApp = angular.module("myApp", ["myFeature"]);



