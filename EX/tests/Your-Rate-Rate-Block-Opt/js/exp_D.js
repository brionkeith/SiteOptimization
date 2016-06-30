jQuery(document).ready(function(jQuery){
	jQuery('.memberRateTypeLineItemRight').addClass('taoYourRateBlock');

	jQuery('<span class="taoMemberRate">Member Rate</span>').insertBefore('.memberTitle');

	jQuery('.taoYourRateBlock .breakfastLabel').remove();
	jQuery('.priceBefore').remove();

	jQuery('.priceInfoArea .mainRateDisplay').next('br').remove();

	jQuery('<p class="taoMemberText"><b>Not a member?</b> Join for<br><span><em>free</em></span> while you book.</p>').insertAfter('.memberRateInfo');

	jQuery('<span class="taoArrowLeft"></span>').appendTo('.taoMemberText'); // arrow
	jQuery('<span class="taoRectangle"></span>').insertAfter('.taoArrowLeft'); // stem
});