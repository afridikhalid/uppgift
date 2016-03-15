(function() {
    "use strict";
    
    angular
        .module("ngUppgifts")
        .controller("uppgiftsCtrl", function($scope, $http) {
            $http.get('http://service.openlogger.se/fake/').then(function(uppgift) {
                $scope.uppgift = uppgift.data;
            });
    });
    
    
    
})();