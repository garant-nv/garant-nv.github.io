app
.controller('detailsController', function ($scope, $state, $stateParams, dataService, $uibModal, $sce) {
    $scope.slides = [];
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.type = $stateParams.type;
    $scope.category = $stateParams.category;


    console.log(dataService);
    active();
    function active() {

        if ($scope.category == 'cabinets') {
            loadCabinetsCommon();
            loadCabinets();
        } else if ($scope.category == 'kitchens') {
            loadKitchens()
            loadKitchenCommons();
        } else if ($scope.category == 'furnitures') {
            loadFurnitures();
        } else if ($scope.category == 'others') {
            loadCabinetsCommon();
            loadCabinets();
        }

        console.log($scope.imageContent);


    }

    $scope.getCabinetTemps = function () {

        return $scope.imageContent[$scope.active];
    }


    $scope.zoomImage = function (url, name, isFull) {
        var modalInstance = $uibModal.open({
            templateUrl: '/app/modal/modal.html',
            controller: 'modalController',
            windowClass: isFull ?'modal-custom-full': '',
            resolve: {
                data: function () {
                    return {url: url , name: name};
                }
            }
        });
        modalInstance.result.then(function () {
            // Success	
        }, function () {
            // Cancel
        });


    }
    function loadKitchens() {
        var index = 0;
        $scope.active = index;
        $scope.imageContent = dataService.getKitchens($scope.type);
        console.log($scope.imageContent)
        $scope.slides = [];

        angular.forEach($scope.imageContent, function (v, k) {
            $scope.slides.push({
                image: v.url,
                id: index,
                name: v.name
            })
            index++;
        })
    }
    function loadKitchenCommons() {

        $scope.kitchenCommons = dataService.kitchenCommons;
        $scope.facades = dataService.kitchenfacades[$scope.type];

        console.log($scope.facades);
        console.log($scope.kitchenCommons);
    }
    function loadFurnitures() {
        //$scope.active = 0;
        $scope.slides = $scope.imageContent = dataService.getFurnitures();
        $scope.currentImg = $scope.slides[$scope.type];
        console.log($scope.currentImg);
    }

    function loadCabinets() {
        dataService.getCabinets($scope.type)
          .then(function (res) {
              $scope.imageContent = res;
              if ($scope.imageContent.length > 0) {
                  var index = 0;

                  $scope.active = index;

                  angular.forEach($scope.imageContent, function (v, k) {
                      $scope.slides.push({
                          image: v.url,
                          id: index
                      })
                      index++;
                  })
              } else {
                  $scope.active = null;
                  $scope.slides = [];
              }

          });
    }

    

    function loadCabinetsCommon() {
        $scope.mirrors = dataService.mirrors;
        $scope.oracalColors = dataService.oracalColors;
        $scope.systemColors = dataService.systemColors;
        $scope.combis = dataService.combiTypes;
        $scope.vsTypes = dataService.vsTypes;
        $scope.hullColors = dataService.hullColors;
        $scope.mdfs = dataService.mdfs;
    }

    function loadKitchenFacades() {

    }
    console.log($scope.type);
    console.log($scope.category);

});