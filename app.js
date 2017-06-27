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


//Adding controllers

weatherApp.controller('homeController', ['$scope', function($scope){
    
}]); 

weatherApp.controller('forecastController', ['$scope', function($scope){
    
}]); 
