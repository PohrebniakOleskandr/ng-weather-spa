//Setting up module and it's dependencies

var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);

//Adding routes
weatherApp.config(function($routeProvider){
    
    $routeProvider
    .when('/',{
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    .when('/forecast',{
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
 
});

//Adding custom service

weatherApp.service('cityService',function(){
    this.city = "New York, NY"
});


//Adding controllers

weatherApp.controller('homeController', ['$scope', 'cityService',function($scope,cityService){
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
    
}]); 

weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope,cityService){
    $scope.city = cityService.city;
}]); 
