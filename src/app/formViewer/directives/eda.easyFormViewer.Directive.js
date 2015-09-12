/**
 *  -----------------------------------------------------------------------
 *   easy form viewer directive
 *  -----------------------------------------------------------------------
 *  
 *   
 *     
 *
 * 
 * ——————————————————————————————————————————————
 * MIT (2015) - Erwan Datin (MacKentoch)
 * https://github.com/MacKentoch/easyFormGenerator
 * ——————————————————————————————————————————————
**/
(function(){
	'use strict';
	
	angular
		.module('eda.easyFormViewer.Directive', [])
		.directive('edaEasyFormViewer', edaEasyFormViewer);
		
		edaEasyFormViewer.$inject = [];
		
		function edaEasyFormViewer(){
			var directive = {
				restrict : 'E',
				scope : {
					
          edaEasyFormViewerDataModel 				: '=?',
					edaEasyFormViewerFieldsModel 			: '=?',
					
					edaEasyFormViewerSubmitButtonText : '=?',
					edaEasyFormViewerCancelButtonText : '=?',
					
          edaEasyFormViewerSubmitFormEvent  : '&?',
					edaEasyFormViewerCancelFormEvent	: '&?'
        },
				replace 			: false,
				
				controller		: edaEasyFormViewerCtrl,
				controllerAs 	: 'vm',
				templateUrl 	: 'eda.easyFormViewer.Template.html',
				
				link : linkFct
			};
			return directive;
			
			
			/**
			 * directive's link function
			 */
			function linkFct(scope, element, attrs){
				
				console.info('edaEasyFormViewer directive loaded');

				scope.vm.model 			= {};
				scope.vm.fields 			= {};
				scope.vm.submitText 	= 'Submitjhkjh';
				scope.vm.cancelText 	= 'Cancel';				
				
				scope.$watch(fieldsModelToWatch, fieldsModelWatcher, true);
				
				function fieldsModelToWatch(){
					return scope.vm.fields;
				}
				
				function fieldsModelWatcher(newFieldsModel, oldFieldsModel){
					console.info('fieldsModel Changed');
					console.dir(newFieldsModel);
					
					loadExistingConfigurationModel();
				}
				
				
				function loadExistingConfigurationModel(){
					
				}
				
			}
			
			/**
			 * directive's controller : controllerAs syntax
			 */
			function edaEasyFormViewerCtrl(){
				var vm = this;
				vm.model 			= {};
				vm.fields 			= {};
				vm.submitText 	= 'Submit';
				vm.cancelText 	= 'Cancel';				
			}
			
			
			
		}
		
})();