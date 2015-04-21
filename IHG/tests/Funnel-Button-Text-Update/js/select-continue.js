jQuery(document).ready(function(jQuery) {
	
	jQuery('.checkRates .bookAnchor .cssButton').val('Select'); // Search Results: change input value to 'Book'
	jQuery('#roomsRates .rateSelectionArea .cssButton').val('Continue'); // Rooms & Rates: change input value to 'Book'

});

jQuery(document).ready(function(jQuery) {

	// jQuery('.checkRates .bookAnchor .cssButton.bc6c').clone();
	jQuery('.checkRates .bookAnchor .cssButton.bc6c').val('Select'); // Search Results: change input value to 'Select'

	jQuery( document ).ajaxComplete(function( event,request, settings ) { // Request AJAX
		jQuery('.checkRates .bookAnchor .cssButton').val('Select'); // Search Results: change input value to 'Select' after AJAX request is complete
	});

});