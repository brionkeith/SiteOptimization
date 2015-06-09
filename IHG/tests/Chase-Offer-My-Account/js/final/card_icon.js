jQuery(document).ready(function(jQuery) {
	
	var pcINTERACT = jQuery('#myMessages.rewardsClubHome #pcrInteract');
	var chaseOffer = jQuery('<div class="chaseOffer"></div>');
	var iconCC     = jQuery('<img src=\"https://prodcache.internal.ihg.com/content/dam/etc/media_library/branded/6c/en/us/chaserewards/icon-credit-card-shadow.png\">');
	// var iconCC     = jQuery('<img src=\"img/icon-credit-card-shadow.png\">');
	var chaseMsg   = jQuery('<p>Earn <strong>60,000 bonus points.</strong> Plus, get a <strong>Free Night</strong> every year at any of our 4,700 hotels. &nbsp;</p>');
	var learnMore  = jQuery('<a href="https://creditcards.chase.com/a1/ihg/ihg70?CELL=6VQG">Learn More.</a>')

	jQuery(pcINTERACT).remove();
	jQuery(chaseOffer).insertAfter('#myMessages.rewardsClubHome h3');
	jQuery(iconCC).appendTo(chaseOffer);
	jQuery(chaseMsg).appendTo(chaseOffer);
	jQuery(learnMore).appendTo(chaseMsg);

});