// If 'All IHG Brands' is NOT checked, uncheck ALL inputs except 'EX'
jQuery('.taoBrands .dimSelected input:checkbox:eq(0)').change(function() {
  if (jQuery(this).prop('checked') === false) {
    jQuery('.taoBrands .dimSelected input:checkbox:gt(1), .taoBrands .dimSelected input:checkbox:lt(1)').prop('checked', false);
    jQuery('.taoBrands li:lt(1), .taoBrands li:gt(1)').removeClass('active'); // remove class on all except 'EX'
    alert("All Brands is unchecked, as well as all other brands except EX.");
  }
});

// If 'All IHG Brands' IS checked, also check ALL other brands
jQuery('.taoBrands .dimSelected input:checkbox:eq(0)').change(function() {
  if (jQuery(this).prop('checked') === true) {
    jQuery('.taoBrands .dimSelected input:checkbox').prop('checked', true);
    jQuery('.taoBrands .dimSelected li').addClass('active'); // add class
    alert("All Brands was selected, as well as any checkboxes NOT selected.");
  }
});

// If any single input AFTER 'All Brands' is unchecked, also uncheck 'All Brands'
jQuery('.taoBrands .dimSelected input:checkbox:gt(0)').change(function() {
  if (jQuery(this).prop('checked') === false) {
    if (jQuery(".taoBrands input[type=checkbox]:checked").length > 1) { // if ANY checkbox greater than this is checked
      jQuery('.taoBrands .dimSelected input:checkbox:eq(0)').prop('checked', false); // uncheck 'All Brands'
      jQuery(this).parent().parent().parent().removeClass('active'); // remove class on list item
      jQuery('.taoBrands .dimSelected li:eq(0)').removeClass('active'); // remove class from 'All Brands'
    }
    alert("If only ONE checkbox is unchecked, also uncheck All Brands.");
  }
});

jQuery('.taoBrands .dimSelected input:checked:gt(0)').change(function() {
  if (jQuery(this).prop('checked') === true) {
    if (jQuery(".taoBrands input[type=checkbox]:checked").length > 1) { // if ANY checkbox greater than this is checked
      jQuery('.taoBrands .dimSelected input:checkbox:eq(0)').prop('checked', true); // check 'All Brands'
      jQuery(this).parent().parent().parent().addClass('active'); // add class on list item
      jQuery('.taoBrands .dimSelected li:eq(0)').addClass('active'); // add class to 'All Brands'
    }
  }
});
