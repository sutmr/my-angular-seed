myApp = angular.module('MyApp', ['ui.router']);
// init the application
myApp.run(function($rootScope, $state, $stateParams) {

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
});
myApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('eorder');
  $stateProvider
  .state('url',{
    url:'/url',
    templateUrl:'your html url',
    controller:'controller'
  })
  .state('url1', {
    url: '/url1',
    views: {
      '': {
        templateUrl: 'html url',
        controller: 'controller'
      }
    }
  })
});
