app.controller('aboutController', function ($scope) {
    $scope.slides = [
            {
                image: '/images/common/cabinets/2500/2500-min.jpg',
                
                id: 1
            },
            {
                image: '/images/common/cabinets/1300/1300-min.jpg',

                id: 2
            },
            {
                image: '/images/common/cabinets/3300/3300-min.jpg',

                id: 3
            },
            {
                image: '/images/common/kitchens/elite/2.jpg',

                id: 4
            },
            {
                image: '/images/common/kitchens/platinum/11.jpg',

                id: 5
            },
    ];
    $scope.myInterval = 1500;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    
    console.log('about');
});