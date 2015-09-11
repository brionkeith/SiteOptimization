jQuery(document).ready(function (jQuery) {
  // Build Hero Container
  var taoRcHero = jQuery('<div id="rcHero"></div>'); // Hero image wrapper
  var taoRcHeroTxt = jQuery('<section><h3>Did you know? IHG Rewards Club Members:</h3></section>');
  jQuery('#mainContentContainer').prepend(taoRcHero); // Hero container
  jQuery(taoRcHeroTxt).appendTo('#rcHero'); // Hero message
  jQuery(taoRcHeroTxt).append('<ul id="rcBenefits"><li></li><li></li><li></li></ul>'); // Membership benefits
  
  // var taoRcHeroTxt2 = jQuery('<p>With IHG&reg; Rewards Club, members make the most of every hotel stay.</p>').appendTo(taoRcHeroTxt);

  // Build array and add each item to unordered list
  var taoRcBenefits = ["Receive exclusive perks like free Internet service in any of our 4,900 hotels and late check-out", 
                        "Enjoy Rewards Nights, with no blackout dates", 
                        "Redeem points for meaningful rewards, including flights, car rentals, gift cards and more"];
  jQuery('#rcBenefits li').each(function (index) {
    jQuery(this).text(taoRcBenefits[index]);
  });

  jQuery('#securityLogos').insertAfter('#rcHero'); // Reposition security logos
  jQuery('#contentSlot').appendTo('#mainContentContainer'); // Move vertical brand bar to main content    
});