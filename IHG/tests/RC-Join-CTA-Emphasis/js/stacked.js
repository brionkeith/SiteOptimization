jQuery(document).ready(function(jQuery) {

    if (trackingJson.loginType == 'anonymous') { // validate loginType: anonymous
        var RCjoinMod = jQuery('.marketingModuleState');

        jQuery(RCjoinMod).detach(); // detach marketing module from orignal location
        jQuery(RCjoinMod).appendTo('.contentWrapperHeader'); // append marketing module to header
        jQuery('.marketingModuleState h3').text('Not a Member Yet?'); // change text case
    }

	var eventHandler = function(e) {
		e.preventDefault();
    }

    jQuery('a.UHF_signInLink').bind('click', eventHandler);
    jQuery('a.UHF_signInLink').unbind('click', eventHandler);    

});