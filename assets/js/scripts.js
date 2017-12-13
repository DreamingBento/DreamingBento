// Used for the animations
document.addEventListener('DOMContentLoaded', function () {

        $('#quote-row')
            .transition('hide')
            .transition('fade right', '2s')
        ;

        $('#playto-banner')
            .transition('hide')
            .transition('fly down', '1s')
            .transition('tada', '1s')
        ;

});

/** Modal Functions **/
function neilModal() {
    $('#neilModal')
    .modal('setting', 'transition', 'vertical flip')
    .modal('show')
    ;
}

function kaylaModal() {
    $('#kaylaModal')
    .modal('setting', 'transition', 'vertical flip')
    .modal('show')
    ;
}

function justinModal() {
    $('#justinModal')
    .modal('setting', 'transition', 'vertical flip')
    .modal('show')
    ;
}

function kaeliModal() {
    $('#kaeliModal')
    .modal('setting', 'transition', 'vertical flip')
    .modal('show')
    ;
}

function mickeyModal() {
    $('#mickeyModal')
    .modal('setting', 'transition', 'vertical flip')
    .modal('show')
    ;
}
