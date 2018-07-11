angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('index', {
    url: '/index',
    templateUrl: 'templates/index.html',
    abstract:true
  })

  .state('index.login', {
    url: '/login',
    views: {
      'tab2': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('myProfile', {
    url: '/myProfile',
    templateUrl: 'templates/myProfile.html',
    controller: 'myProfileCtrl'
  })

  .state('myMedicine', {
    url: '/medicine',
    templateUrl: 'templates/myMedicine.html',
    controller: 'myMedicineCtrl'
  })

  .state('myVisit', {
    url: '/myVisit',
    templateUrl: 'templates/myVisit.html',
    controller: 'myVisitCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('index.signup', {
    url: '/signup',
    views: {
      'tab2': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('homePage', {
    url: '/homePage',
    templateUrl: 'templates/homePage.html',
    controller: 'homePageCtrl'
  })

  .state('detailInformation', {
    url: '/detail_information',
    templateUrl: 'templates/detailInformation.html',
    controller: 'detailInformationCtrl'
  })

  .state('index.maps', {
    url: '/mapPage',
    views: {
      'tab2': {
        templateUrl: 'templates/maps.html',
        controller: 'mapsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/index/signup')


});