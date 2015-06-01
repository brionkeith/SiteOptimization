jQuery(document).ready(function(jQuery) {

	jQuery('.checkRates .bookAnchor .cssButton').val('Select').attr('title', 'Select'); // Search Results: change input value to 'Book'
	jQuery('#roomsRates .rateSelectionArea .cssButton').val('Continue').attr('title', 'Continue'); // Rooms & Rates: change input value to 'Book'

	jQuery( document ).ajaxComplete(function( event,request, settings ) { // Request AJAX
		jQuery('.checkRates .bookAnchor .cssButton').val('Select').attr('title', 'Select'); // Search Results: change input value to 'Select' after AJAX request is complete
	});

});