jQuery(document).ready(function($) {

    var $animation_elements = $('.text');
    var $window = $(window);

    function paddy(num, padlen, padchar) {
        var pad_char = typeof padchar !== 'undefined' ? padchar : '0';
        var pad = new Array(1 + padlen).join(pad_char);
        return (pad + num).slice(-pad.length);
    }

    var filmlength = 309;

    for (i = 1; i < filmlength + 1; i++) {
        $('<div class="scrollholder frame-' + paddy(i, 3) + ' invis" style="background-image: url(/video/frame-' + paddy(i, 3) + '.jpg)" />').appendTo('.imagescroll');
    }

    function check_if_in_view() {
        //heartbeat
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();
        var percentage = Math.floor((s / (d - c)) * 100);

        //apply the video across the entire scroll
        var videostill = paddy(Math.floor((percentage / 100) * filmlength), 3);
        var videostillpre = paddy(Math.floor(((percentage - 1) / 100) * filmlength), 3);
        var videostillnext = paddy(Math.floor(((percentage + 1) / 100) * filmlength), 3);

        //Show and hide frames as you scroll
        $('.scrollholder').addClass("invis");
        $('.frame-' + videostillpre).removeClass("invis");
        $('.frame-' + videostill).removeClass("invis");
        $('.frame-' + videostillnext).removeClass("invis");
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});