jQuery(document).ready(function (jQuery) {

	// PARENT WRAPPER
	// jQuery('<div class=taoSearchRefined"></div>').appendTo('.col-md-12:eq(8)');

	// BUILD  GUEST RATINGS BLOCK
	var taoRatings = jQuery('<input type="checkbox"> <label>All Ratings</label>');
	var taoFourStars = jQuery('<input type="checkbox"><span class="taoFourStars"></span>');
	var taoThreeStars = jQuery('<input type="checkbox"><span class="taoThreeStars"></span>');
	var taoTwoStars = jQuery('<input type="checkbox"><span class="taoTwoStars"></span>');
	var taoOneStar = jQuery('<input type="checkbox"><span class="taoOneStar"></span>');

	jQuery('<div class="taoRatings"><h3 class="taoRatingsHeading">Guest Ratings</h3></div>').prependTo('.col-md-12:eq(8)');
	jQuery(taoRatings).insertAfter('.controls .col-md-12 h3').wrapAll('<section></section>');
	jQuery(taoFourStars).appendTo('.taoRatings').wrapAll('<section></section>');
	jQuery(taoThreeStars).appendTo('.taoRatings').wrapAll('<section></section>');
	jQuery(taoTwoStars).appendTo('.taoRatings').wrapAll('<section></section>');
	jQuery(taoOneStar).appendTo('.taoRatings').wrapAll('<section></section>');
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


});