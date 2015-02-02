jQuery(document).ready (jQuery) ->
  msgWrap = jQuery("<div class=\"msgWrapper\"><span class=\"msgWrapper-btmMsg\">Make Your Reservation Today and Lock In This Low Price<span class=\"msgWrapper-ltdAvail\">Room Availability is Limited</span></span></div>")
  (msgWrap).insertBefore "#roomRateRoomType"
  msgWrap.delay(600).fadeIn 700
  jQuery(".msgWrapper:eq(1)").remove()
  return