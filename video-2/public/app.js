var gameApp = angular.module("gameApp", ['ngResource']);

gameApp.factory('Game', function($resource) {
  return $resource('/games/:id', {id: "@id"},  {'update': { method:'PUT' }});
});

gameApp.controller("GameListController", function ($scope, Game) {

  $scope.games = Game.query();

  $scope.create = function(gameData) { 
    game = new Game(gameData);
    $scope.games.push(game);
    game.$save()
  };

  $scope.destroy = function(game) { 
    game.$delete(function(){
      $scope.games = Game.query();
    });
  }

  $scope.update = function(game) { 
    game.$update();
  }


});

