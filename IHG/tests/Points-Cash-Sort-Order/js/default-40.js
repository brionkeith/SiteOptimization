jQuery(document).ready(function(jQuery) {

	var taoPoints = jQuery('.rewardRate div:eq(0)');
	var tao70Points = jQuery('.rewardRate div:eq(2)');

	jQuery(tao70Points).insertAfter(taoPoints);
});