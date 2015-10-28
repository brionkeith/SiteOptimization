jQuery(document).ready(function (jQuery) {
	var taoMapContainer = jQuery('<div class="taoMapContainer"></div>'); // create new parent container
	var taoGeoLicense = jQuery('<div id ="geo-license"></div>'); // create new child container to hold map dependencies
	jQuery(taoMapContainer).insertBefore('#ourbrands');
	jQuery(taoGeoLicense).appendTo(taoMapContainer); 
});