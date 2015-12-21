jQuery(document).ready(function (jQuery) {

	/* BUILD GUEST RATINGS BLOCK */
	var taoRatingsWrapper = jQuery('<div class="ratingsWrapper"></div>'); // Wraper for Guest Ratings
	jQuery('#ratingsFilter').wrapAll(taoRatingsWrapper); // Wrap #amenitiesFilter in .filterWrapper DIV
	jQuery('.btn-group:eq(0)').appendTo('.ratingsWrapper'); // Append Guest Ratings to wrapper

	/* BUILD AMENITIES BLOCK */
	var taoAmenitiesWrapper = jQuery('<div class="amenitiesWrapper"></div>'); // Wraper for Amenities
	jQuery('#amenitiesFilter').wrapAll(taoAmenitiesWrapper); // Wrap #amenitiesFilter in .filterWrapper DIV
	jQuery('.btn-group:eq(1)').appendTo('.amenitiesWrapper'); // Append Guest Ratings to wrapper
	jQuery('input[name="_selectedAmenityCodes"]').appendTo('.amenitiesWrapper'); // Append Amenities input to parent wrapper
	jQuery('.ratingsWrapper, .amenitiesWrapper').wrapAll('<div class="taoRatingsAmenities"></div>'); // Wrap Ratings and Amenities

	/* BUILD BRANDS BLOCK */
	var taoBrandsWrapper = jQuery('<div class="brandsWrapper"></div>'); // Wraper for Brands
	jQuery('#brandsFilter').wrapAll(taoBrandsWrapper); // Wrap #amenitiesFilter in .filterWrapper DIV
	jQuery('.btn-group:eq(2)').appendTo('.brandsWrapper'); // Append Guest Ratings to wrapper
	jQuery('input[name="_selectedBrandCodes"]').appendTo('.brandsWrapper'); // Append Amenities input to parent wrapper

	/* BUILD FILTER BY BLOCK */
	var taoFilterWrapper = jQuery('<div class="filterWrapper"></div>'); // Wraper for Brands
	jQuery('#miscFilter').wrapAll(taoFilterWrapper); // Wrap #amenitiesFilter in .filterWrapper DIV
	jQuery('.btn-group:eq(3)').appendTo('.filterWrapper'); // Append Guest Ratings to wrapper
	jQuery('input[name="_selectedMiscFilterCodes"]').appendTo('.filterWrapper'); // Append Amenities input to parent wrapper
	jQuery('.brandsWrapper, .filterWrapper').wrapAll('<div class="taoBrandsFilter"></div>'); // Wrap Ratings and Amenities	

});