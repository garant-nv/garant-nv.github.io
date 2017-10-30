var app = angular.module("app", ['ui.router', 'ui.bootstrap']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //$locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/home');
   
    $stateProvider

       // HOME STATES AND NESTED VIEWS ========================================
       .state('home', {
           url: '/home',
           views: {
               '': {
                   templateUrl: '/app/home.html',
                   controller: 'homeController'
               },
               'shortmenu@home': {templateUrl: '/app/shortmenu.html'}
           }
       })

        
       .state('about', {
           url: '/about',
           templateUrl: '/app/about.html', 
           controller: 'aboutController' 
             
           

       })
       .state('products', {
           url: '/products',
           views:{
               '': {
                   templateUrl: '/app/products.html',
                   controller: 'productsController'
               },
               'shortmenu@products': { templateUrl: '/app/shortmenu.html' },
               //'details@products': {
               //    templateUrl: '/app/details.html',
               //    controller: 'detailsController',
               //}
           }

       })
        .state('products.details', {
            name:"details",
            parent: "products",
            url: '/details/{type}',
            templateUrl: '/app/details.html',
            controller: 'detailsController',
            params: {
                category: null,
                type: null
            }
            
        })
        // шафи
        .state('products.cabinets', {
            name:"cabinets",
            parent: "products",
            url: '/cabinets',
            views:{
                '': {
                    templateUrl: '/app/cabinets.html',
                    controller: 'cabinetsController'
                },
                'cabinetsmenu@cabinets':{templateUrl: '/app/cabinetsmenu.html'}
            }
               
               
               
            
        })
      
        // кухны
        .state('products.kitchens', {
            parent: "products",
            url: '/kitchens',
            templateUrl: '/app/kitchens.html',
            controller: 'kitchensController'
        })
        //меблы
        .state('products.furnitures', {
            parent: "products",
            url: '/furnitures',
            templateUrl: '/app/furnitures.html',
            controller: 'furnituresController'
        })

       .state('contact', {
           url: '/contact',
           templateUrl: '/app/contact.html',
           controller: 'contactController'
           
       });
});

app.controller('homeController', function ($scope ) {
    
});

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

app.controller('productsController', function ($scope) {
    console.log('products');
});

app.controller('contactController', function ($scope) {
    console.log('contact');
});
app.controller('cabinetsController', function ($scope) {
    console.log('cabinetsController');

});
app.controller('kitchensController', function ($scope) {
    console.log('kitchensController');

});
app.controller('furnituresController', function ($scope) {
    console.log('furnituresController');

});


app.controller('detailsController', function ($scope, $state, $stateParams) {
    $scope.type = $stateParams.type;
    $scope.category = $stateParams.category;
});

