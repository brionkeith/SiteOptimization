jQuery(document).ready(function(jQuery) {
    
    if (trackingJson.loginType == 'anonymous') { // validate loginType: anonymous
        var RCjoinMod = jQuery('.marketingModuleState');

        jQuery(RCjoinMod).detach();
        jQuery(RCjoinMod).appendTo('.contentWrapperHeader');
        jQuery('.marketingModuleState h3').text('Not a Member Yet?'); // change text case
    }

});