app.controller('mainController', function ($scope, $translate) {
    $scope.setLang = function (key) {
        $scope.lang = key;
        $translate.use(key);
        //$translate.refresh();
    }
    console.log("main");
    
});