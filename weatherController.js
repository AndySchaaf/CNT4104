var app = angular.module('mainApp', []);

app.controller('sidebar', function($scope) {
	
	$scope.submit = function() {
		var sdate = $scope.startDate;
		var edate = $scope.endDate;
	}
});

app.controller('documentController', function($scope, $http) {
		$scope.documents = {
			"documents":[
				{
					"date":"1/1/2016",
					"name":"Project Report #1"
				},
				{
					"date":"1/1/2016",
					"name":"Project Report #1"
				}
			]
		}
	});