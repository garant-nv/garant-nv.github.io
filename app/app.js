var app = angular.module("app", ['ui.router', 'ui.bootstrap']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //$locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/home');
   
    $stateProvider

       // HOME STATES AND NESTED VIEWS ========================================
       .state('home', {
           url: '/home',
           templateUrl: 'app/home.html',
           controller: 'homeController'
       })

        
       .state('about', {
           url: '/about',
           templateUrl: 'app/about.html', 
           controller: 'aboutController' 
             
           

       })
       .state('products', {
           url: '/products',
           
           templateUrl: 'app/products.html',
           controller: 'productsController' 

           
       })
       .state('contact', {
           url: '/contact',
           templateUrl: 'app/contact.html',
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
