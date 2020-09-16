jQuery(document).ready(function($) {

    var $animation_elements = $('.text');
    var $window = $(window);

    function paddy(num, padlen, padchar) {
        var pad_char = typeof padchar !== 'undefined' ? padchar : '0';
        var pad = new Array(1 + padlen).join(pad_char);
        return (pad + num).slice(-pad.length);
    }

    var filmlength = 300;

    for (i = 1; i < filmlength + 1; i++) { //file starts at #001
        $('<div class="scrollholder frame-' + paddy(i, 3) + ' invis" style="background-image: url(/video/frame-' + paddy(i, 3) + '.jpg)" />').text(filmlength[i]).appendTo('.imagescroll');
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
        console.log(percentage, videostill, videostillnext)
        for (i = videostillnext; i < filmlength + 1; i++) {
            $('.frame-' + paddy(i, 3)).addClass("invis");
        }



        // $('.scrollholder').addClass("invis");
        // $('.frame-' + videostillpre).removeClass("invis");
        // $('.frame-' + videostill).removeClass("invis");
        // $('.frame-' + videostillnext).removeClass("invis");


        // $("body").addClass("sunny");
        // $('.im1').css('margin-top', 10 + (percentage / -10) + '%');
        // $.each($animation_elements, function() {

        //     if (percentage >= 0) {

        //         $(".clouds").addClass("snow-gone");

        //     }
        // });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    //-------------------------------------------
    // Scroll to next section smoothly
    //-------------------------------------------

    // $("#link").click(function() {
    //     $('html, body').animate({
    //         scrollTop: $(document).height() / 7
    //     }, 1800, 'easeInOutCubic');
    // });
    // $("#link2").click(function() {
    //     $('html, body').animate({
    //         scrollTop: $(document).height() * 2 / 7
    //     }, 1800, 'easeInOutCubic');
    // });
});