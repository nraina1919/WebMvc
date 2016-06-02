var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.itemprice = 2
    $scope.itemquantity = 3
    $scope.mtname = "carl"
    $scope.mtClick = function () {
        $scope.person.name = "lol"
    }
});
app.controller('ctrl2', function ($scope) {
    $scope.mtname = "johnson"
});
app.controller('serviceCtrl', function ($scope, $location, $http, $timeout, $hex) {
    $scope.myUrl = $location.absUrl()
    $http.get("/").then(function (response) {
        $timeout(function () {
            $scope.htmlData = "server response received"
        }, 2000)
    })
    $scope.hex = $hex.convertToHex(255);
    $http({
        method: 'GET',
        url: '/'
    }).then(function successCallback(response) {
        $scope.httpSuccessData = "success"
        $scope.httpSuccessConfig = response.config;
        $scope.httpSuccessHeaders = response.headers;
        $scope.httpSuccessStatus = response.status;
        $scope.httpSuccessStatusText = response.statusText;
    }, function errorCallback(response) {
        $scope.httpErrorData = "error"
    })
});
app.directive('myDirtv', function () {
    return {
        template: "<h4>hello directive</h4>"
    }
});

app.service('$hex', function () {
    this.convertToHex = function (x) {
        return x.toString(16);
    }
})

app.service('$convert', function () {
    this.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    }
})

app.run(function ($rootScope) {
    $rootScope.fname = "JON SNOW"
    $rootScope.names = [{ name: 'Nitish', country: 'India' }, { name: 'Jon Snow', country: 'The Wall' }];
    $rootScope.paisa = 50
});
app.filter('hexFormatter', ['$hex', function ($hex) {
    return function (input) {
        return $hex.convertToHex(input);
    }
}]);
app.filter('titleCaseFormatter', ['$convert', function ($convert) {
    return function (input) {
        return $convert.toTitleCase(input);
    }
}])

