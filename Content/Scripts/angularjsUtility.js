app.run(function ($rootScope) {
    $rootScope.fname = "JON SNOW"
    $rootScope.names = [{ name: 'Nitish', country: 'India' }, { name: 'Jon Snow', country: 'The Wall' }];
    $rootScope.paisa = 50
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

