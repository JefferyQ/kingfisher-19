(function () {
   


   angular.module('app')
       .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
   $stateProvider
        .state('marketplace', {
            url: '/marketplace',
            templateUrl: 'views/pages/marketplace.html',
            controller: "marketPlaceCtrl"
        });
  
      $urlRouterProvider
        .when('/', '/marketplace')
        .otherwise('/marketplace');

       }]
   );

})();

