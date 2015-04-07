jQuery(document).ready(function(jQuery) {
	
	var pcINTERACT = jQuery('#myMessages.rewardsClubHome #pcrInteract');
	var chaseOffer = jQuery('<div class="chaseOffer"></div>');
	var iconCC     = jQuery('<img src=\"https://prodcache.internal.ihg.com/content/dam/etc/media_library/branded/6c/cn/rewardsclub/buttons/icon_credit_card.png\">');
	var chaseMsg   = jQuery('<p>Earn <strong>70,000 bonus points.</strong> Plus a <strong>Free Night</strong> every year at any of our 4,700 hotels. &nbsp;</p>');
	var learnMore  = jQuery('<a href="https://creditcards.chase.com/a1/ihg/ihg70/?CELL=6FDG&cm_sp=OSMAM-6C-US-EN-MYM-X-MHR-ChaseMasterCard-70offer-S">Learn More</a>')

	jQuery(pcINTERACT).remove();
	jQuery(chaseOffer).insertAfter('#myMessages.rewardsClubHome h3');
	jQuery(iconCC).appendTo(chaseOffer);
	jQuery(chaseMsg).appendTo(chaseOffer);
	jQuery(learnMore).appendTo(chaseMsg);

});