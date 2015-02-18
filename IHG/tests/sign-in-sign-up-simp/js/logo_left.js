jQuery(document).ready(function(jQuery) {

  // Bootstrapper.MVT.injectCSS('body{position:relative; opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important}');

  jQuery('#identityBlock:eq(0) .heavyText span').html('We\'ll Fill Out the Form. You\'ll Get the Points. Sign In Now.'); // Change default HTML text
  jQuery('#identityBlock:eq(0) .heavyText, .signIn').wrapAll('<div class=\"rememberWrap\"></div>'); // Wrap both div tags into a single div
  
  jQuery('.signIn div span label').appendTo('.signIn'); // Move form label into div for positioning
  jQuery('.signIn div span input#remember').appendTo('.signIn'); // Move form label into div for positioning
  jQuery('.signIn label, .signIn input#remember').wrapAll('<div class=\"rememberCheck\"></div>'); // Wrap label and input into a single div
  jQuery('.signIn div:eq(3)').addClass('forgotRememberPin'); // Add class name to div for specific targeting
  
  jQuery('#frmGuestInfo #identityBlock .heavyText span:eq(0)').html('Get More from Your Stay. Join IHG<sup>®</sup> Rewards Club.'); // Change default HTML text
  jQuery('#frmGuestInfo #identityBlock #anonId .heavyText').prependTo('.joinNow'); // Move header text into .joinNow for more accurate positioning
  
  var POINTS = jQuery('#frmGuestInfo #identityBlock .heavyText:eq(1) span').text(); // Get points for earn messaging
  var termsLinkHTML = jQuery('<a href=\"#\" class=\"pcrTerms\" title=\"IHG<sup>®</sup> Rewards Club Terms & Conditions.\"> IHG<sup>®</sup> Rewards Club Terms &amp; Conditions.</a>'); // Terms & Conditions link

  jQuery('#frmGuestInfo #identityBlock .heavyText:eq(1)').html('This reservation could earn you ' + '<strong>' + POINTS + '</strong>' + ' points towards a free night.'); // Change default text and add POINTS var
  jQuery('#frmGuestInfo #identityBlock #anonId .joinnowtext label').html('Sign me up now. Look for your new member info on the confirmation page. <br>Read the').append(termsLinkHTML); // Change default HTML text

  // Fire Terms & Conditions Dialog on click
  jQuery('a.pcrTerms').on('click', function (event) {
      event.preventDefault();

      if ('.ui-dialog') {
          jQuery('#pcrTerms_conditions_dialog').removeClass('hide');
      } else {
          jQuery(".pcrTermsDialog").css("display", "none");
          // jQuery('#pcrTerms_conditions_dialog').addClass('pcrTerms_conditions_dialog');
      }

      alert('Page should not scroll to top.');
  });
  
  //mboxTrack Rewards Club Sign-In
  function rcSignIn(param) {
    if (param='rcSignInSubmit') {
      mboxTrack('IHG_Guest_Info');
    }
  }

  //mboxTrack Rewards Club Join
  function rcJoin(param) {
    if (param='rcJoinSubmit') {
      mboxTrack('IHG_Guest_Info');
    }
  }  

});
