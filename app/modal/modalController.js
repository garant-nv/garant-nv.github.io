app.controller('modalController', function ($scope, $uibModalInstance, inputdata) {


    $scope.bigurl = inputdata;


    $scope.close = function () {
        $uibModalInstance.close();
    };
})