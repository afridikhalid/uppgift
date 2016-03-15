

var app = angular
    .module("ngUppgifts", ["ngMaterial"])
    .config(function($mdThemingProvider) {
        
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');
    });







