jQuery(document).ready(function (jQuery) {
	// jQuery('#ratingsFilter').remove(); //remove selected option element
	jQuery('<div class="taoRatings"><h3 class="taoRatingsHeading">Guest Ratings</h3></div>').prependTo('.col-md-12:eq(8)');

	// BUILD  GUEST RATINGS BLOCK
	var taoRatings = jQuery('<input type="checkbox"> <label>All Ratings</label>');
	jQuery(taoRatings).insertAfter('.controls .col-md-12 h3').wrapAll('<section></section>');;

	var taoFourStars = jQuery('<input type="checkbox"><span class="taoFourStars"></span>');
	jQuery(taoFourStars).appendTo('.taoRatings').wrapAll('<section></section>');

	var taoThreeStars = jQuery('<input type="checkbox"><span class="taoThreeStars"></span>');
	jQuery(taoThreeStars).appendTo('.taoRatings').wrapAll('<section></section>');;

	var taoTwoStars = jQuery('<input type="checkbox"><span class="taoTwoStars"></span>');
	jQuery(taoTwoStars).appendTo('.taoRatings').wrapAll('<section></section>');;

	var taoOneStar = jQuery('<input type="checkbox"><span class="taoOneStar"></span>');
	jQuery(taoOneStar).appendTo('.taoRatings').wrapAll('<section></section>');;

	// BUILD AMENITIES BLOCK: Left Column
	jQuery('<div class="taoAmenities"><h3 class="taoAmenitiesHeading">Amenities</h3></div>').insertAfter('.taoRatings');
	var taoAmenities = jQuery('<input type="checkbox"><span>All Amenities</span>');
	jQuery(taoAmenities).appendTo('.taoAmenities').wrapAll('<section class="taoAllAmenities"></section>');

	var taoWiFi = jQuery('<input type="checkbox"><span>Wireless Internet</span>');
	jQuery(taoWiFi).appendTo('.taoAmenities').wrapAll('<section class="taoWiFi"></section>');

	var taoBizCtr = jQuery('<input type="checkbox"><span>Business Center</span>');
	jQuery(taoBizCtr).appendTo('.taoAmenities').wrapAll('<section class="taoBizCtr"></section>');

	var taoAirportTrans = jQuery('<input type="checkbox"><span>Airport Transfer</span>');
	jQuery(taoAirportTrans).appendTo('.taoAmenities').wrapAll('<section class="taoAirportTrans"></section>');

	var taoAreaShuttle = jQuery('<input type="checkbox"><span>Area Shuttle</span>');
	jQuery(taoAreaShuttle).appendTo('.taoAmenities').wrapAll('<section class="taoAreaShuttle"></section>');

	var taoHealthFitness = jQuery('<input type="checkbox"><span>Health/Fitness Centre</span>');
	jQuery(taoHealthFitness).appendTo('.taoAmenities').wrapAll('<section class="taoHealthFitness"></section>');

	var taoFreeBreakfast = jQuery('<input type="checkbox"><span>Free Breakfast</span>');
	jQuery(taoFreeBreakfast).appendTo('.taoAmenities').wrapAll('<section class="taoFreeBreakfast"></section>');

	jQuery('.taoAllAmenities, .taoWiFi, .taoBizCtr, .taoAirportTrans, .taoAreaShuttle, .taoHealthFitness, .taoFreeBreakfast').wrapAll('<div class="amenitiesLeftCol"></div>');

	// BUILD AMENITIES BLOCK: Right Column
	// jQuery('<div class="taoAmenities"><h3 class="taoAmenitiesHeading">Amenities</h3></div>').insertAfter('.taoRatings');
	var taoFullKitchen = jQuery('<input type="checkbox"><span>Full Kitchen</span>');
	jQuery(taoFullKitchen).appendTo('.taoAmenities').wrapAll('<section class="taoFullKitchen"></section>');

	var taoKitchenette = jQuery('<input type="checkbox"><span>Kitchenette</span>');
	jQuery(taoKitchenette).appendTo('.taoAmenities').wrapAll('<section class="taoKitchenette"></section>');

	var taoKidsEatFree = jQuery('<input type="checkbox"><span>Kids Eat Free<sup>&reg;</sup></span>');
	jQuery(taoKidsEatFree).appendTo('.taoAmenities').wrapAll('<section class="taoKidsEatFree"></section>');

	var taoPool = jQuery('<input type="checkbox"><span>Swimming Pool</span>');
	jQuery(taoPool).appendTo('.taoAmenities').wrapAll('<section class="taoPool"></section>');

	var taoIndoorPool = jQuery('<input type="checkbox"><span>Indoor Pool</span>');
	jQuery(taoIndoorPool).appendTo('.taoAmenities').wrapAll('<section class="taoIndoorPool"></section>');

	var taoHolidomeWM = jQuery('<input type="checkbox"><span>Health/Holidome or Watermark</span>');
	jQuery(taoHolidomeWM).appendTo('.taoAmenities').wrapAll('<section class="taoHolidomeWM"></section>');

	var taoPets = jQuery('<input type="checkbox"><span>Pets Allowed</span>');
	jQuery(taoPets).appendTo('.taoAmenities').wrapAll('<section class="taoPets"></section>');

	jQuery('.taoFullKitchen, .taoKitchenette, .taoKidsEatFree, .taoPool, .taoIndoorPool, .taoHolidomeWM, .taoPets').wrapAll('<div class="amenitiesRightCol"></div>');	

// jQuery('.dimSelected:eq(1)').appendTo('.taoAmenities .amenitiesLeftCol');

});