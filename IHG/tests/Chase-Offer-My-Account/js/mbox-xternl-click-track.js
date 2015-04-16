mboxTrack = function(mbox) { var d = new Date(); if (window.mboxFactoryDefault) { var ub = mboxFactoryDefault.getUrlBuilder().clone(); ub.addParameter("mbox", mbox); ub.addParameter('mboxTime', d.getTime() - (d.getTimezoneOffset() * 60000)); ub.addParameters(Array.prototype.slice.call(arguments).slice(1)); var img = new Image(); img.src = ub.buildUrl().replace("/mbox/undefined", "/mbox/ajax"); img.style.display = "none"; if (document.body) document.body.insertBefore(img,document.body.firstChild); } };

var Adbett=Adbett||{};
!function() {
    Adbett.applyClickTrack = function(type){
        mboxTrack("mboxClickTrack","clicked="+type);
    };
}();

mboxFactoryDefault.addOnLoad(function(){

    var timeout     = 30000,
        interval    = 300;

    var init = function(){

        jQuery('.chaseOffer p a').click(function(){
            Adbett.applyClickTrack('learn-more');
            setTimeout("location='" + this.href + "'",750);
            return false;
        });
    };

    var checkJQuery = function(){
        if ('undefined' === typeof window.jQuery) { 
            if(timeout > interval) {
                setTimeout(checkJQuery, interval);
            }
            timeout -= interval;
            return; 
        }
        init();
    };
    checkJQuery();

});