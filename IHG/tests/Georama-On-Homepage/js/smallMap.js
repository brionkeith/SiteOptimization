jQuery(document).ready(function (jQuery) {

     // 'use strict';

	var taoMapContainer = jQuery('<div class="taoMapContainerShort"></div>'); // create new parent container
	var taoGeoLicense = jQuery('<div id ="geo-license"></div>'); // create new child container to hold map dependencies
	jQuery(taoMapContainer).insertBefore('#ourbrands');
	jQuery(taoGeoLicense).appendTo(taoMapContainer);

	var script = document.createElement( 'script' );
	script.type = 'text/javascript';
	script.src = url;
	$(".taoMapContainer #geo-license").append( script );

});


