jQuery(document).ready(function (jQuery) {

  jQuery('<div class="taoFilterParent"></div>').prependTo('.tabwell #filterSortForm fieldset > .controls-row:eq(0)');

  // REMOVE UNWANTED FORM FIELDS
  jQuery('#filterSortForm .controls-row:eq(1)').hide(); // hide 'distance from destination' inputs

  // BUILD SHOW/HIDE EVENT
  jQuery('.spanOffset:eq(3)').addClass('taoPlus'); // add 'taoPlus' to initiate show/hide

  jQuery('.spanOffset.taoPlus').on('click', function (event) {
    event.preventDefault();
    jQuery('.tabwell #filterSortForm fieldset > .controls-row:eq(0)').slideToggle(500, function() {
      // animation complete
    });

    if ('label.spanOffset') {
      jQuery(jQuery(this).toggleClass('taoPlus taoMinus'));
    }
  });

  // BUILD AFTER AJAX COMPLETE FUNCTION
  jQuery(document).ajaxComplete(function (event, request, settings) {

    // BUILD  GUEST RATINGS BLOCK
    jQuery('<div class="taoRatings"><h3 class="taoRatingsHeading">Guest Ratings</h3></div>').prependTo('.taoFilterParent');
    jQuery('#ratingsFilter + .spanB1 > .dropdown-menu').appendTo('.taoRatings').wrapAll('<section></section>');
    jQuery('.taoRatings input').prop('type', 'checkbox').val(''); // add empty value attribute
    jQuery('.taoRatings li:eq(1)').addClass('taoFourStars');
    jQuery('.taoRatings li:eq(2)').addClass('taoThreeStars');
    jQuery('.taoRatings li:eq(3)').addClass('taoTwoStars');
    jQuery('.taoRatings li:eq(4)').addClass('taoOneStar');
    jQuery('.taoFourStars label, .taoThreeStars label, .taoTwoStars label, .taoOneStar label').contents().filter(function() {
      return this.nodeType === 3;
    }).remove(); // remove label text from node
    jQuery('#ratingsFilter + .btn-group'); // Remove all "btn-group" drop down's in "col-md-12"
    jQuery('.taoRatings').prevAll('.taoRatings').remove();

    // BUILD AMENITIES BLOCK: Left Column
    jQuery('<div class="taoAmenities"><h3 class="taoAmenitiesHeading">Amenities</h3></div>').appendTo('.taoFilterParent');
    jQuery('#amenitiesFilter + .spanB1 > .dropdown-menu').appendTo('.taoAmenities').wrapAll('<section class="amenitiesLeftCol"></section>');

    // BUILD AMENITIES BLOCK: Right Column    
    jQuery('<section class="amenitiesRightCol"><ul class="multiselect-container dropdown-menu dimSelected"></ul></section>').insertAfter('.amenitiesLeftCol');
    var taoItems = jQuery('.amenitiesLeftCol li:gt(6)'); // Get list items greater than 7
    jQuery(taoItems).appendTo('.amenitiesRightCol ul');
    jQuery('.taoAmenities').nextAll('.taoAmenities').remove();
    jQuery('.amenitiesRightCol').prev('.amenitiesRightCol').remove(); // Remove duplicate

    // ALL AMENITIES: REMOVE 'DISABLED' ATTRIBUTE AND UNCHECK CHECKBOX
    jQuery('.amenitiesLeftCol .checkbox input:checkbox, .amenitiesRightCol .checkbox input:checkbox').on('click', function() {
      jQuery('.disabled input:checkbox').removeAttr('disabled').prop('checked', false);
      jQuery('.amenitiesLeftCol .disabled').removeClass().removeAttr('class');
    });

    // ALL AMENITIES: ADD 'DISABLED' ATTRIBUTE AND CLASS NAME, CHECK/UNCHECK CHECKBOX
    jQuery('.amenitiesLeftCol .dimSelected li:first-child input:checkbox').on('click', function() {
      jQuery(this).attr('disabled', true).prop('checked', true);
      jQuery('.amenitiesLeftCol .dimSelected li:first-child').addClass('disabled active');
      jQuery('.amenitiesLeftCol .dimSelected li:gt(0) input, .amenitiesRightCol .dimSelected li input').prop('checked', false);
    });

    // BUILD BRANDS BLOCK: Left Column
    jQuery('<div class="taoBrands"><h3 class="taoBrandsHeading">IHG Brands</h3></div>').appendTo('.taoFilterParent');
    jQuery('#brandsFilter + .spanB1 > .dropdown-menu').insertAfter('.taoBrandsHeading').wrapAll('<section class="brandsLeftCol"></section>');

    // BUILD BRANDS BLOCK: Right Column    
    jQuery('<section class="brandsRightCol"></section>').insertAfter('.brandsLeftCol');
    var taoBrandItems = jQuery('.brandsLeftCol li:gt(6)');
    jQuery('.brandsRightCol').append('<ul class="multiselect-container dropdown-menu dimSelected"></ul>');
    jQuery(taoBrandItems).appendTo('.brandsRightCol ul');
    jQuery('.taoBrands').nextAll('.taoBrands').remove();
    jQuery('.brandsRightCol').prev('.brandsRightCol').remove(); // Remove duplicate

    // BUILD FILTER BY BLOCK
    jQuery('<div class="taoFilterBy"><h3 class="taoFilterByHeading">Filter By</h3></div>').appendTo('.taoFilterParent');
    jQuery('#miscFilter + .spanB1 > .dropdown-menu').appendTo('.taoFilterBy');
    jQuery('.taoFilterBy').nextAll('.taoFilterBy').remove();

    // FILTER BY: REMOVE 'DISABLED' ATTRIBUTE AND UNCHECK CHECKBOX
    jQuery('.taoFilterBy .checkbox input:checkbox').on('click', function() {
      jQuery('.checkbox input:checkbox').prop('checked', false).removeClass('active');
    });

    // FILTER BY: ADD 'DISABLED' ATTRIBUTE AND CLASS NAME, CHECK/UNCHECK CHECKBOX
    jQuery('.taoFilterBy .checkbox input:checkbox').on('click', function() {
      jQuery(this).prop('checked', true);
      jQuery('.taoFilterBy .checkbox').is(":checked").addClass('active');
    });  
    
    // REPOSITION 'APPLY' BUTTON
    jQuery('#btnApplyFilter').insertAfter('.taoFilterBy').val('Apply Filters');

    // REMOVE DUPLICATE DIVs and BUTTON INPUTs AFTER INITIAL PAGE LOAD
    jQuery('#btnApplyFilter:eq(0) + .taoAmenities, #btnApplyFilter:eq(0) + .taoBrands, #btnApplyFilter:eq(0) + .taoFilterBy').remove();
    jQuery('.taoFilterBy:eq(1) ~ #btnApplyFilter').remove();

    // REMOVE FILTER 'BUTTONS'
    jQuery('#ratingsFilter + .btn-group, #amenitiesFilter + .btn-group, #brandsFilter + .btn-group, #miscFilter + .btn-group').hide();

    // GUEST RATINGS: ALLOW ONLY ONE CHECKBOX TO BE SELECTED
    jQuery('.taoFilterParent input:checkbox').on('click', function() {
      if (jQuery(this).is(":checked")) {
        var group = "input:checkbox[value='" + jQuery(this).attr("value") + "']";
        jQuery(group).prop("checked", false);
        jQuery(this).prop("checked", true);
        // jQuery('.taoFourStars input').val('4');
        // jQuery('.taoThreeStars input').val('3');
        // jQuery('.taoTwoStars input').val('2');
        // jQuery('.taoOneStar input').val('1');
      } else {
        jQuery(this).prop("checked", false);
      }

      if(jQuery('.taoFilterParent input:checkbox').prop('checked') === false){
        jQuery('.taoRatings li').removeClass('active'); // remove class name if input is NOT checked
      }
      // if(jQuery('.taoRatings li.taoFourStars'))

      // if(jQuery(this).prop('checked') === false){
      //   jQuery('.taoRatings li').removeClass('active'); // remove class name if input is NOT checked
      // }
    });

  }); // END AJAX COMPLETE FUNCTION

});