var gameApp = angular.module("gameApp", ["ngResource"]);

gameApp.factory("Game", function($resource){
	return $resource("/games/:id", {id: "@id"}, {update: {method: "PUT"}});
});

gameApp.controller("GameListController", function ($scope, Game) {
  $scope.games = Game.query();

  $scope.create = function(){
  	game = new Game({name: $scope.gameName, rating: $scope.gameRating});
  	$scope.games.push(game);
  	game.$save();
  }

  $scope.delete = function(game){
  	game.$delete(function(){
  		$scope.games = Game.query()
  	})
  }

  $scope.update = function(game){
  	console.log("hi")
  	game.$update();
  }
});
