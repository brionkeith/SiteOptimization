jQuery(document).ready(function (jQuery) {

	// REMOVE UNWANTED FORM FIELDS
	jQuery('#filterSortForm .controls-row:eq(1)').hide(); // hide 'distance from destination' inputs

	// BUILD SHOW/HIDE EVENT
	jQuery('.spanOffset:eq(3)').addClass('taoPlus'); // add 'taoPlus' to initiate show/hide

	jQuery('.spanOffset.taoPlus').on('click', function (event) {
		event.preventDefault();
		jQuery('.tabwell #filterSortForm fieldset > .controls-row:eq(0)').slideToggle(500, function(){
			// animation complete
		});

		if ('label.spanOffset') {
			//toggle plus/minus classes
			jQuery(jQuery(this).toggleClass('taoPlus taoMinus'));
		}
	});

    // BUILD  GUEST RATINGS BLOCK
    var taoRatings = jQuery('.multiselect-container:eq(4)').clone();
	jQuery('<div class="taoRatings"><h3 class="taoRatingsHeading">Guest Ratings</h3></div>').prependTo('.col-md-12:eq(8)');
    jQuery(taoRatings).insertAfter('.taoRatingsHeading').wrapAll('<section></section>');
    jQuery('.taoRatings input').prop('type', 'checkbox'); //change radio to checkbox
	// jQuery('.col-md-12:eq(8) .btn-group').hide(); // Remove all child "btn-group" in "col-md-12"

	// BUILD AMENITIES BLOCK: Left Column
	var taoAmenities = jQuery('.multiselect-container:eq(6)').clone();
	jQuery('<div class="taoAmenities"><h3 class="taoAmenitiesHeading">Amenities</h3></div>').insertAfter('.taoRatings');
	jQuery(taoAmenities).insertAfter('.taoAmenitiesHeading').wrapAll('<section class="amenitiesLeftCol"></section>');

	// BUILD AMENITIES BLOCK: Right Column
	var taoItems = jQuery('.amenitiesLeftCol li:gt(7)'); // Declare list items greater than 7
	jQuery('<section class="amenitiesRightCol"></section>').insertAfter('.amenitiesLeftCol');
	jQuery('.amenitiesRightCol').append('<ul class="multiselect-container dropdown-menu dimSelected"></ul>');
	jQuery(taoItems).appendTo('.amenitiesRightCol ul');

	// BUILD BRANDS BLOCK: Left Column
	var taoBrands = jQuery('.multiselect-container:eq(9)').clone();
	jQuery('<div class="taoBrands"><h3 class="taoBrandsHeading">IHG Brands</h3></div>').insertAfter('.taoAmenities');
	jQuery(taoBrands).insertAfter('.taoBrandsHeading').wrapAll('<section class="brandsLeftCol"></section>');

	// BUILD BRANDS: Right Column
	var taoBrandItems = jQuery('.brandsLeftCol li:gt(6)');
	jQuery('<section class="brandsRightCol"></section>').insertAfter('.brandsLeftCol');
	jQuery('.brandsRightCol').append('<ul class="multiselect-container dropdown-menu dimSelected"></ul>');
	jQuery(taoBrandItems).appendTo('.brandsRightCol ul');

	// BUILD FILTER BY BLOCK
	var taoFilterBy = jQuery('.multiselect-container:eq(12)').clone();
	jQuery('<div class="taoFilterBy"><h3 class="taoFilterByHeading">Filter By</h3></div>').insertAfter('.taoBrands');
	jQuery(taoFilterBy).appendTo('.taoFilterBy');

	// REPOSITION 'APPLY' BUTTON
	jQuery('#btnApplyFilter').insertAfter('.taoFilterBy').val('Apply Filters');

	// PARENT WRAPPER 
	jQuery('.taoRatings, .taoAmenities, .taoBrands, .taoFilterBy, #btnApplyFilter').wrapAll('<div class="taoFilterParent"></div>');

});