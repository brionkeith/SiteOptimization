jQuery(document).ready(function(jQuery){
	jQuery('.memberRateTypeLineItemRight').addClass('taoYourRateBlock');

	jQuery('<span class="taoMemberRate">Member Discount</span>').insertBefore('.memberTitle');

	jQuery('.taoYourRateBlock .breakfastLabel').remove();
	jQuery('.priceBefore').remove();

	jQuery('.priceInfoArea .mainRateDisplay').next('br').remove();

	jQuery('<p class="taoMemberText"><b>Not a member yet?</b><br>Choose this great rate and<br><span>join for free</span> while you book.</p>').insertAfter('.bookThisRoomMemberRate');
});