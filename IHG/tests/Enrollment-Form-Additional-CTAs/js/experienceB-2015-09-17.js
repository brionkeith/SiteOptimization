jQuery(document).ready(function (jQuery) {

	var taoRightRail = jQuery('#contentSlot');
	jQuery("#contentSlot img").hide();

	var taoRcHeader = jQuery('.text.parbase.text_4.LinkMorpher').prependTo('#introSection'); // Move header to intro

	var taoSecLogos = jQuery('#securityLogos');
	var taoReqFields = jQuery('.indicatesRequiredFields');
	jQuery(taoSecLogos).parent().addClass('secLogoParent');
	jQuery('.secLogoParent, .indicatesRequiredFields').wrapAll('<div class="logoReqParent"></div>');

	var taoLogoReqParent = jQuery('.logoReqParent').appendTo('#formHeaderWrapper td:eq(0) h2'); // Move security logos and req. text to Acct. Info <tr>

	// Build sign in container
	var taoSignIn = jQuery('<div id="taoSignIn"></div>');
	var taoSignInHeader = jQuery('<h3>Sign In</h3>');
	var taoSignInTxt = jQuery('<p>If you are already a member<br> sign in to IHG&reg; Rewards<br> Club to view your account.</p>');
	var taoSignInBtn = jQuery('<button type="button" class="btn btn-primary btnFluid btnWallet signIn" autocomplete="off">Sign In</button>');
	jQuery(taoRightRail).append(taoSignIn);
	jQuery(taoSignInHeader).appendTo(taoSignIn);
	jQuery(taoSignInTxt).insertAfter(taoSignInHeader);
	jQuery(taoSignInBtn).insertAfter(taoSignInTxt);

	// Build create pin container
	var taoCreatePIN = jQuery('<div id="taoCreatePIN"></div>');
	var taoCreatePINHeader = jQuery('<h3>Create PIN</h3>');
	var taoCreatePINTxt = jQuery('<p>If you joined the IHG&reg;<br> Rewards Club at a hotel you<br> will need to created a PIN.</p>');
	var taoCreatePINBtn = jQuery('<button type="button" class="btn btn-primary btnFluid btnWallet signIn" autocomplete="off">Create PIN</button>');
	jQuery(taoRightRail).append(taoCreatePIN);
	jQuery(taoCreatePINHeader).appendTo(taoCreatePIN);
	jQuery(taoCreatePINTxt).insertAfter(taoCreatePINHeader);
	jQuery(taoCreatePINBtn).insertAfter(taoCreatePINTxt);

	// Build learn more container
	var taoLearnMore = jQuery('<div id="taoLearnMore"></div>');
	var taoLearnMoreHeader = jQuery('<h3>Learn More</h3>');
	var taoLearnMoreTxt = jQuery('<p>Learn more about the<br> benefits and features of<br> the IHG&reg; Rewards Club.</p>');
	var taoLearnMoreBtn = jQuery('<a href="http://www.ihg.com/rewardsclub/us/en/home"><button type="button" class="button">Learn More</button></a>');
	jQuery(taoRightRail).append(taoLearnMore);
	jQuery(taoLearnMoreHeader).appendTo(taoLearnMore);
	jQuery(taoLearnMoreTxt).insertAfter(taoLearnMoreHeader);
	jQuery(taoLearnMoreBtn).insertAfter(taoLearnMoreTxt);

	// UHF Sign In click event
	jQuery('.logIn .logIn-link').on('click', function(){
		jQuery('.uhf_headerFooter .walletTransition').css({
			'margin-right': '0px'
		});
		jQuery('.uhf_headerFooter .wallet .wallet-login-shared, .uhf_headerFooter .wallet .wallet-anonymous').css({
			'display': 'block'
		});
		jQuery('.uhf_headerFooter .wallet .wallet-createPin, .uhf_headerFooter .wallet .errorTopMsg').css({
			'display': 'none' // Hide Create PIN form when clicked
		});		
	});

	// Sign In click event handler
	jQuery('#contentSlot #taoSignIn .btn').on('click', function(){
		jQuery('body').addClass('walletIsOpen');		
		jQuery('.wallet.walletTransition').addClass('show');

		if(jQuery('.wallet.walletTransition').css('margin-right') == '-480px') {
			jQuery('.wallet.walletTransition.show').animate({'margin-right': '0px'}, 100);
		} else {
			jQuery('.wallet.walletTransition').animate({'margin-right': '0px'},  100);
		}

		jQuery('.uhf_headerFooter .wallet .wallet-login-shared, .uhf_headerFooter .wallet .wallet-anonymous').css({
			'display': 'block'
		});
		jQuery('.uhf_headerFooter .wallet .wallet-createPin').css({
			'display': 'none' // Hide Create PIN form when clicked
		});

		// If button is clicked again prevent wallet from closing
		// by adding the classname 'show' again
		if(jQuery('.walletTransition').addClass('show')) {
			jQuery('.uhf_headerFooter .walletTransition.show').css({
				'display': 'block'
			});
		}
	});

	// Create PIN click event handler
	jQuery('#contentSlot #taoCreatePIN .btn').on('click', function(){
		jQuery('body').addClass('walletIsOpen');		
		jQuery('.wallet.walletTransition').addClass('show');

		if(jQuery('.wallet.walletTransition').css('margin-right') == '-480px') {
			jQuery('.wallet.walletTransition.show').animate({'margin-right': '0px'}, 100);
		} else {
			jQuery('.wallet.walletTransition').animate({'margin-right': '0px'},  100);
		}

		jQuery('.uhf_headerFooter .wallet .wallet-createPin').css({
			'display': 'block'
		});
		jQuery('.uhf_headerFooter .wallet .wallet-login-shared, .uhf_headerFooter .wallet .wallet-anonymous').css({
			'display': 'none' // Hide Sign In form when clicked
		});		
	});
});