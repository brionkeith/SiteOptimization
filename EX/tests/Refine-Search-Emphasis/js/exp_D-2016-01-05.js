jQuery(document).ready(function (jQuery) {

	// REMOVE UNWANTED FORM FIELDS
	jQuery('#filterSortForm .controls-row:eq(1)').hide(); // hide 'distance from destination' inputs

	// BUILD SHOW/HIDE EVENT
	jQuery('.spanOffset:eq(3)').addClass('taoPlus');

	jQuery('.spanOffset.taoPlus').on('click', function(event) {				
		event.preventDefault();
		jQuery('.taoFilterParent').slideToggle(500, function(){
			// animation complete
		});

		if ('label.spanOffset') {
			//toggle plus/minus classes
			jQuery($(this).toggleClass('taoPlus taoMinus'));
		}
		if ('.taoFilterParent') {
			jQuery($(this).display());
		}
	});

	// BUILD  GUEST RATINGS BLOCK
	// var taoRatings = jQuery('<input type="checkbox"> <label>All Ratings</label>');
	// var taoFourStars = jQuery('<input type="checkbox"><span class="taoFourStars"></span>');
	// var taoThreeStars = jQuery('<input type="checkbox"><span class="taoThreeStars"></span>');
	// var taoTwoStars = jQuery('<input type="checkbox"><span class="taoTwoStars"></span>');
	// var taoOneStar = jQuery('<input type="checkbox"><span class="taoOneStar"></span>');

	var taoRatings = jQuery('.firstOffset:eq(0) label.radio');
	var taoFourStars = jQuery('.firstOffset:eq(0) label.radio input:contains("Four")').wrap("<div class='myDiv'></div>");
	var taoThreeStars = jQuery('.firstOffset:eq(0) label.radio input:contains("Three")');
	var taoTwoStars = jQuery('.firstOffset:eq(0) label.radio input:contains("Two")');
	var taoOneStar = jQuery('.firstOffset:eq(0) label.radio input:contains("One")');



	jQuery('<div class="taoRatings"><h3 class="taoRatingsHeading">Guest Ratings</h3></div>').prependTo('.col-md-12:eq(8)');
	jQuery(taoRatings).insertAfter('.controls .col-md-12 h3').wrap('<section class="taoNoStars"></section>');
	jQuery(taoFourStars).insertAfter(taoRatings).wrap('<section class="taoFourStars"></section>');
	jQuery(taoThreeStars).insertAfter(taoFourStars).wrap('<section class="taoThreeStars"></section>');
	jQuery(taoTwoStars).insertAfter(taoThreeStars).wrap('<section class="taoTwoStars"></section>');
	jQuery(taoOneStar).insertAfter(taoTwoStars).wrap('<section class="taoOneStar"></section>');
	jQuery('.col-md-12:eq(8) .btn-group').hide(); // Remove all child "btn-group" in "col-md-12"

	

	// Replace checkbox with radio button
	// taoRatings.replaceWith('<input type="radio"  value="'+checkbox.attr('value')+'" />');
	// taoFourStars.replaceWith('<input type="radio"  value="'+checkbox.attr('value')+'" />');
	// taoThreeStars.replaceWith('<input type="radio"  value="'+checkbox.attr('value')+'" />');
	// taoTwoStars.replaceWith('<input type="radio"  value="'+checkbox.attr('value')+'" />');
	// taoOneStar.replaceWith('<input type="radio"  value="'+checkbox.attr('value')+'" />');



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