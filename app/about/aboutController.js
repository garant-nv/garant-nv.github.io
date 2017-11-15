app.controller('aboutController', function ($scope) {
    $scope.slides = [];
    $scope.myInterval = 1500;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    init();

    function init() {
        for (var i = 0; i < 5; i++) {
            $scope.slides.push({
                image: '/images/main/' + (i + 1) + '.jpg',
                //text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
                id: i
            });
        }
    }
    console.log('about');
});