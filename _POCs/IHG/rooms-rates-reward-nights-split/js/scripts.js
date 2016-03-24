jQuery(document).ready(function(jQuery) {

	jQuery('.spotlightPointsAndCash').parent('.regularRates').each(function() { // Find the parent of each 'spotlightPointsAndCash'
	  jQuery('<div class="regularRates roomsView taoPandC"></div>').insertAfter(this); // Insert this DIV after the parent
	});

	// Look for each instance of this class
	// and append it to this selector
	jQuery('.spotlightPointsAndCash').each(function(i) {
	  jQuery(this).clone().appendTo(jQuery('.taoPandC').eq(i));
	});

	// Remove "*pre night" text under each '.roomsView'
	// but not the one residing under '.taoPandC'
	jQuery('.pointsAndCashNote').remove();

	// Change headline text
	jQuery('.taoPandC .rateInfoArea .rateCategory').text('Points & Cash');

	// Remove P+C radio buttons from Reward Nights
	// but ignore the one inside '.taoPandC'
	jQuery('.roomsView .rewardNightContainer').not('.taoPandC .rewardNightContainer').each(function() {
		jQuery(this).find('li:eq(1), li:eq(2)').remove();
	});

	// Remove the first input from the unordered list under '.taoPandC'
	jQuery('.roomsView.taoPandC .rewardNightContainer').each(function(){
		jQuery(this).find('li:eq(0)').remove();
	});

	// Check the first radio button in each 'taoPandC'
	jQuery('.taoPandC .rewardNightContainer').each(function() {
		jQuery(this).find('input[type=radio]:eq(0)').prop('checked', true);
	});

});