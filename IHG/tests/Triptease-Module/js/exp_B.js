function mboxPixelTrack(mbox) {
    var d = new Date();
    var ub = mboxFactoryDefault.getUrlBuilder().clone();
    ub.addParameter("mbox", mbox);
    ub.addParameter('mboxTime', d.getTime() - (d.getTimezoneOffset() * 60000));
    ub.addParameters(Array.prototype.slice.call(arguments).slice(1));
    var img = new Image(); img.src = ub.buildUrl().replace("/mbox/undefined", "/mbox/ajax");
    img.style.display = "none"; if (document.body) document.body.insertBefore(img,document.body.firstChild); }

whenReady = function(readyFunc,actionFunc,options) {
    if (readyFunc()) { actionFunc.apply(this);
    } else {
        if (!options) options = {};
        if (!options.current) options.current = 0;
        if (!options.max) options.max = 6000;
        if (!options.interval) options.interval = 1000;
        if (options.current < options.max) { setTimeout(function() { options.current += options.interval;
            whenReady(readyFunc,actionFunc,options); },options.interval);
        } else if (options.ontimeout) {
            options.ontimeout() } };
    return true;
};

whenReady(
    function() {
        return window.jQuery && !!jQuery('.price-fighter-widget')[0];
    },
    function() {
        // get the widget placeholder
        var widget = jQuery('.price-fighter-widget');
        // hold on to the widget's parent element
        var parent = widget.parent();
        // clone an empty placeholder
        var newWidget = widget.clone().empty();
        // remove the old widget
        widget.remove();
        // configure and append the new widget
        newWidget.attr('data-pf-layout', 'ihg-lateral');
        parent.append(newWidget);
        // reload
        jQuery.getScript('https://stg-widget.triptease.net/loader.js?token=ecf0ef4b7731c56dfebdfaef246c94bbd34afab2');
    },
    {
        ontimeout: function() {
            console.log('*** Timing out ***');
        }
    }
);
