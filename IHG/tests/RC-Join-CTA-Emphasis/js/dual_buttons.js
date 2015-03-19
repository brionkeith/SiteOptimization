jQuery(document).ready(function(jQuery) {
	var joinNowBtn = jQuery('.marketingModuleState #joinNowSubmit');
	jQuery(joinNowBtn).clone().text("NOT A MEMBER? JOIN NOW").appendTo('.contentWrapperHeader');
});