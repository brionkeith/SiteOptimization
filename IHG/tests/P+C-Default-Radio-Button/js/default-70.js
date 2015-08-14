jQuery(document).ready(function (jQuery) {
    if (jQuery('.rewardRate input:checked').prop('checked', true)) { //if each reward rate radio button is checked
        jQuery('.rewardRate input[value="0000"]').prop('checked', false); // uncheck radio button
        jQuery('.rewardRate input[value="2"]').prop('checked', true); // change input "checked" value to checked
    }
});

