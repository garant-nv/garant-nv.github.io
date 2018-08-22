app.controller('furnituresController', function ($scope, dataService) {

    $scope.fdata = dataService.getFurnitures();
    console.log('furnituresController', dataService.getFurnitures());

});