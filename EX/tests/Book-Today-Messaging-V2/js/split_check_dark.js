jQuery(document).ready(function(jQuery) {

	var msgWrap
	var	btmMsd
	var	ltdAvail

	msgWrap  	 = jQuery('<div class=\"msgWrapper\"></div>'); // parent wrapper
	btmMsg   	 = jQuery('<span class=\"btmMsg\">ROOMS ARE LIMITED</span>'); // first span
	iconCheckGrn = jQuery('<img class=\"iconCheckGrn\" src="https://prodcache.internal.ihg.com/content/dam/etc/media_library/branded/hi/cn/icons/icon_check_green.png\">'); // check icon
	ltdAvail 	 = jQuery('<span class=\"ltdAvail\">Make Your Reservation Today and Lock in this Low Price</span>'); // second span

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