jQuery(document).ready(function(jQuery) {

	jQuery('.checkRates .bookAnchor .cssButton.bc6c').val('Book').attr('title', 'Book'); // Search Results: change input value to 'Book'
	jQuery('#roomsRates .rateSelectionArea .cssButton').val('Book').attr('title', 'Book'); // Rooms & Rates: change input value to 'Book'

	jQuery( document ).ajaxComplete(function( event,request, settings ) { // Request AJAX
		jQuery('.checkRates .bookAnchor .cssButton').val('Book').attr('title', 'Book'); // Search Results: change input value to 'Book' after AJAX request is complete
	});

});