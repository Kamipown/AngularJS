var app = angular.module("KamiApp", ["ngRoute"]);

app.config(function($routeProvider)
{
	$routeProvider.when("/", {templateUrl: "partials/home.html"});
	$routeProvider.when("/grass", {templateUrl: "partials/grass_pokemons.html", controller: "grass_pokemons_ctrl"});
	$routeProvider.when("/fire", {templateUrl: "partials/fire_pokemons.html", controller: "fire_pokemons_ctrl"});
	$routeProvider.when("/water", {templateUrl: "partials/water_pokemons.html", controller: "water_pokemons_ctrl"});
	$routeProvider.otherwise({redirectTo: "/"});
});

app.controller("grass_pokemons_ctrl", function($scope)
{
	$scope.pokemons =
	[
		{id:'1', name:'Bulbasaur', lvl:'5'},
		{id:'2', name:'Ivysaur', lvl:'16'},
		{id:'3', name:'Venusaur', lvl:'32'}
	];
});

app.controller("fire_pokemons_ctrl", function($scope)
{
	$scope.pokemons =
	[
		{id:'4', name:'Charmander', lvl:'5'},
		{id:'5', name:'Charmeleon', lvl:'16'},
		{id:'6', name:'Charizard', lvl:'36'}
	];
});

app.controller("water_pokemons_ctrl", function($scope)
{
	$scope.pokemons =
	[
		{id:'7', name:'Squirtle', lvl:'5'},
		{id:'8', name:'Wartortle', lvl:'16'},
		{id:'9', name:'Blastoise', lvl:'36'}
	];
});
