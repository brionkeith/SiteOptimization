jQuery(document).ready(function (jQuery) {
    //jQuery('.rateTypeLineItemDisplayLink a').hide(); //hide view/hide rates "text" link

	jQuery('button span').html('▼').html('&#x025BE;').css({ /* overwrite default drop menu "arrow" with character entity */
	    'font-size': '18px',
	    'line-height': '13px'
	});

	//look at each "rateTypeLineitems"
	jQuery('.rateTypeLineItem').each(function () {

	    var soloUpSell = jQuery(this);

	    //find the instance where less than 2 "upSellContainers" exists
	    if (soloUpSell.find('.upSellContainer').length < 2) {
	        soloUpSell.find('.upSellContainer').addClass('soloUpSell').css({
	        	'background': 'none',
	        	'border': 'none'
	        });
	    }

	    //add padding to reduce unwanted spacing
	    jQuery('.soloUpSell').parents('.regularRates').css({
	    	'padding': '0px'
	    });   

	});

	console.log("Rooms & Rates: Variant 2");

});