(function() {


    angular.module('app')
        .controller('marketPlaceCtrl', ['$scope', '$filter', '$stateParams', '$mdDialog', marketPlaceCtrl]);

    function marketPlaceCtrl($scope, $filter, $stateParams, $mdDialog) {

    		// variables //

    		$scope.flag = {};
    		$scope.flag.cardDetail = false;

    		$scope.fields = {};
    		$scope.fields.sectionFlex = 100;

    		$scope.changeFlexCard = function(arg){
                if(arg =='open'){
    			    $scope.flag.cardDetail = true;
                    $scope.fields.sectionFlex = 50;
                } else if (arg == 'close'){
                    $scope.flag.cardDetail = false;
                    $scope.fields.sectionFlex = 100;
                }
    		}

            
    		$scope.rejectLoan = function(ev) {
	            $mdDialog.show({
	                controller: marketPlaceCtrl,
	                templateUrl: 'views/block/reject-loan-dialog.html',
	                parent: angular.element(document.body),
	                targetEvent: ev,
	                clickOutsideToClose:true,
                    openFrom: '#left',
                    closeTo: angular.element(document.querySelector('#right'))
	            })
        	};

        	$scope.cancelRequest = function() {
		    	$mdDialog.hide();
		    };


    }

})();