app.controller('modalController', function ($scope, $uibModalInstance, data) {


    $scope.url = data.url;
    $scope.name = data.name;


    $scope.close = function () {
        $uibModalInstance.close();
    };
})