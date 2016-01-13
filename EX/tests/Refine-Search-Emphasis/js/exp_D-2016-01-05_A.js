jQuery(document).ready(function (jQuery) {

	// REMOVE UNWANTED FORM FIELDS
	jQuery('#filterSortForm .controls-row:eq(1)').hide(); // hide 'distance from destination' inputs

	// BUILD SHOW/HIDE EVENT
	jQuery('.spanOffset:eq(3)').addClass('taoPlus');

	jQuery('.spanOffset.taoPlus').on('click', function (event) {				
		event.preventDefault();
		jQuery('.taoFilterParent').slideToggle(500, function(){
			// animation complete
		});

		if ('label.spanOffset') {
			//toggle plus/minus classes
			jQuery(jQuery(this).toggleClass('taoPlus taoMinus'));
		}
		// if ('.taoFilterParent') {
		// 	jQuery(jQuery(this).display());
		// }
	});




    // BUILD  GUEST RATINGS BLOCK    

    // Replace checkbox with radio button
    // var taoRatings = jQuery('.firstOffset:eq(0) .radio:eq(0)').addClass('taoAllRatings');
    var taoRatings = jQuery('.dropdown-menu:eq(11) .radio input').addClass('taoAllRatings');
    var taoFourStars = jQuery('.firstOffset:eq(0) label.radio:eq(1)');
    var taoThreeStars = jQuery('.firstOffset:eq(0) label.radio:eq(2)');
    var taoTwoStars = jQuery('.firstOffset:eq(0) label.radio:eq(3)');
    var taoOneStar = jQuery('.firstOffset:eq(0) label.radio:eq(4)');    

	jQuery('<div class="taoRatings"><h3 class="taoRatingsHeading">Guest Ratings</h3></div>').prependTo('.col-md-12:eq(8)');
    jQuery('.dropdown-menu:eq(11) .radio input').prop('type', 'checkbox');
    // jQuery('.taoAllRatings .firstOffset:eq(0) label.radio:eq(0) input[type="radio"]').replaceWith('.taoAllRatings .firstOffset:eq(0) label.radio:eq(0) input[type="radio"]').appendTo('.taoRatings');
    // jQuery('.taoAllRatings label.radio:eq(0) input[type=radio]').replaceWith('.taoAllRatings label.radio:eq(0) input[type=checkbox]');
	// jQuery(taoRatings).insertAfter('.controls .col-md-12 h3').wrap('<section></section>'); // ALL Ratings    
	// jQuery(taoFourStars).insertAfter(taoRatings).wrap('<section></section>');
	// jQuery(taoThreeStars).insertAfter(taoFourStars).wrap('<section class="taoThreeStars"></section>');
	// jQuery(taoTwoStars).insertAfter(taoThreeStars).wrap('<section class="taoTwoStars"></section>');
	// jQuery(taoOneStar).insertAfter(taoTwoStars).wrap('<section class="taoOneStar"></section>');
	jQuery('.col-md-12:eq(8) .btn-group').hide(); // Remove all child "btn-group" in "col-md-12"





	// BUILD AMENITIES BLOCK: Left Column
	var taoAmenities = jQuery('.multiselect-container:eq(5)').clone();
	jQuery('<div class="taoAmenities"><h3 class="taoAmenitiesHeading">Amenities</h3></div>').insertAfter('.taoRatings');
	jQuery(taoAmenities).insertAfter('.taoAmenitiesHeading').wrapAll('<section class="amenitiesLeftCol"></section>');

	// BUILD AMENITIES BLOCK: Right Column
	var taoItems = jQuery('.amenitiesLeftCol li:gt(6)'); // Declare list items greater than 7
	jQuery('<section class="amenitiesRightCol"></section>').insertAfter('.amenitiesLeftCol');
	jQuery('.amenitiesRightCol').append('<ul class="multiselect-container dropdown-menu dimSelected"></ul>');
	jQuery(taoItems).appendTo('.amenitiesRightCol ul');
	// jQuery('.btn-group').eq(1).remove(); // Remove control "button group: all amenities"

	// BUILD BRANDS BLOCK: Left Column
	var taoBrands = jQuery('.multiselect-container:eq(8)').clone();
	jQuery('<div class="taoBrands"><h3 class="taoBrandsHeading">IHG Brands</h3></div>').insertAfter('.taoAmenities');
	jQuery(taoBrands).insertAfter('.taoBrandsHeading').wrapAll('<section class="brandsLeftCol"></section>');

	// BUILD BRANDS: Right Column
	var taoBrandItems = jQuery('.brandsLeftCol li:gt(6)');
	jQuery('<section class="brandsRightCol"></section>').insertAfter('.brandsLeftCol');
	jQuery('.brandsRightCol').append('<ul class="multiselect-container dropdown-menu dimSelected"></ul>');
	jQuery(taoBrandItems).appendTo('.brandsRightCol ul');
	// jQuery('.btn-group').eq(2).remove(); // Remove control "button group: all ihg brands"

	// BUILD FILTER BY BLOCK
	var taoFilterBy = jQuery('.multiselect-container:eq(11)').clone();
	jQuery('<div class="taoFilterBy"><h3 class="taoFilterByHeading">Filter By</h3></div>').insertAfter('.taoBrands');
	jQuery(taoFilterBy).appendTo('.taoFilterBy');

	// REPOSITION 'APPLY' BUTTON
	jQuery('#btnApplyFilter').insertAfter('.taoFilterBy').val('Apply Filters');

	// PARENT WRAPPER 
	jQuery('.taoRatings, .taoAmenities, .taoBrands, .taoFilterBy, #btnApplyFilter').wrapAll('<div class="taoFilterParent"></div>');

});