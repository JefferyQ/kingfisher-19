(function() {


    angular.module('app')
        .controller('marketPlaceCtrl', ['$scope', '$filter', '$stateParams', '$mdDialog', marketPlaceCtrl]);

    function marketPlaceCtrl($scope, $filter, $stateParams, $mdDialog) {

    		// variables //

    		$scope.flag = {};
    		$scope.flag.cardDetail = false;

    		$scope.fields = {};
    		$scope.fields.sectionFlex = 100;

    		$scope.changeFlex = function(){
    			$scope.flag.cardDetail = !$scope.flag.cardDetail;

    			if($scope.flag.cardDetail == true) {
    				$scope.fields.sectionFlex = 50;
    			} else {
    				$scope.fields.sectionFlex = 100
    			}
    		}

    		$scope.rejectLoan = function(ev) {
	            $mdDialog.show({
	                controller: marketPlaceCtrl,
	                templateUrl: 'views/block/reject-loan-dialog.html',
	                parent: angular.element(document.body),
	                targetEvent: ev,
	                clickOutsideToClose:true
	            })
        	};

        	$scope.cancelRequest = function() {
		    	$mdDialog.hide();
		    };


    }

})();