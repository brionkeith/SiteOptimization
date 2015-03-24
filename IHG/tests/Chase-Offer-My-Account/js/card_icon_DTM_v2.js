jQuery(document).ready(function(jQuery) {
	
	var pcINTERACT  	= jQuery('#myMessages.rewardsClubHome #pcrInteract'); // Interact marketing module
	var chaseOffer  	= jQuery('<div class="chaseOffer"></div>');
	var iconCC 			= jQuery('<img src="../img/icon_credit_card.png">');
	var chaseMsg		= jQuery('<p class="chaseMsg">Earn 70,000 bonus points. Plus a Free Night every year.</p>');
	var learnMore		= jQuery('<a href="https://creditcards.chase.com/a1/ihg/ihg70/?CELL=6FDG&cm_sp=OSMAM-6C-US-EN-MYM-X-MHR-ChaseMasterCard-70offer-S"> Learn More. </a>');
	var currentPtsTxt	= jQuery('<p class="currentPts">Current Points:</p>');
	var ptsBalance 		= jQuery('.pointsBalanceLabel .value.large.withCommas').clone().text(); // Clone current RC points balance
	var strParse    	= parseInt(ptsBalance, 10); // * Output should be current RC balance: Not rounded number
	// alert(strParse);
	var bonusPoints		= 70000;
	var bonusPtsTxt 	= jQuery('<span class="bonusPtsTxt">+ Bonus Points:<span class="bonusPts">' + bonusPoints + ' = ' + '</span>' + '</span><span class="string">Points</span>');	
	var totalPts    	= jQuery(strParse + bonusPoints); // sum total of Bonus points (70,000) and current RC points

	jQuery(pcINTERACT).remove(); //remove Interact container
	jQuery(chaseOffer).insertAfter('#myMessages.rewardsClubHome h3');
	jQuery(iconCC).appendTo(chaseOffer);
	jQuery(chaseMsg).appendTo(chaseOffer);
	jQuery(learnMore).appendTo(chaseMsg);

	jQuery(currentPtsTxt).insertAfter(chaseMsg);	// insert "Current Points" text after Chase message
	jQuery(strParse).appendTo(currentPtsTxt);		// insert RC points balance after 'Current Points' text
	jQuery(bonusPtsTxt).insertAfter(currentPtsTxt);	// insert Bonus Points text after RC balance
	jQuery(totalPts).appendTo(bonusPtsTxt);		    // insert Bonus points and sum of total points

    // regex: add comma to separate value as needed
    jQuery.fn.digits = function () {
        return this.each(function () {
            jQuery(this).text(jQuery(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        });
    };

    jQuery('.bonusPts').digits(); // call 'digits' function and apply to 'bonusPts'

});