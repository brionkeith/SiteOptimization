jQuery(document).ready(function (jQuery) {
  "use strict";
  if (trackingJson.loginType === 'explicit') {
    var taoLogInName = jQuery('.blockText').html().trim('');
    var taoCongrats = jQuery('<span class="bpg_congratulations">Congratulations, ' + taoLogInName + '</span>');
    jQuery('<div class="bpgContainerNew"></div>').prependTo('#contentInnerContainer'); // recreate parent DIV
    jQuery(taoCongrats).prependTo('.bpgContainerNew');
    jQuery('.bpg_message').html("You're getting the lowest price for our hotels. We guarantee it.").insertAfter('.bpg_congratulations');;
  }
});