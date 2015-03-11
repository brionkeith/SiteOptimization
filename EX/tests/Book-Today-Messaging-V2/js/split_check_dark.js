jQuery(document).ready(function(jQuery) {

	var msgWrap
	var	btmMsd
	var	ltdAvail

	msgWrap  	 = jQuery('<div class=\"msgWrapper\"></div>'); // Create new wrapper div
	btmMsg   	 = jQuery('<span class=\"btmMsg\">ROOMS ARE LIMITED</span>'); 
	iconCheckGrn = jQuery('<img class="\iconCheckGrn\" src="\../img/icon_check_green.png\">');
	ltdAvail 	 = jQuery('<span class=\"ltdAvail\">Make Your Reservation Today and Lock in this Low Price</span>');

	jQuery(msgWrap).insertBefore('#roomRateRoomType');
	jQuery(btmMsg).appendTo(msgWrap);
	jQuery(iconCheckGrn).insertAfter(btmMsg);
	jQuery(ltdAvail).insertAfter(iconCheckGrn);

	jQuery(msgWrap).delay(500).fadeIn(700);
	jQuery(btmMsg).delay(700).fadeIn(800);
	jQuery(iconCheckGrn).delay(700).fadeIn(800);
	jQuery(ltdAvail).delay(700).fadeIn(800);

	// jQuery('.msgWrapper:eq(1)').remove();

});