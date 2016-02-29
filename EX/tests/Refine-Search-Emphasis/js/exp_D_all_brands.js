jQuery('.taoBrands .dimSelected input:checkbox:eq(0)').on('click', function() {
  // If 'All IHG Brands' is NOT checked, uncheck ALL inputs except 'EX'
  if (jQuery(this).prop('checked') === false) {
    jQuery('.taoBrands .dimSelected input:checkbox:gt(1), .taoBrands .dimSelected input:checkbox:lt(1)').prop('checked', false);
    jQuery('.taoBrands li:lt(1), .taoBrands li:gt(1)').removeClass('active'); // remove class on all except 'EX'
  } else {

    // If 'All IHG Brands' IS checked, check ALL inputs
    if (jQuery(this).prop('checked') === true) {
      jQuery('.taoBrands .dimSelected input:checkbox').prop('checked', true);
      jQuery('.taoBrands .dimSelected li').addClass('active');

      // Click on those checkboxes that are selected
      jQuery('.amenitiesLeftCol .dimSelected li:gt(0) input, .amenitiesRightCol .dimSelected li input').each(function () {
          if (jQuery(this).is(':checked')) {
              jQuery(this).click();
          }
      });      
    }

  }
});

// Clicking ANY input that does NOT have the value 'all_brands'
jQuery('.taoBrands .checkbox input[value!=all_brands]').change(function() {
  if (jQuery(this).prop('checked') === true) { // if an input IS checked
    jQuery(this).closest('li').addClass('active'); // Add this class to the closet list item
  } else {

    if (jQuery(this).prop('checked') === false) {
      jQuery(this).closest('li').removeClass('active'); // If not remove this class from the closest list item
      jQuery('.taoBrands .checkbox input:checkbox:eq(0)').prop('checked', false); // Uncheck 'All IHG Brands'
      jQuery('.taoBrands li:eq(0)').removeClass(); // Also remove 'active' from the 'All IHG Brands' list item
    }

  }
});

// When any input after 'All IHG Brands' is checked
jQuery('.taoBrands .checkbox input:checkbox:gt(0)').change(function() {
  // If 11 or more inputs are checked
  if (jQuery('.taoBrands .dimSelected input[type=checkbox]:checked').length > 11) {
    jQuery('.taoBrands .checkbox input:checkbox:eq(0)').prop('checked', true); // Check 'All IHG Brands'
    jQuery('.taoBrands .dimSelected li').addClass('active'); // Add the class name 'active' to the list item
  } else {
    // If none of the checkboxes are selected, check all and add class 'active' to each list item
    if (jQuery('.taoBrands .checkbox input[type=checkbox]:checked').length < 1) {
      jQuery('.taoBrands input[type=checkbox]').prop('checked', true);
    }
  }
});
