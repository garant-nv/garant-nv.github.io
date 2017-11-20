var app = angular.module("app", ['ui.router', 'ui.bootstrap',  'pascalprecht.translate']);

app.config(function ($stateProvider, $urlRouterProvider,  $translateProvider, $locationProvider) {
    //$locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $translateProvider.useSanitizeValueStrategy(null);
    $translateProvider.useStaticFilesLoader({
        prefix: '/data/translations/',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('ua');
    //$translateProvider.fallbackLanguage('ua');

    $stateProvider
   
       .state('home', {
           url: '/',
          
           views: {
               '': {
                   templateUrl: '/app/home/home.html',
                   controller: 'homeController'
               },
               'shortmenu@home': {templateUrl: '/app/templates/shortmenu.html'}
           }
       })

        
       .state('about', {
           url: '/about',
           templateUrl: '/app/about/about.html', 
           controller: 'aboutController' 
             
           

       })
       .state('products', {
           url: '/products',
           views:{
               '': {
                   templateUrl: '/app/products/products.html',
                   controller: 'productsController'
               },
               'shortmenu@products': { templateUrl: '/app/templates/shortmenu.html' },
             
           }

       })
        .state('products.details', {
            name:"details",
            parent: "products",
            url: '/details/{category}/{type}',
            templateUrl: '/app/products/details/details.html',
            controller: 'detailsController',
            params: {
                category: null,
                type: null
            }
            
        })
      
        .state('products.cabinets', {
            name:"cabinets",
            parent: "products",
            url: '/cabinets',
            views:{
                '': {
                    templateUrl: '/app/products/cabinets/cabinets.html',
                    controller: 'cabinetsController'
                },
                'cabinetsmenu@cabinets':{templateUrl: '/app/templates/cabinetsmenu.html'}
            }
               
               
               
            
        })
      
        // кухны
        .state('products.kitchens', {
            parent: "products",
            url: '/kitchens',
            templateUrl: '/app/products/kitchens/kitchens.html',
            controller: 'kitchensController'
        })
        //меблы
        .state('products.furnitures', {
            parent: "products",
            url: '/furnitures',
            templateUrl: '/app/products/furnitures/furnitures.html',
            controller: 'furnituresController'
        })

       .state('contact', {
           url: '/contact',
           templateUrl: '/app/contact/contact.html',
           controller: 'contactController'
           
       });
}).run(function ($state) {
    
    console.log($state);
});













