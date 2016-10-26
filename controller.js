var app = angular.module("mainApp", ['ngRoute','highcharts-ng']);

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
	
app.controller('docCtrl', function($scope, $http) {
	$http.get('documents.json')
		.then(function(res){
          $scope.documents = res.data.documents;                
        });
});

app.controller('dataCtrl', function ($scope, $http) {
	$scope.temp = [];
	$scope.hum = [];
	$scope.date = [];
	$scope.times = [];
	$scope.b_temp = false;
	$scope.b_hum = false;
	
	$scope.getCurrentWeather = function() {
		
		
		
	}
	

	$scope.updateChart = function() {
		$http.get($scope.url).success(function (data, status) {	
			$scope.weather = data;	
			
			$scope.temp.splice(0,$scope.temp.length);
			$scope.hum.splice(0,$scope.hum.length);
			$scope.date.splice(0,$scope.date.length);
			
			for (var i = 0; i < data.length; i++) {
				$scope.temp[i] = data[i].Temperature;
			}
			for (var i = 0; i < data.length; i++) {
				$scope.hum[i] = data[i].Humidity;
			}		
			for (var i = 0; i < data.length; i++) {
				$scope.date[i] = data[i].Datetime;
			}	

		}).error(function (data, status){
			alert("Error status : " + status);
		});
	}

	function toISO8601(date) {
	  var d  = date.getDate();
	  if(d < 10) d = '0' + d;
	  var m = date.getMonth() + 1;
	  if(m < 10) m = '0' + m;
	  return date.getFullYear() + '-' + m + '-' +  d;
	}
	
	$scope.update = function() {
		$scope.url = "http://localhost:9810/api/weather?temp=" + $scope.b_temp + "&hum=" + $scope.b_hum + "&start_date=" + toISO8601($scope.start) + "&end_date= " + toISO8601($scope.end);			
		$scope.updateChart();
	}

	$scope.chart = {
		options: {
			chart: {
				type: 'line'
			}
		},
		xAxis: {
			categories: $scope.date,
			labels: {enabled:false}
		},
		series: [{
			name: "Temperature",
			data: $scope.temp
		},{
			name: "Humidity",
			data: $scope.hum
		}],
		title: {
			text: 'Weather'
		}
	}
});

