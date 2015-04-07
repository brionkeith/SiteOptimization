jQuery(document).ready(function(jQuery) {

	var pcINTERACT    = jQuery('.rewardsClubHome #pcrInteract'); // Interact marketing module
	var chaseOffer    = jQuery('<div class=\"chaseOffer\"></div>');
	var iconCC 		  = jQuery('<img src=\"https://prodcache.internal.ihg.com/content/dam/etc/media_library/branded/6c/cn/rewardsclub/buttons/icon_credit_card.png\">');
	var chaseMsg	  = jQuery('<p class=\"chaseMsg\">Earn 70,000 bonus points. Plus a Free Night every year.</p>');
	var learnMore	  = jQuery('<a href=\"https://creditcards.chase.com/a1/ihg/ihg70/?CELL=6FDG&cm_sp=OSMAM-6C-US-EN-MYM-X-MHR-ChaseMasterCard-70offer-S\"> Learn More. </a>');
	var currentPtsDiv = jQuery('<p class=\"currentPts\">Current Points:&nbsp;</p>');
	var ptsBalance 	  = jQuery('.welcomePointsValue').text(); // Get current RC points balance
	var strParse 	  = parseInt(ptsBalance.replace(',',''), 10); // convert RC points string to number
	var bonusPoints	  = 70000;
	var bonusPtsTxt   = jQuery('<span class=\"bonusPtsTxt\">&nbsp;+ Bonus Points:&nbsp;<span class=\"bonusPts\">' + bonusPoints + ' = ' + '</span>' + '</span><span class=\"totalPts\"></span><span class=\"string\">&nbsp;Points</span>');
	var totalPts      = jQuery(strParse + bonusPoints); // sum total of Bonus points (70,000) and current RC points

	// var pointsInt	  = jQuery('<span class=\"pointsInt\"></span>'); // Current RC points span
	// var bonusInt	  = jQuery('<span class=\"bonusInt\"></span>');  // Cahse bonus points span
	// var totalInt	  = jQuery('<span class=\"totalInt\"></span>');	 // Total points span

	jQuery(pcINTERACT).remove(); 					//remove Interact container
	jQuery(chaseOffer).insertAfter('.rewardsClubHome h3'); //move heading
	jQuery(iconCC).appendTo(chaseOffer); 			// add credit card icon to chase offer container
	jQuery(chaseMsg).appendTo(chaseOffer); 			// add messaging to offer container
	jQuery(learnMore).appendTo(chaseMsg); 			// append 'learn more' link


	jQuery(currentPtsDiv).insertAfter(chaseMsg);	// insert "currentPtsTxt" text after Chase message
	

	jQuery(strParse).appendTo('.currentPts');	// append RC points balance to 'Current Points' text
	jQuery(bonusPtsTxt).appendTo(currentPtsDiv);	// insert Bonus Points text after RC balance
	jQuery(totalPts).appendTo('.totalPts');		    // append Bonus points and sum of total points

    // regex: add comma to separate value as needed
    jQuery.fn.digits = function () {
        return this.each(function () {
            jQuery(this).text(jQuery(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        });
    };

    jQuery('.bonusPts, .currentPts, .totalPts').digits(); // call 'digits' function

});