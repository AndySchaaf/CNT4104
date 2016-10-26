var app = angular.module("mainApp", ["ngRoute"]);
app.config(function ($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "main.html"
	})
	.when("/doc", {
		templateUrl: "doc.html"
	})
	.when("/contact", {
		templateUrl: "contact.html"
	})
	.otherwise({
		templateUrl: "main.html"
	})
});