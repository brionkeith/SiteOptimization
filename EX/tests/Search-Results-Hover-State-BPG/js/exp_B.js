jQuery(document).ready(function (jQuery) {

	var taoCheckRates = jQuery('.row.checkRates');
	jQuery('<div class="taoCheckRatesBPG"><span>Best Price Guaranteed.</span></div>').appendTo(taoCheckRates);

	jQuery('.checkRates .bookAnchor').on('mouseover', function(){
		jQuery(this).closest('.row').find('.taoCheckRatesBPG').css('display', 'block');
	});

	jQuery('.checkRates .bookAnchor').on('mouseout', function(){
		jQuery(this).closest('.row').find('.taoCheckRatesBPG').css('display', 'none');
	});

  // Run again after AJAX call
  jQuery(document).ajaxComplete(function (event, request, settings) {
    var taoCheckRates = jQuery('.row.checkRates');
    jQuery('<div class="taoCheckRatesBPG"><span>Best Price Guaranteed.</span></div>').appendTo(taoCheckRates);

    jQuery('.checkRates .bookAnchor').on('mouseover', function(){
      jQuery(this).closest('.row').find('.taoCheckRatesBPG').css('display', 'block');
    });

    jQuery('.checkRates .bookAnchor').on('mouseout', function(){
      jQuery(this).closest('.row').find('.taoCheckRatesBPG').css('display', 'none');
    });
  });  

});