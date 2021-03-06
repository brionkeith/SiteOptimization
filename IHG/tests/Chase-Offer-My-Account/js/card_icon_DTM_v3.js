jQuery(document).ready(function(jQuery) {

	var pcINTERACT  	= jQuery('#myMessages.rewardsClubHome #pcrInteract'); // Interact marketing module
	var chaseOffer  	= jQuery('<div class="chaseOffer"></div>');
	var iconCC 			= jQuery('<img src="../img/icon_credit_card.png">');
	var chaseMsg		= jQuery('<p class="chaseMsg">Earn 70,000 bonus points. Plus a Free Night every year.</p>');
	var learnMore		= jQuery('<a href="https://creditcards.chase.com/a1/ihg/ihg70/?CELL=6FDG&cm_sp=OSMAM-6C-US-EN-MYM-X-MHR-ChaseMasterCard-70offer-S"> Learn More. </a>');
	var currentPtsTxt	= jQuery('<p class="currentPts">Current Points:&nbsp; <span></span></p>');	
	var ptsBalance 		= jQuery('.pointsBalanceLabel .value.large.withCommas').text(); // Get current RC points balance
	var strParse = parseInt(ptsBalance.replace(',',''), 10); // convert RC points string to number
	// var strParse    	= parseInt(ptsBalance, 10); // * Output should be current RC balance: Not rounded number
	var bonusPoints		= 70000;
	var bonusPtsTxt 	= jQuery('<span class="bonusPtsTxt">+ Bonus Points:<span class="bonusPts">' + bonusPoints + ' = ' + '</span>' + '</span><span class="string">Points</span>');	
	var totalPts    	= jQuery(strParse + bonusPoints); // sum total of Bonus points (70,000) and current RC points

	jQuery(pcINTERACT).remove(); 					//remove Interact container
	jQuery(chaseOffer).insertAfter('#myMessages.rewardsClubHome h3'); //move heading
	jQuery(iconCC).appendTo(chaseOffer); 			// add credit card icon to chase offer container
	jQuery(chaseMsg).appendTo(chaseOffer); 			// add messaging to offer container
	jQuery(learnMore).appendTo(chaseMsg); 			// append 'learn more' link
	jQuery(currentPtsTxt).insertAfter(chaseMsg);	// insert "currentPtsTxt" text after Chase message
	jQuery(strParse).appendTo('.currentPts span');		// append RC points balance to 'Current Points' text
	jQuery(bonusPtsTxt).insertAfter(currentPtsTxt);	// insert Bonus Points text after RC balance
	jQuery(totalPts).appendTo(bonusPtsTxt);		    // append Bonus points and sum of total points
	// jQuery('.currentPts:contains("Current Points:")').css({
	//     'font-weight': 'normal'
	// });

    // regex: add comma to separate value as needed
    jQuery.fn.digits = function () {
        return this.each(function () {
            jQuery(this).text(jQuery(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        });
    };

    jQuery('.bonusPts, .currentPts').digits(); // call 'digits' function and apply to 'bonusPts'	

});