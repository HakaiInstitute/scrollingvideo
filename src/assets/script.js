jQuery(document).ready(function($) {

    var $window = $(window);

    //Makes 3-digit numbers "001"
    function paddy(num, padlen, padchar) {
        var pad_char = typeof padchar !== 'undefined' ? padchar : '0';
        var pad = new Array(1 + padlen).join(pad_char);
        return (pad + num).slice(-pad.length);
    }

    var filmlength = 300; //Slice up the film and put into the directory using a slicing tool like

    for (i = 1; i < filmlength + 1; i++) { //file starts at #001
        $('<div class="scrollholder frame-' + paddy(i, 3) + ' invis" style="background-image: url(video/frame-' + paddy(i, 3) + '.jpg)" />').appendTo('.imagescroll');
    }

    function check_if_in_view() {

        //the heart beat
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();
        var percentage = Math.floor((s / (d - c)) * 100); //1-100 in real numbers
        var videostill = paddy(Math.floor(((percentage / 100) * (filmlength - 1)) + 1), 3);
        var videostillnext = paddy(Math.floor(((percentage / 100) * (filmlength - 1)) + 2), 3);

        //unhide the thing you are on 
        $('.frame-' + videostill).removeClass("invis");
        //Hide everything from there up
        for (i = videostillnext; i < filmlength + 1; i++) {
            $('.frame-' + paddy(i, 3)).addClass("invis");
        }
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});