jQuery(document).ready(function(jQuery) {

	var msgWrap
	msgWrap = jQuery('<div class=\"msgWrapper\"><span class=\"btmMsg\">RESERVE NOW TO ENSURE YOU GET THIS LOW PRICE. ROOMS ARE LIMITED.</span></div>');

	jQuery(msgWrap).insertBefore('#roomRateRoomType');

	jQuery(msgWrap).delay(500).fadeIn(700);
	jQuery('.btmMsg').delay(700).fadeIn(500);

	jQuery(document).ajaxComplete(function( event,request, settings ) { // Request AJAX
		jQuery(msgWrap).insertBefore('#roomRateRoomType'); // insert message container if rate type is changed, resulsting in AJAX call

		jQuery(msgWrap).delay(500).fadeIn(700);
		jQuery('.btmMsg').delay(700).fadeIn(500);
	});	

	jQuery('.msgWrapper:eq(1)').remove();

	function isEmpty(el) {
	    return !jQuery.trim(el.html());
	}
	if (isEmpty(jQuery('#roomRateRoomType'))) {
	    jQuery('.msgWrapper').remove(); // remove this
	}

	if (jQuery('#roomRateRoomType > div.ratesListing.roomsView').length === 0) { // check to see if there are no divs with these class names
	    jQuery('#resultsListContainer .msgWrapper').remove(); // if there are, remove 'msgWrapper'
	}

});