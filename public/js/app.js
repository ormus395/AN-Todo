import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import {TodoService} from './services/services';
import {TodoController, AboutController} from './controllers/controllers';

//Instatiate global app variable

angular.module('TodoApp', [uirouter, ngResource]).service('TodoService', TodoService).config(routing);

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: TodoController,
      controllerAs: 'controller'  
    })
    .state('about', {
      url: '/about',
      templateUrl: '/templates/about.html',
      controller: AboutController,
      controllerAs: 'controller'
    })
    .state('notFound', {
      url: '/notFound',
      templateUrl: '/templates/notFound.html'
    });
    $urlRouterProvider.otherwise('/notFound');
    $locationProvider.html5Mode(true);
}