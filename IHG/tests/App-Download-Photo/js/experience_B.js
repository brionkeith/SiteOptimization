jQuery(document).ready(function ($) {
    // Modify headline text
    jQuery('.appdl-bkgd .ihgtranslatortext:eq(0)').prepend('<p class="taoDownloadintro">The IHG&reg app <strong>makes it easier</strong> than ever<br> to <strong>find, book and manage</strong> your stays.</p>');

    // Insert new "standard rates" text
    jQuery('<p class="taoDataRates">Standard message and data rates may apply. We will not use your information for marketing purposes.</p>').insertAfter('.sms_modal_enter_number .appdl-txt');

    // Reverse position of form elements
    jQuery('.cellphonenumber').insertBefore('.countrydrop');

    // Remove first (default) option
    jQuery('#sms_modal_form_idd option:eq(0)').remove();

    // Remove this to facilitate floating the 'send link' button
    jQuery('.countrydrop').next('.clearingDiv').remove();

    // Update 'number' label text
    jQuery('.requiredField_indicator:eq(0)').html('<strong>Mobile Number</strong> (No Dashes)');

    // Update 'country' label text
    jQuery('.requiredField_indicator:eq(1)').html('<strong>Mobile Country</strong>');

    // Remove DIV to accomodate floating the star rating
    jQuery('.appdl-rating-txt').remove();

    // Replace star rating image
    jQuery('.appdl-stars img').replaceWith('<img src="http://prodcache.internal.ihg.com/content/dam/mobile/6c/en/us/app/icon_stars.png">');

    // Add new text
    jQuery('<p>4+ Average App Store Rating</p>').appendTo('.appdl-stars');

    jQuery( document ).ajaxComplete(function( event,request, settings ) {
      // Remove messaging after AJAX COMPLETE
      jQuery('.downloadintro').remove();
    });
});