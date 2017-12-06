app.controller('homeController', function ($scope,$translate) {
    $scope.slides = [];
    $scope.myInterval = 1500;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    init();
    console.log('HOME');
    function init() {
        for (var i = 0; i < 2; i++) {
            $scope.slides.push({
                image: '/images/main' + (i + 1) + '.jpg',
                text: 'HOME_TXT' + (i + 1),
                id: i
            });
        }
    }
});
