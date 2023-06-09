/**
* Cartzilla | Bootstrap E-Commerce Template
* Theme core scripts
*
* @author Createx Studio
* @version 1.0
*/

( function( $, window ) {
    'use strict';

    const theme = {

/**
* Theme's components/functions list
* Comment out or delete the unnecessary component.
* Some component have dependencies (plugins).
* Do not forget to remove component plugin script from src/vendor/js
*/

init: () => {
    theme.masonryGrid();
    theme.stickyNavbar();
    theme.stuckNavbarMenuToggle();
    theme.passwordVisibilityToggle();
    theme.multilevelDropdown();
    theme.scrollTopButton();
    theme.offcanvasSidebar();
    theme.tooltips();
    theme.popovers();
    theme.toasts();
    theme.disableDropdownAutohide();
    theme.carousel();
    theme.productGallery();
    theme.imageZoom();
    theme.videoPopupBtn();
    theme.ajaxifySubscribeForm();
    theme.filterList();
    theme.subMenuExpand();
    theme.smoothScroll();
    theme.countdown();
},



/**
* Cascading (Masonry) grid layout
* @memberof theme
* @method masonryGrid
* @requires https://github.com/desandro/imagesloaded
* @requires https://github.com/desandro/masonry
*/
masonryGrid: () => {

    let grid = document.querySelectorAll('.cz-masonry-grid'),
    masonry;

    if( (grid == null) || (grid.length <= 0) ) return;

    imagesLoaded(document.querySelector('body'), function() {
        for (let i = 0; i < grid.length; i++) {
            masonry = new Masonry(grid[i], {
                itemSelector: '.grid-item',
            });
        }
    });
},


/**
* Enable sticky behaviour of navigation bar on page scroll
* @memberof theme
* @method stickyNavbar
*/
stickyNavbar: () => {

    let navbar = document.querySelector('.navbar-sticky');

    if (navbar == null) return;

    let navbarH = navbar.offsetHeight,
    scrollOffset = cartzilla_options.scroll_sticky_nav_offset;

    window.addEventListener('scroll', (e) => {
        if (e.currentTarget.pageYOffset > scrollOffset) {
            document.body.style.paddingTop = navbarH + 'px';
            navbar.classList.add('navbar-stuck');
        } else {
            document.body.style.paddingTop = '';
            navbar.classList.remove('navbar-stuck');
        }
    });
},

/**
* Stuck 3 level navbar menu toggle
* @memberof theme
* @method stuckNavbarMenuToggle
*/
stuckNavbarMenuToggle: () => {

    let toggler = document.querySelector('.navbar-stuck-toggler'),
    stuckMenu = document.querySelector('.navbar-stuck-menu');

    if (toggler == null) return;

    toggler.addEventListener('click', function (e) {
        stuckMenu.classList.toggle('show');
        e.preventDefault();
    });

},

/**
* Toggling password visibility in password input
* @memberof theme
* @method passwordVisibilityToggle
*/
passwordVisibilityToggle: () => {

    let elements = document.querySelectorAll('.password-toggle');

    for (let i = 0; i < elements.length; i++) {
        let passInput = elements[i].querySelector('.form-control'),
        passToggle = elements[i].querySelector('.password-toggle-btn');

        passToggle.addEventListener('click', (e) => {

            if (e.target.type !== 'checkbox') return;
            if (e.target.checked) {
                passInput.type = 'text';
            } else {
                passInput.type = 'password';
            }

        }, false);
    }
},

/**
* Multilevel dropdown
* @memberof theme
* @method multilevelDropdown
* @requires https://jquery.com/
* @requires https://getbootstrap.com
*/
multilevelDropdown: function () {

    let selector = ".dropdown-menu [data-toggle='dropdown']";

    $(selector).on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $(this).siblings().toggleClass('show');

        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function () {
            $('.dropdown-submenu .show').removeClass('show');
        });
    });
},

/**
* Animate scroll to top button in/off view
* @memberof theme
* @method scrollTopButton
*/
scrollTopButton: () => {

    let element = document.querySelector('.btn-scroll-top'),
    scrollOffset = cartzilla_options.scroll_to_top_offset;

    if (element == null) return;

    let offsetFromTop = parseInt(scrollOffset, 10);

    window.addEventListener('scroll', (e) => {
        if (e.currentTarget.pageYOffset > offsetFromTop) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
},


/**
* Off-canvas sidebar
* @memberof theme
* @method offcanvasSidebar
*/
offcanvasSidebar: () => {

    let openTogglers = document.querySelectorAll('[data-toggle="sidebar"]'),
    closeTogglers = document.querySelectorAll('[data-dismiss="sidebar"]'),
    body = document.querySelector('body');

    for (let i = 0; i < openTogglers.length; i++) {
        openTogglers[i].addEventListener('click', (e) => {
            e.preventDefault();
            let sidebarID = e.currentTarget.getAttribute('href');
            document.querySelector(sidebarID).classList.add('show');
            body.classList.add('offcanvas-open');
        });
    }

    for (let i = 0; i < closeTogglers.length; i++) {
        closeTogglers[i].addEventListener('click', (e) => {
            e.currentTarget.closest('.cz-sidebar').classList.remove('show');
            body.classList.remove('offcanvas-open');
        });
    }
},


/**
* Tooltips
* @memberof theme
* @method tooltips
* @requires https://jquery.com/
* @requires https://getbootstrap.com
* @requires https://popper.js.org/
*/
tooltips: () => {

    let selector = $('[data-toggle="tooltip"]');

    selector.tooltip();
},


/**
* Popovers
* @memberof theme
* @method popovers
* @requires https://jquery.com/
* @requires https://getbootstrap.com
* @requires https://popper.js.org/
*/
popovers: () => {

    let selector = $('[data-toggle="popover"]');

    selector.popover();
},


/**
* Toasts
* @param {string} selector
*/
toasts: () => {

    let selector = $('[data-toggle="toast"]');

    selector.on('click', function() {
        var target = $(this).data('target');
        $(target).toast('show');
    });
},


/**
* Disable dropdown autohide when select is clicked
* @memberof theme
* @method disableDropdownAutohide
*/
disableDropdownAutohide: () => {

    let elements = document.querySelectorAll('.disable-autohide .custom-select');

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', (e)=> {
            e.stopPropagation();
        });
    }
},

/**
 * Countdown Timer
 * @memberof theme
 * @method countdown
*/
countdown: () => {

  let coundown = document.querySelectorAll('.cz-countdown');

  if (coundown == null) return;

  for (let i = 0; i < coundown.length; i++) {

    let endDate = coundown[i].dataset.countdown,
        daysVal = coundown[i].querySelector('.cz-countdown-days .cz-countdown-value'),
        hoursVal = coundown[i].querySelector('.cz-countdown-hours .cz-countdown-value'),
        minutesVal = coundown[i].querySelector('.cz-countdown-minutes .cz-countdown-value'),
        secondsVal = coundown[i].querySelector('.cz-countdown-seconds .cz-countdown-value'),
        days, hours, minutes, seconds;
    
    endDate = new Date(endDate).getTime();

    if (isNaN(endDate)) return;

    setInterval(calculate, 1000);

    function calculate() {
      let startDate = new Date().getTime();
      
      let timeRemaining = parseInt((endDate - startDate) / 1000);
      
      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = (timeRemaining % 86400);
        
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = (timeRemaining % 3600);
        
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);
        
        seconds = parseInt(timeRemaining);
        
        if (daysVal != null) {
          daysVal.innerHTML = parseInt(days, 10);
        }
        if (hoursVal != null) {
          hoursVal.innerHTML = hours < 10 ? '0' + hours : hours;
        }
        if (minutesVal != null) {
          minutesVal.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        }
        if (secondsVal != null) {
          secondsVal.innerHTML = seconds < 10 ? '0' + seconds : seconds;
        }
        
      } else {
        return;
      }
    }
  }
},

/**
* Content carousel with extensive options to control behaviour and appearance
* @memberof theme
* @method carousel
* @requires https://github.com/ganlanyuan/tiny-slider
*/
carousel: () => {

// forEach function
let forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
callback.call(scope, i, array[i]); // passes back stuff we need
}
};

// Carousel initialisation
let carousels = document.querySelectorAll('.cz-carousel .cz-carousel-inner');
forEach(carousels, function (index, value) {
    let defaults = {
        container: value,
        controlsText: ['<i class="czi-arrow-left"></i>', '<i class="czi-arrow-right"></i>'],
        navPosition: 'bottom',
        mouseDrag: true,
        speed: 500,
        autoplayHoverPause: true,
        autoplayButtonOutput: false
    };
    let userOptions;
    if(value.dataset.carouselOptions != undefined) userOptions = JSON.parse(value.dataset.carouselOptions);
    let options = {...defaults, ...userOptions};
    let carousel = tns(options);
});
},

/**
* Shop product page gallery with thumbnails
* @memberof theme
* @method productGallery
* @requires https://github.com/sachinchoolur/lightgallery.js
*/
productGallery: () => {

    let gallery = document.querySelectorAll('.cz-product-gallery');
    if (gallery.length) {

        for (let i = 0; i < gallery.length; i++) {

            let thumbnails = gallery[i].querySelectorAll('.cz-thumblist-item:not(.video-item)'),
            previews = gallery[i].querySelectorAll('.cz-preview-item'),
            videos = gallery[i].querySelectorAll('.cz-thumblist-item.video-item');


            for (let n = 0; n < thumbnails.length; n++) {
                thumbnails[n].addEventListener('click', changePreview);
            }

// Changer preview function
function changePreview(e) {
    e.preventDefault();
    for (let i = 0; i < thumbnails.length; i++) {
        previews[i].classList.remove('active');
        thumbnails[i].classList.remove('active');
    }
    this.classList.add('active');
    gallery[i].querySelector(this.getAttribute('href')).classList.add('active');
}

// Video thumbnail - open video in lightbox
for (let m = 0; m < videos.length; m++) {
    lightGallery(videos[m], {
        selector: 'this',
        download: false,
        videojs: true,
        youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            controls: 0
        },
        vimeoPlayerParams: {
            byline: 0,
            portrait: 0,
            color: 'fe696a'
        }
    });
}
}
}
},


/**
* Image zoom on hover (used inside Product Gallery)
* @memberof theme
* @method imageZoom
* @requires https://github.com/imgix/drift
*/
imageZoom: () => {

    let images = document.querySelectorAll('.cz-image-zoom');

    for (let i = 0; i < images.length; i++) {
        new Drift(images[i], {
            paneContainer: images[i].parentElement.querySelector('.cz-image-zoom-pane')
        });
    }
},


/**
* Open YouTube / Vimeo video in lightbox
* @memberof theme
* @method videoPopupBtn
* @requires https://github.com/sachinchoolur/lightgallery.js
*/
videoPopupBtn: () => {

    let button = document.querySelectorAll('.video-popup-btn');
    if (button.length) {
        for (let i = 0; i < button.length; i++) {
            lightGallery(button[i], {
                selector: 'this',
                download: false,
                videojs: true,
                youtubePlayerParams: {
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0,
                    controls: 0
                },
                vimeoPlayerParams: {
                    byline: 0,
                    portrait: 0,
                    color: 'fe696a'
                }
            });
        }
    }
},


/**
* Ajaxify subscription form (MailChimp)
* @memberof theme
* @method ajaxifySubscribeForm
* @requires https://jquery.com/
*/
ajaxifySubscribeForm: () => {

    $('.cz-subscribe-form .btn').each(function() {
        let $button = $(this),
        $form = $button.parents('.cz-subscribe-form'),
        $input = $form.find('.form-control'),
        $status = $form.find('.subscribe-status'),
        buttonInitText = $button.text(),
        input = $button.text();

        if($form.length) {
            $button.bind('click', function(event) {
                if(event) event.preventDefault();
                register($(this).parents('.cz-subscribe-form'));
            });
        }

        function register($form) {
            $button.text('Sending...');
            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                cache: false,
                dataType: 'jsonp',
                contentType: 'application/json; charset=utf-8',
                error: function (err) { alert('Could not connect to the registration server. Please try again later.') },
                success: function (data) {
                    if(data.result === 'success') {
                        $status.removeClass('status-error').addClass('status-success').text('Thank you for subscribing. We have sent you a confirmation email.')
                        $button.text(buttonInitText, setTimeout(function() {
                            $status.removeClass('status-success').text('');
                        }, 5000));
                        $input.val('');
                    } else {
                        $status.removeClass('status-success').addClass('status-error').text(data.msg.substring(4));
                        $button.text(buttonInitText, setTimeout(function() {
                            $status.removeClass('status-error').text('');
                        }, 5000));
                    }
                }
            });
        }
    });
},

/**
* Filter list of items by typing in the search field
* @memberof theme
* @method filterList
*/
filterList: () => {

    let filterListWidget = document.querySelectorAll('.cz-filter');

    for (let i = 0; i < filterListWidget.length; i++) {

        let filterInput = filterListWidget[i].querySelector('.cz-filter-search'),
        filterList = filterListWidget[i].querySelector('.cz-filter-list'),
        filterItems = filterList.querySelectorAll('.cz-filter-item');

        filterInput.addEventListener('keyup', filterListFunc);

        function filterListFunc() {

            let filterValue = filterInput.value.toLowerCase();

            for (let i = 0; i < filterItems.length; i++) {

                let filterText = filterItems[i].querySelector('.cz-filter-item-text').innerHTML;

                if(filterText.toLowerCase().indexOf(filterValue) > -1) {
                    filterItems[i].classList.remove('d-none');
                } else {
                    filterItems[i].classList.add('d-none');
                }

            }

        }
    }
},

/**
* Shows / hide sub menu on Handheld devices
* @memberof theme
* @method subMenuExpand
*/
subMenuExpand: () => {

    $(document).on('click', '.cz-handheld-menu .menu-item-has-children [data-toggle="sub-menu"]', function() {

        $(this).toggleClass('collapsed');

        let $targetUl = $(this).parents('.menu-item-has-children').find('> ul');

        $targetUl.toggle(300);
    });

},

/**
* Anchor smooth scrolling
* @memberof theme
* @method smoothScroll
* @requires https://github.com/cferdinandi/smooth-scroll/
*/
smoothScroll: () => {

    let selector = '[data-scroll]',
    fixedHeader = '[data-scroll-header]',
    scroll = new SmoothScroll( selector, {
        speed: 800,
        speedAsDuration: true,
        offset: 40,
        header: fixedHeader,
        updateURL: false
    } );
}

};

/**
* Init theme core
*/

theme.init();

$(document).on('ready', function () {
    if( typeof $.blockUI !== "undefined" ) {
        $.blockUI.defaults.message                      = null;
        $.blockUI.defaults.overlayCSS.background        = '#fff url(' + cartzilla_options.ajax_loader_url + ') no-repeat center';
        $.blockUI.defaults.overlayCSS.backgroundSize    = '16px 16px';
        $.blockUI.defaults.overlayCSS.opacity           = 0.6;
    }

    /*===================================================================================*/
    /*  Add to Cart animation
    /*===================================================================================*/

    $( 'body' ).on( 'adding_to_cart', function( e, $btn, data){
        $btn.closest( '.product' ).block();
    });

    $( 'body' ).on( 'added_to_cart', function(){
        $( '.product' ).unblock();
    });

    $( document ).on( 'click', '.product_quick_view', function(e) {
        var product_id = $(this).data('product_id');

        $.blockUI({message: null, overlayCSS: {background: '#fff url(' + cartzilla_options.ajax_loader_url + ') no-repeat center', backgroundSize: '16px 16px', opacity: 0.6}});

        $.ajax({
            url : cartzilla_options.ajax_url,
            type : 'post',
            data : {
                action : 'product_quick_view',
                product_id : product_id
            },
            success : function( response ) {  
                         
                $('#modal-quick-view-ajax-content').html( response );
                $('#quick-view').modal('show');
                $.unblockUI();

                var form_variation = $(".cd-quick-view").find('.variations_form');
                var form_variation_select = $(".cd-quick-view").find('.variations_form .variations select');

                form_variation.wc_variation_form();
                form_variation_select.change();

                if( ( typeof $.fn.wc_product_gallery !== 'undefined') && ( typeof wc_single_product_params !== 'undefined' )){
                    // Init galleries
                    $( '#quick-view' ).find( '.woocommerce-product-gallery' ).each( function() {
                        $( this ).wc_product_gallery( wc_single_product_params );
                    } );

                }
                
            },
            error: function(errorThrown) { console.log(errorThrown); },
        }).done(function(){

        $( '.variations_form' ).mas_wcvs_variation_swatches_form();
            $( document.body ).trigger( 'mas_wcvs_initialized' );
        });
        //return false;
    });

    $('#quick-view').on( 'hide.bs.modal', function (event) {
        $(this).find('#modal-quick-view-ajax-content').empty();
    });

    /*===================================================================================*/
    /*  Slick Carousel
    /*===================================================================================*/
    var is_rtl = $('body,html').hasClass('rtl');

    if ( $( '.cz-carousel' ).length ) {
        $( '.cz-carousel' ).each( function() {
            if ( $( this ).find( '.js-slick-carousel' ) && $( this ).find( '.js-slick-carousel' ).length ) {
                if( is_rtl ) {
                    var slickAttributes = JSON.parse( $( this ).find( '.js-slick-carousel' ).attr( 'data-slick' ) );
                    slickAttributes = { ...slickAttributes, rtl: true }
                    $( this ).find( '.js-slick-carousel' ).attr( 'data-slick', JSON.stringify( {...slickAttributes} ) )
                }
                $( this ).find( '.js-slick-carousel' ).slick();
            }
        } )
    }

    $('[data-ride="ct-slick-carousel"]').each( function() {
        var $slick_target = false;

        if ( $(this).data( 'slick' ) !== 'undefined' && $(this).find( $(this).data( 'wrap' ) ).length > 0 ) {
            $slick_target = $(this).find( $(this).data( 'wrap' ) );
            $slick_target.data( 'slick', $(this).data( 'slick' ) );
        } else if ( $(this).data( 'slick' ) !== 'undefined' && $(this).is( $(this).data( 'wrap' ) ) ) {
            $slick_target = $(this);
        }

        if( $slick_target ) {
            $slick_target.slick();
        }
    });

    // Set a cookie and hide the store notice when the dismiss button is clicked
    $( '.woocommerce-store-notice__dismiss-link' ).on( 'click', function() {
        $('body').addClass( 'woocommerce-store-notice-dismissed' );
    } );

    // Check the value of that cookie and show/hide the notice accordingly

    if ( typeof Cookies != 'undefined' ) {
        var matchedCookieNames = Object.keys( Cookies.getJSON() ).filter( function ( name ) { return name.indexOf("store_notice") === 0 } );
        if( matchedCookieNames.length > 0 && 'hidden' === Cookies.get( matchedCookieNames[0] ) ) {
            $('body').addClass( 'woocommerce-store-notice-dismissed' );
        } else {
            $('body').removeClass( 'woocommerce-store-notice-dismissed' );
        }
    }

    if (jQuery(window).width() >= 1025){

        $('.navbar-nav>li.dropdown > a').on('click', function() {
            var addressValue = $(this).attr("href");
            location.href=addressValue;
        });
    };

});

/*===================================================================================*/
/*  WooCompare
/*===================================================================================*/


$( document ).on( 'click', '.add-to-compare-link:not(.added)', function(e) {

    e.preventDefault();

    var button = $(this),
    data = {
        _yitnonce_ajax: yith_woocompare.nonceadd,
        action: yith_woocompare.actionadd,
        id: button.data('product_id'),
        context: 'frontend'
    },
    widget_list = $('.yith-woocompare-widget ul.products-list');

    // add ajax loader
    if( typeof woocommerce_params != 'undefined' ) {
        button.closest( '.product' ).block();
        widget_list.block();
    }

    $.ajax({
        type: 'post',
        url: yith_woocompare.ajaxurl.toString().replace( '%%endpoint%%', yith_woocompare.actionadd ),
        data: data,
        dataType: 'json',
        success: function(response){

            if( typeof woocommerce_params != 'undefined' ) {
                $( '.product' ).unblock();
                widget_list.unblock()
            }

            button.addClass('added')
            .attr( 'href', cartzilla_options.compare_page_url )
            .text( yith_woocompare.added_label );
            // add the product in the widget
            widget_list.html( response.widget_table );
        }
    });
});

function maswcvsSelectedLabel() {
    $( '.mas-wcvs-swatches' ).each( function() {
        var $el = $( this ),
            $label = $el.closest( '.form-group' ).find( '.label' );

        if( ! $el.find( '.selected' ).length && $label.find( '.mas-wcvs-swatch-selected' ).length ) {
            $label.find( '.mas-wcvs-swatch-selected' ).remove();
        }
    } );

    $( '.mas-wcvs-swatch.selected' ).each( function() {
        var $el = $( this ),
            $label = $el.closest( '.form-group' ).find( '.label' );

        if ( $label.find( '.mas-wcvs-swatch-selected' ).length ) {
            $label.find( '.mas-wcvs-swatch-selected' ).html( $el.attr('title') );
        } else {
            $label.append( '<span class="mas-wcvs-swatch-selected text-muted">' + $el.attr('title') + '</span>' );
        }
    } );
}

maswcvsSelectedLabel();

$( '.variations_form' ).on( 'woocommerce_variation_has_changed', function () {
    maswcvsSelectedLabel();
} )
.on( 'click', '.reset_variations', function () {
    maswcvsSelectedLabel();
} );

$( document ).on( 'cartzillagb_products_block_output_success', function( e, el ) {
    $( el ).find( '.variations_form' ).each( function() {
        if ( $.isFunction( $.fn.wc_variation_form ) ) {
            $( this ).wc_variation_form();
            $( this ).find( '.variations select' ).change();
        }
        if ( $.isFunction( $.fn.mas_wcvs_variation_swatches_form ) ) {
            $( this ).mas_wcvs_variation_swatches_form();
        }
    } );
} );

$(document).on( 'added_to_wishlist removed_from_wishlist', function(){
    var counter = $('.yith_wcwl_count');
    $.ajax({
        url: yith_wcwl_l10n.ajax_url,
        data: {
            action: 'yith_wcwl_update_wishlist_count'
        },
        dataType: 'json',
        success: function( data ){
            counter.html( data.count );
        },
        beforeSend: function(){
            counter.block();
        },
        complete: function(){
            counter.unblock();
        }
    })
} )

$('a.cartzilla-pp-add-change').on('click', function(e) {
    e.preventDefault();
    var file_frame,
        self = $(this);

    // If the media frame already exists, reopen it.
    if ( file_frame ) {
        file_frame.open();
        return;
    }

    // Create the media frame.
    file_frame = wp.media.frames.file_frame = wp.media({
        title: jQuery( this ).data( 'uploader_title' ),
        library: {
            type: 'image',
        },
        button: {
            text: jQuery( this ).data( 'uploader_button_text' )
        },
        multiple: false
    });

    // When an image is selected, run a callback.
    file_frame.on( 'select', function() {
        var attachment = file_frame.state().get('selection').first().toJSON();

        var wrap = self.closest('.cartzilla-pp-wrap');
        wrap.find('input.cartzilla-pp-file-field').val(attachment.id);
        wrap.find('img.photo').attr('src', attachment.url);
        wrap.find('img.photo').attr('srcset', attachment.url);
        wrap.find('a.cartzilla-pp-remove').removeClass('d-none');

    });

    // Finally, open the modal
    file_frame.open();
});

$('a.cartzilla-pp-remove').on('click', function(e) {
    e.preventDefault();
    self = $(this);
    self.addClass('d-none');
    var wrap = self.closest('.cartzilla-pp-wrap');
    wrap.find('input.cartzilla-pp-file-field').val(0);

    var gurl = wrap.find('img.photo').attr('gurl');
    wrap.find('img.photo').attr('src', gurl);
    wrap.find('img.photo').attr('srcset', gurl);
});



} )( jQuery, window );
