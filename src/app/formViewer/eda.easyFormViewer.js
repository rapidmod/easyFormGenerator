/**
 *  -----------------------------------------------------------------------
 *  application module of easy form viewer
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
;(function(){
	'use strict';
	
	angular
		.module('eda.easyFormViewer', [
			'textAngular',  
			'formly',  
			'formlyBootstrap', 
			'ui.bootstrap', 
			'nya.bootstrap.select', 
			'eda.easyFormViewer.Directive'		
		]);
	
})();