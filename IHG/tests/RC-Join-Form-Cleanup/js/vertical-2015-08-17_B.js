jQuery(document).ready(function () {

    // Build Hero Container
    var taoRcHero = jQuery('<div id="rcHero"></div>'); // Hero image wrapper
    var taoRcHeroTxt = jQuery('<section><h3>Some Benefits of Membership include:</h3></section>');
    jQuery('#mainContentContainer').prepend(taoRcHero); // Hero container
    jQuery(taoRcHeroTxt).appendTo('#rcHero'); // Hero message
    jQuery(taoRcHeroTxt).append('<ul id="rcBenefits"><li></li><li></li><li></li></ul>'); // Membership benefits

    // Build array and add each item to unordered list
    var taoRcBenefits = ["Book at over 4,900 hotels", "You get the best prices -- guaranteed!", "You\'ll receive special offers"];
    jQuery('#rcBenefits li').each(function (index) {
        jQuery(this).text(taoRcBenefits[index]);
    });

    jQuery('#securityLogos').insertAfter('#rcHero'); // Reposition security logos
    jQuery('#contentSlot').appendTo('#mainContentContainer'); // Move vertical brand bar to main content    

});