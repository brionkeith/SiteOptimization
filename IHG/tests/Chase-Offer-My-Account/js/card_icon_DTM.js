jQuery(document).ready(function(jQuery) {
	
	var pcINTERACT  = jQuery('#myMessages.rewardsClubHome #pcrInteract'); // Interact marketing module
	var chaseOffer  = jQuery('<div class="chaseOffer"></div>');
	var iconCC      = jQuery('<img src="../img/icon_credit_card.png">');

	var chaseMsg    = jQuery('<p>Earn 70,000 bonus points. Plus a Free Night every year.</p>');
	var learnMore   = jQuery('<a href=\"https://creditcards.chase.com/a1/ihg/ihg70/?CELL=6FDG&cm_sp=OSMAM-6C-US-EN-MYM-X-MHR-ChaseMasterCard-70offer-S\"> Learn More. </a>');
	var currentPtsTxt  = jQuery('<p class="rcPoints">Current Points:</p>');

	var chasePoints = jQuery(70000);
	var ptsBalance  = jQuery('.pointsBalanceLabel .value.large.withCommas').clone(); // Clone current RC points balance

	var bonusPtsTxt = jQuery('<span class="bonusPtsTxt">+ Bonus Points:<span class=\"chasePts\">' + chasePoints + '</span></span>'); // NOT WORKING CORRECTLY

	jQuery(pcINTERACT).remove(); //remove Interact container
	jQuery(chaseOffer).insertAfter('#myMessages.rewardsClubHome h3');
	jQuery(iconCC).appendTo(chaseOffer);
	jQuery(chaseMsg).appendTo(chaseOffer);
	jQuery(learnMore).appendTo(chaseMsg);

	jQuery(currentPtsTxt).insertAfter(chaseMsg);
	jQuery(ptsBalance).insertAfter(currentPtsTxt);   // place RC points balance after 'Current Points' text
	jQuery(bonusPtsTxt).appendTo(ptsBalance);  // place Bonus Points text after RC balance

});