//FILTER BY BRANDS: CHECK AND UNCHECK THE DESIRED CHECKBOXES
jQuery('.brandsLeftCol input:checkbox:eq(0)').on('click', function() {

  // If 'All IHG Brands' is checked and clicked, uncheck all other checkboxes
  jQuery('.brandsLeftCol input:checkbox:gt(1), .brandsRightCol input:checkbox').not(this).prop('checked', false);
  
  if (jQuery(this).prop('checked') === true) {
    // If 'All IHG Brands' is checked, uncheck all checkboxes after 'EX'
    jQuery('.brandsLeftCol input:checkbox:gt(1)' && '.brandsRightCol input:checkbox').not(this).prop('checked', false);
  }
});

// IF 'ALL BRANDS' IS CLICKED/CHECKED, SELECT ALL BRAND CHECKBOXES
jQuery('.brandsLeftCol input:checkbox:eq(0)').on('click', function() {
  if (jQuery('.brandsLeftCol input:checkbox:eq(0)').prop('checked') === true) {
    jQuery('.taoBrands input:checkbox').prop('checked', true);
  }
});