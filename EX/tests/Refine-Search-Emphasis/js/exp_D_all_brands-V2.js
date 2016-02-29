jQuery('.taoBrands .dimSelected input:checkbox:eq(0)').on('click', function() {

  // If 'All IHG Brands' is NOT checked, uncheck ALL inputs except 'EX'
  if (this.checked === false) {

    // Is this 'All IHG Brands'?
    if(jQuery(this).attr('value') == 'all_brands') {

      // Add active and disabled classes to ALL AMENITES list item
      jQuery("input[value='all_brands']")
              .prop('checked', false)
              .closest('li').addClass('active');    

      // Click on those checkboxes that are selected
      jQuery('.taoBrands li:gt(1) input:checked').each(function () {
        jQuery(this).click();
      });

    }

  } else {

    // If 'All IHG Brands' IS checked, check ALL inputs
    if (jQuery(this).prop('checked') === true) {
      jQuery('.taoBrands .dimSelected li').addClass('active');

        // Click on those checkboxes that are selected
        jQuery('.taoBrands .dimSelected li:gt(0) input:not(:checked)').each(function () {
          jQuery(this).click();
        });

    }

  }

});

jQuery('.taoBrands .dimSelected input:checkbox:gt(0)').on('click', function() {
  
  // If any signle brand is unchecked, also uncheck 'All IHG Brands', and remove classname 'active'
  if (this.checked === false) {

    // Is this any brand exept 'All IHG Brands'?
    if(jQuery(this).attr('value') != 'all_brands') {
    
    // Remove 'active' class from 'ALL BRANDS' list item and uncheck its input
    jQuery('input[value="all_brands"]')
            .prop('checked', false)
            .closest('li').removeClass('active');

      // Each click, on any unchecked checkboxes
      jQuery('.taoBrands .dimSelected li:gt(0) input:checked)').each(function () {
        jQuery(this).click(); //simulate click
      });

    }
  }

  // If more than 12 inputs are checked, also check 'All IHG BRANDS'
  if(this.checked === true) {

      // If 11 or more inputs are checked
      if(jQuery('.taoBrands .dimSelected input[type=checkbox]:checked').length > 11) {

        jQuery('.taoBrands .checkbox input:checkbox:eq(0)')
        .prop('checked', true)
        .closest('li').addClass('active');

        // Each click, on any unchecked checkboxes
        jQuery('.taoBrands .dimSelected li:gt(0) input:checked)').each(function () {
          jQuery(this).click(); //simulate click
        });

      }
  }

});