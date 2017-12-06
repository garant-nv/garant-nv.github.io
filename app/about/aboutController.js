app.controller('aboutController', function ($scope) {
    $scope.slides = [];
    $scope.myInterval = 1500;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    init();
    console.log('about');
    function init() {
        for (var i = 0; i < 5; i++) {
            $scope.slides.push({
                image: '/images/main/' + (i + 1) + '.jpg',
                //text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
                id: i
            });
        }
        //$scope.slides.push({
        //    image: '/images/common/cabinets/2500/2500-min.jpg',
        //    id: 1
        //});

        //$scope.slides.push({
        //        image: '/images/common/cabinets/1300/1300-min.jpg',

        //        id: 2
        //    });
        //$scope.slides.push({
        //        image: '/images/common/cabinets/3300/3300-min.jpg',

        //        id: 3
        //    });
        //$scope.slides.push({
        //        image: '/images/common/kitchens/elite/2.jpg',

        //        id: 4
        //    });
        //$scope.slides.push({
        //        image: '/images/common/kitchens/platinum/11.jpg',

        //        id: 5
        //    });
        
    }
});