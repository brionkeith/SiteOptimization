jQuery(document).ready(function(jQuery) {

	var msgWrap
	msgWrap = jQuery('<div class=\"msgWrapper\"><span class=\"btmMsg\">MAKE YOUR RESERVATION TODAY AND LOCK IN THIS LOW PRICE<span class=\"ltdAvail\">Room Availability is Limited</span></span></div>');

	jQuery(msgWrap).insertBefore('#roomRateRoomType');

	jQuery(msgWrap).delay(500).fadeIn(700);
	jQuery('.btmMsg').delay(700).fadeIn(500);

	// jQuery('.msgWrapper:eq(1)').remove();

});