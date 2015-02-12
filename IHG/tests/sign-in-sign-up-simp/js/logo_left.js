jQuery(document).ready(function(jQuery) {

  jQuery('#identityBlock:eq(0) .heavyText span').html('We\'ll Fill Out the Form. You\'ll Get the Points. Sign In Now.'); // Change default HTML text
  jQuery('#identityBlock:eq(0) .heavyText, .signIn').wrapAll('<div class=\"rememberWrap\"></div>'); // Wrap both div tags into a single div
  
  jQuery('.signIn div span label').appendTo('.signIn'); // Move form label into div for positioning
  jQuery('.signIn div span input#remember').appendTo('.signIn'); // Move form label into div for positioning
  jQuery('.signIn label, .signIn input#remember').wrapAll('<div class=\"rememberCheck\"></div>'); // Wrap label and input into a single div
  jQuery('.signIn div:eq(3)').addClass('forgotRememberPin'); // Add class name to div for specific targeting
  
  jQuery('#frmGuestInfo #identityBlock .heavyText span:eq(0)').html('Get More from Your Stay. Join IHG<sup>®</sup> Rewards Club.'); // Change default HTML text
  jQuery('#frmGuestInfo #identityBlock #anonId .heavyText').prependTo('.joinNow'); // Move header text into .joinNow for more accurate positioning
  
  var POINTS = jQuery('#frmGuestInfo #identityBlock .heavyText:eq(1) span').text(); // Get points for earn messaging
  // var termsLinkHTML = jQuery .clone('.joinnowtext .pcrTerms')attr('href');

  jQuery('#frmGuestInfo #identityBlock .heavyText:eq(1)').html('This reservation could earn you ' + '<strong>' + POINTS + '</strong>' + ' points towards a free night.'); // Change default text and add POINTS var
  jQuery('#frmGuestInfo #identityBlock #anonId .joinnowtext label').html('Sign me up now. Look for your new member info on the confirmation page. <br>Read the<a href=\"#\" class=\"pcrTerms\" title="IHG<sup>®</sup> Rewards Club Terms & Conditions."> IHG<sup>®</sup> Rewards Club Terms &amp; Conditions.</a>'); // Change default HTML text

  function openTermsAndConditionDialog() {
    jQuery('#pcrTerms_conditions_dialog').dialog({autoOpen: false,resizable: false,width: 500,height: 350,dialogClass: 'pcrTermsDialog',buttons: [{alt: jQuery("#pcrTerms_conditions_dialog .closeControl").attr("title"),title: jQuery("#pcrTerms_conditions_dialog .closeControl").attr("title"),click: function() {
                    jQuery(this).dialog("close");
                }}]});
    jQuery('.pcrTerms').click(function(e) {
        jQuery('#pcrTerms_conditions_dialog').show();
        jQuery("#pcrTerms_conditions_dialog").removeClass("hide");
        jQuery('#pcrTerms_conditions_dialog').dialog('open');
        jQuery("#pcrTerms_conditions_dialog").scrollLeft(0);
        registerEventToTealeaf(e);
        return false;
    });
  }

  // mboxTrackDefer
  /*function validate(form){
    if(…the form is valid…){
    mboxTrackDefer('IHG_Guest_Info');
    form.submit();
    }
  }*/

  // mboxTrack
  /*e(".ui-uhfWalletFlyout-wrapper #signup a").click(function() {
    mboxTrack("IHG_HomePageLogin_Top", "textClicked=signUpControl")
  });*/

});

// $(document).on('click', '#pcrEnrollNew', function()
// {
//   if ($('#identityBlock #pcrEnrollNew').is(":checked")) {
//     $('#identityBlockOrginal #pcrEnroll').attr('checked', $('#identityBlock #pcrEnrollNew').attr('checked'));
//   }
//   else{
//     $('#identityBlockOrginal #pcrEnroll').removeAttr('checked');    
//   }
  
//   console.log($('#identityBlockOrginal #pcrEnroll').attr('checked'));
// });
