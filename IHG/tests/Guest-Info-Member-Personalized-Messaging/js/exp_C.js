jQuery(document).ready(function (jQuery) {
  "use strict";
  if (trackingJson.loginType === 'explicit') {
    var taoLogInName = jQuery('.blockText').html().trim('');
    var taoCongrats = jQuery('<span class="bpg_congratulations">'+ taoLogInName +', thank you for being a valued IHG<sup>&reg;</sup> Rewards Club member.</span>');
    jQuery('<div class="bpgContainerNew"></div>').prependTo('#contentInnerContainer'); // recreate parent DIV
    jQuery(taoCongrats).prependTo('.bpgContainerNew');
    jQuery('.bpg_message').html("You always get the lowest price for our hotels booking directly with IHG<sup>&reg;</sup>.").insertAfter('.bpg_congratulations');
  }
});