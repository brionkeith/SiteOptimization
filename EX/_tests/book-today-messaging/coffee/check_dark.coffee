jQuery(document).ready (jQuery) ->
  msgWrap = jQuery("<div class=\"msgWrapper\"><span class=\"btmMsg\">MAKE YOUR RESERVATION TODAY AND LOCK IN THIS LOW PRICE<span class=\"ltdAvail\">Room Availability is Limited</span></span></div>")
  (msgWrap).insertBefore "#roomRateRoomType"
  msgWrap.delay(600).fadeIn 700
  jQuery(".msgWrapper:eq(1)").remove()
  return