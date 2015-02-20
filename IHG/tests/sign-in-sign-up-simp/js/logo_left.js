jQuery(document).ready(function(jQuery) {

  // Adobe Target/Site Optimization
  // Authored by: Brion Mills

  Bootstrapper.MVT.injectCSS('body{position:relative; opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important}');

  jQuery('#identityBlock:eq(0) .heavyText span').html('We\'ll Fill Out the Form. You\'ll Get the Points. Sign In Now.'); // Change default HTML text
  jQuery('#identityBlock:eq(0) .heavyText, .signIn').wrapAll('<div class=\"rememberWrap\"></div>'); // Wrap both div tags into a single div
  
  jQuery('.signIn div span label').appendTo('.signIn'); // Move form label into div for positioning
  jQuery('.signIn div span input#remember').appendTo('.signIn'); // Move form label into div for positioning
  jQuery('.signIn label, .signIn input#remember').wrapAll('<div class=\"rememberCheck\"></div>'); // Wrap label and input into a single div
  jQuery('.signIn div:eq(3)').addClass('forgotRememberPin'); // Add class name to div for specific targeting
  
  jQuery('#frmGuestInfo #identityBlock .heavyText span:eq(0)').html('Get More from Your Stay. Join IHG<sup>®</sup> Rewards Club.'); // Change default HTML text
  jQuery('#frmGuestInfo #identityBlock #anonId .heavyText').prependTo('.joinNow'); // Move header text into .joinNow for more accurate positioning
  
  var POINTS = jQuery('#frmGuestInfo #identityBlock .heavyText:eq(1) span').text(); // Get points for earn messaging
  var termsLinkHTML = jQuery('<a href="#" class="pcrTerms" title=" IHG<sup>®</sup> Rewards Club Terms &amp; Conditions.">IHG<sup>®</sup> Rewards Club Terms &amp; Conditions.</a>'); // Terms & Conditions link
  // var termsLinkHTML = jQuery('a.pcrTerms'); // Terms & Conditions link

  jQuery('#frmGuestInfo #identityBlock .heavyText:eq(1)').html('This reservation could earn you ' + '<strong>' + POINTS + '</strong>' + ' points towards a free night.'); // Change default text and add POINTS var
  jQuery('#frmGuestInfo #identityBlock #anonId .joinnowtext label').html('Sign me up now. Look for your new member info on the confirmation page. <br>Read the ').append(termsLinkHTML); // Change default HTML text

  // Open Terms & Conditions Dialog
  jQuery('a.pcrTerms').on('click', function(event) {
    event.preventDefault();

    if ('.ui-dialog') {
        jQuery('.pcrTermsDialog').css({
          "display": "block",
          "outline": "0px",
          "position": "relative",
          "height": "auto",
          "width": "500px",
          "top": "-996.671875px",
          "left": "530.5px"
        });

        jQuery('#pcrTerms_conditions_dialog').removeClass('hide').css({
          "display": "block",
          "width": "auto",
          "min-height": "0px",
          "height": "251px"
        });

    } else {
        jQuery('#pcrTerms_conditions_dialog').addClass('hide');
    }
  });

  // Close Terms & Dialog
  jQuery('.closeControl, .ui-button.ui-corner-all.ui-button-text-only').on('click', function(event) {
    event.preventDefault();

    if ('.ui-dialog') {
      jQuery('.pcrTermsDialog').css({"display": "none"});
      jQuery('#pcrTerms_conditions_dialog').addClass('hide');
    }
  });
});
