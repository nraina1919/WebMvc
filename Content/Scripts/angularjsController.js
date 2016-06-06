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

app.controller('dropdownCtrl', function ($scope, $http) {

    $http.get('/content/customerdata.js').then(function (response) {
        $scope.customerData = response.data.records
    })

    $scope.names = ["Jon", "Snow", "Paul", "Walker"];

    $scope.customerDetail = { Name: "Nitish", City: "Bhopal", Car: "Dodge Viper" };
})

app.controller('domController', function ($scope) {
    $scope.isEnable = true
    $scope.isShow = true;
})

app.controller('eventController', function ($scope) {
    $scope.count = 0
    $scope.eventCounter = 0;
    $scope.eventShowMe = true;
    $scope.clickEventCounter = function () {
        $scope.eventCounter = $scope.eventCounter + 1;
        $scope.eventShowMe = !$scope.eventShowMe
    }
    $scope.showCor = function (event) {
        $scope.x = event.clientX;
        $scope.y = event.clientY;
    }
})

app.controller('formController', function ($scope) {
    $scope.masterUser = { firstName: 'Nitish', lastName: 'Raina' }
    $scope.reset = function () {
        $scope.user = angular.copy($scope.masterUser);
    }
    $scope.reset()
})

app.controller('formValidateController', function ($scope) {
    
})

app.controller('apiController', function ($scope) {
    $scope.name = 'Nitish'
    $scope.num1 = 2
    $scope.num2 = 'test'
    $scope.lowername = angular.lowercase($scope.name)
    $scope.uppername = angular.uppercase($scope.name)
    $scope.numResult1 = angular.isNumber($scope.num1)
    $scope.numResult2 = angular.isNumber($scope.num2)
    $scope.numResult3 = angular.isString($scope.num2)
})