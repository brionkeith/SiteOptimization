jQuery(document).ready(function(jQuery) {
	
	var pcINTERACT = jQuery('#myMessages.rewardsClubHome #pcrInteract');
	var chaseOffer = jQuery('<div class="chaseOffer"></div>');
	var chaseMsg   = jQuery('<p>Earn <strong>70,000 bonus points.</strong> Plus, get a <strong>Free Night</strong> every year. &nbsp;</p>');
	var learnMore  = jQuery('<a href="https://creditcards.chase.com/a1/ihg/ihg70?CELL=6VQF">Learn More.</a>')

	jQuery(pcINTERACT).remove();
	jQuery(chaseOffer).insertAfter('#myMessages.rewardsClubHome h3');
	jQuery(chaseMsg).appendTo(chaseOffer);
	jQuery(learnMore).appendTo(chaseMsg);

});