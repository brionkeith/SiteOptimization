jQuery(document).ready(function(jQuery) {

	var msgWrap
	msgWrap = jQuery('<div class=\"msgWrapper\"><span class=\"btmMsg\">RESERVE NOW TO ENSURE YOU GET THIS LOW PRICE. ROOMS ARE LIMITED.</span></div>');

	jQuery(msgWrap).insertBefore('#roomRateRoomType');
	jQuery(msgWrap).delay(500).fadeIn(700);
	jQuery('.btmMsg').delay(700).fadeIn(500);
	jQuery('.msgWrapper:eq(1)').remove(); // remove duplicate message

	function isEmpty(el) {
	    return !jQuery.trim(el.html());
	}
	if (isEmpty(jQuery('#roomRateRoomType'))) { // if this selector is emtpy...
	    jQuery('.msgWrapper').remove(); // remove this
	}

	// if (jQuery('#sidebarContainerRatesPage .error1.spotlightError').length === 1) { // if this exists
	//     jQuery('#resultsListContainer .msgWrapper').remove(); // remove this
	// }

	// if ( jQuery('div#roomRateRoomType').is(':empty') || ('#sidebarContainerRatesPage .error1.spotlightError').length === 1 ) {
	// 	jQuery('#resultsListContainer .msgWrapper').remove(); // remove this
	// }

	// if ( jQuery('div#roomRateRoomType').is(':empty') ) {
	// 	jQuery('#resultsListContainer .msgWrapper').remove(); // remove this
	// }

});