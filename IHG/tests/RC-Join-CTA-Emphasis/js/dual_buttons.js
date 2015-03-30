jQuery(document).ready(function(jQuery) {
    if (trackingJson.loginType == 'anonymous') { // if loginType is 'anonymous'
		// var RCjoinMod = jQuery('.marketingModuleState'); // get marketing module
    	// jQuery(RCjoinMod).clone().appendTo('.contentWrapperHeader'); // clone and append to content wrapper

	  	var joinNowBtn = jQuery('.marketingModuleState #joinNowSubmit'); // get Join Now button
		jQuery(joinNowBtn).clone().text("NOT A MEMBER? JOIN NOW").appendTo('.contentWrapperHeader'); //clone button and change text
    }
});