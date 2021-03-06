$(document).ready(function () {

    $('.ui.dropdown').dropdown();

    $('#quote-row')
        .transition('hide')
        .transition('fade right', '2s');

    $('#playto-banner')
        .transition('hide')
        .transition('fly down', '1s')
        .transition('tada', '1s');

    $('#playtoImg').hover(function() {
            $(this).transition('jiggle');
        }, function() { })
    ;

    $('#landingImg').hover(function() {
            $(this).transition('jiggle');
        }, function(){ });

    $('#neil').click(function() {
        $('#neilModal')
            .modal('setting', 'transition', 'vertical flip')
            .modal('show')
    });

    $('#kayla').click(function() {
        $('#kaylaModal')
            .modal('setting', 'transition', 'vertical flip')
            .modal('show')
    });

    $('#kaeli').click(function() {
        $('#kaeliModal')
            .modal('setting', 'transition', 'vertical flip')
            .modal('show')
    });

    $('#justin').click(function() {
        $('#justinModal')
            .modal('setting', 'transition', 'vertical flip')
            .modal('show')
    });

    $('#mickey').click(function() {
        $('#mickeyModal')
            .modal('setting', 'transition', 'vertical flip')
            .modal('show')
    });

    $('#playtoImg').click(function() {
        $('#videoModal')
            .modal('setting', 'closable', false)
            .modal('setting', 'transition', 'vertical flip')
            .modal('show')
    });

    $('#stopVideo').click(function() {
        $('#gameplayVideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });

    $('.ui.accordion').accordion();

    //$('#push-content').css('height', $('nav').height());
    //$(window).resize(function() {
    //    $('#push-content').height($('nav').height());
    //});

    //$(window).trigger('resize');
    $('#home-item').mouseover(function () {
        $('#menu-img').attr('src', $('#menu-img').data('hover'));
    }).mouseout(function () {
        $('#menu-img').attr('src', $('#menu-img').data('src'));
    });

});
