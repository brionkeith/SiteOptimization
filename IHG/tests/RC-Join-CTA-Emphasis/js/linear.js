jQuery(document).ready(function(jQuery) {
	var RCjoinMod = jQuery('.marketingModuleState');

	jQuery(RCjoinMod).detach();
	jQuery(RCjoinMod).appendTo('.contentWrapperHeader');

    // validate loginType: implicit
    if (trackingJson.loginType == 'implicit') {

        jQuery('.marketingModuleState').css({
            'text-align': 'right' // align parent container
        });

        jQuery('.marketingModuleState h3:contains("Already a Member?")').css({
            'margin-right': '13px', // increases marging between button
            'text-align': 'right', // override default text alignment
            'width': '80%' // prevent text from collapsing
        });

        jQuery('.marketingModuleState #signInSubmit').css({
            'margin-top': '0' // override default top margin
        });
    }		
});