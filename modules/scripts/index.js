var app = angular.module("KamiApp", []);
app.controller("pokemon_ctrl", function($scope)
{
	$scope.pokemons =
	[
		{id:'4', name:'Charmander', lvl:'5'},
		{id:'5', name:'Charmeleon', lvl:'16'},
		{id:'6', name:'Charizard', lvl:'36'}
	];
});
