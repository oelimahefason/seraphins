var app = angular.module('myapp', []);
app.controller('MyCtrl',function($scope){
	$scope.name = "Johary";
});

app.controller('OCtrl', function($scope){
	$scope.age = 15;
})