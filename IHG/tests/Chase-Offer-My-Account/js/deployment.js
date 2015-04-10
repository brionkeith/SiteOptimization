if (location.pathname.match(/\/rewardsclub\/(.*)\/account\/home\/?$/i) && $data('gdl', 'language') == 'en' && ($data('gdl', 'country') == 'us') && $data('gdl', 'brand') == '') {
  if (!Bootstrapper.hasDOMLoaded()) {
    document.write('<div class="mboxDefault"></div>');
    var lang = $data('gdl', 'language') ? 'language=' + $data('gdl', 'language') : '',
      country = $data('gdl', 'country') ? 'country=' + $data('gdl', 'country') : '',
      login = $data('gdl', 'loginStatus') ? 'loginType=' + $data('gdl', 'loginStatus') : '',
      pageId = $data('gdl', 'pageIdBrand') ? 'pageIdBrand=' + $data('gdl', 'pageIdBrand') : '';
    mboxCreate('IHG_RewardsClub_ChaseOffer', lang, country, login, pageId);
  }
}




if (location.pathname.match(/\/rewardsclub\/(.*)\/account\/home\/?$/i) && $data('gdl', 'language') == 'en' && ($data('gdl', 'country') == 'us' || $data('gdl', 'country') == 'gb') && $data('gdl', 'brand') === 'rc') {
  if (!Bootstrapper.hasDOMLoaded()) {
    document.write('<div class="mboxDefault"></div>');
    var lang = $data('gdl', 'language') ? 'language=' + $data('gdl', 'language') : '',
      country = $data('gdl', 'country') ? 'country=' + $data('gdl', 'country') : '',
      login = $data('gdl', 'loginStatus') ? 'loginType=' + $data('gdl', 'loginStatus') : '',
      pageId = $data('gdl', 'pageIdBrand') ? 'pageIdBrand=' + $data('gdl', 'pageIdBrand') : '';
    mboxCreate('IHG_RewardsClub_ChaseOffer', lang, country, login, pageId);
  }
}





if (location.hostname.match(/^(qa\.)?www\.ihg\.com/i) && location.pathname.match(/^\/(holidayinnexpress|intercontinental)\/.*\/(hoteldetail)$/i) && $data('gdl', 'brand') === 'ex') {
  if (typeof trackingJson === 'object' && (trackingJson.siteLanguage && trackingJson.siteLanguage == 'en') && (trackingJson.siteCountry && (trackingJson.siteCountry == 'us'))) {
    if (!Bootstrapper.hasDOMLoaded()) {
      var lang = trackingJson.siteLanguage ? 'language=' + trackingJson.siteLanguage : '',
        country = trackingJson.siteCountry ? 'country=' + trackingJson.siteCountry : '',
        login = trackingJson.loginType ? 'loginType=' + trackingJson.loginType : '',
        pageId = trackingJson.pageidbrand ? 'pageIdBrand=' + trackingJson.pageidbrand : '';
      document.write('<div class="mboxDefault"></div>');
      mboxCreate("EX_HotelDetails", lang, country, login, pageId);
    }
  }
}