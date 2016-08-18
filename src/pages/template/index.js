var angular = require('angular');
var fs = require('fs');
var moduleName = "page-home";
var controllerName = "HomeCtrl";
var state = {
  name: "home",
  config: {
    url: '/home',
    // the html template will be compiled directly to 
    // the template variable
    template: fs.readFileSync('./index.html', 'utf8')
  }
}


angular.module(moduleName, [])
.config(['$stateProvider', function($stateProvider){
  $stateProvider
    .state(state.name, state.config)
}])

.controller(controllerName, [function(){

}])

module.exports = moduleName;