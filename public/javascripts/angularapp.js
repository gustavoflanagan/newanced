var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope, $http) {
   
    $http.get('/posts')
    .then(function(response) {
        // console.log(response)
        $scope.allData = response.data;
    });
});