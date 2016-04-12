var DM = DM || {};

(function( $, DM, Cookies ) {

    // checks for presence of `eucookie` consent cookie
    // if not found, then prompt user
    // if user accepts then store acceptance in cookie for one year

    'use strict';

    var $infopage = $('#cookiePolicy');

    function _cookieName() {
        var path = $(location).attr('href');
        var oAnchor = $('<a>', { href:path } )[0];
        var hostName = oAnchor.hostname;
        var tHost = hostName.split(".");
        var tTsoh =  tHost.reverse();
        var n = tTsoh.join(".") + '.eucookie';
        return n;
    }

    var cookiename = _cookieName();

    function _showChooser() {
        if ( ! Cookies.get(cookiename) ) {
            _showBanner();
        }
    }

    function _readMore() {
        $infopage.modal(options);
    }

    function _setUp() {
        Cookies.set(cookiename, 'true', { expires: 365, path: '/' });
        $('#eucookielaw').remove();
    }

    function _bindEvents() {
        $('body').on( 'click', '#acceptcookies', _setUp );
        $('body').on( 'click', '#readmore', _readMore );
    }

    function _showBanner() {
        $('#eucookielaw').show();
    }

    function fInit() {
        _showChooser();
        _bindEvents();
    }

    DM.EUCookieChoice = {
        init : fInit
    };

    return DM;

})( jQuery, DM, Cookies );
