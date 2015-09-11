jQuery(document).ready(function(jQuery) {

	var taoPoints = jQuery('.rewardRate div:eq(0)');
	var tao40Points = jQuery('.rewardRate div:eq(1)');
	var tao70Points = jQuery('.rewardRate div:eq(2)');

	jQuery(taoPoints).insertAfter(tao70Points);
	jQuery(tao40Points).insertAfter(tao70Points);
});