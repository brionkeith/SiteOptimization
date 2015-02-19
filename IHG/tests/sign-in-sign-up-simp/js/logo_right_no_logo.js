jQuery(document).ready(function(jQuery) {

  jQuery('#identityBlock:eq(0) .heavyText span').html('Sign in IHG<sup>®</sup> Rewards Club Members'); // Change default HTML text
  jQuery('#identityBlock:eq(0) .heavyText, .signIn').wrapAll('<div class=\"rememberWrap\" />'); // Wrap both div tags into a single div
  
  jQuery('.signIn div span label').appendTo('.signIn'); // Move form label into div for positioning
  jQuery('.signIn div span input#remember').appendTo('.signIn'); // Move form label into div for positioning
  jQuery('.signIn label, .signIn input#remember').wrapAll('<div class=\"rememberCheck\"></div>'); // Wrap label and input into a single div
  jQuery('.signIn div:eq(3)').addClass('forgotRememberPin'); // Add class name to div for specific targeting
  
  jQuery('#frmGuestInfo #identityBlock .heavyText span:eq(0)').html('IHG<sup>®</sup> Rewards Club'); // Change default HTML text
  jQuery('#frmGuestInfo #identityBlock #anonId .heavyText').prependTo('.joinNow'); // Move header text into .joinNow for more accurate positioning
  
  var POINTS = jQuery('#frmGuestInfo #identityBlock .heavyText:eq(1) span').text(); // Get points for earn messaging
  jQuery('#frmGuestInfo #identityBlock .heavyText:eq(1)').html('Earn ' + '<strong>' + POINTS + '</strong>' + ' points and enjoy other great benefits of the FREE IHG<sup>®</sup> Rewards Club.'); // Change default text and add POINTS var
  jQuery('#frmGuestInfo #identityBlock #anonId .joinnowtext label').html('<strong>Yes,</strong> instantly enroll me in the free IHG<sup>®</sup> Rewards Club Program. <a href=\"#\" class=\"pcrTerms\"> Terms &amp; Conditions.</a>'); // Change default HTML text

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
