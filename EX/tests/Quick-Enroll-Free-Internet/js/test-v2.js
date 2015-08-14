jQuery(document).ready(function(jQuery) {

	var POINTS = jQuery('.sectionQuickEnroll .quickEnrollLeft .quickEnrollLeftHead span').text(); // Get points for earn messaging
	jQuery('.sectionQuickEnroll .quickEnrollLeft .quickEnrollLeftHead').replaceWith('<p class="newMsg">Earn ' + POINTS + ' points, receive free Internet at any of our hotels and enjoy many other great benefits <br />of the FREE IHG<sup>®</sup> Rewards Club.</p>'); // Change default text and add POINTS var  

	// jQuery(newMsg).prependTo('.quickEnrollLeftHead');
});