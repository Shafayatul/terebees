(function($) { "use strict";
window.$router = true;

/*setInterval(() => {
    alert(window.$router);
}, 5000);*/

$(window).on('load', function() {
    $('.preloader-wrap').fadeOut();
});
setInterval(() => {
if(window.$router == true){

    $('.preloader-wrap').fadeOut();

    $(function() {

        var navbar_nav = $('.navbar-nav'),
            site_header = $('.site-header'),
            wHeight = window.innerHeight,
            hHeight = site_header.outerHeight(),
            wWidth = $(window).width(),
            fitscreen = wHeight-hHeight,
            fitscreen = wHeight-hHeight;

        if ( $(window).width() < 992 ) {
            $(document).on('click', '.navbar-toggler', function(event) {
                event.preventDefault();
                $(this).toggleClass('active');

                if ($(window).scrollTop() < 1) {
                    site_header.toggleClass('header-sticky');
                }

                $(window).scroll(function() {
                    if ($(window).scrollTop() > 1) {
                        return
                    } else {
                        site_header.toggleClass('header-sticky');
                    }
                });
            });

            $(document).on('click', '.navbar-nav li a', function(event) {
                if ($(this).next().is('ul')) {
                    $(this).next('ul').slideToggle()
                }
            });
        }

        $('.fitscreen').css('height', wHeight);
        $('.fullscreen').css('height', wHeight);

        $(window).scroll(function() {
            if ($(window).scrollTop() > 1) {
                if (!site_header.hasClass('header-sticky')) {
                    site_header.addClass('header-sticky');
                }
            } else {
                if (site_header.hasClass('header-sticky')) {
                    site_header.removeClass('header-sticky');
                }
            }
        });

        if ($('.site-main').hasClass('dark-bg')) {
            $('.site-main').removeClass('dark-bg');
            $('body').addClass('dark-bg');
        } else {
            $('.navbar-nav').addClass('navbar-nav');
            $('.animated-ham').addClass('anim-ham-dark');
        }

        $('section > .container > .row').each(function(index, el) {
            var col_length = $(this).children('.col-12').length;
            $(this).children('.col-12').addClass('col-length-'+col_length);
        });

        $('.animated-border').each(function() {
            $(this).append('<span class="border-span"></span>')
            $(this).find('.gradient-border').removeClass('gradient-border')
        });

        $('.masonry-gallery').masonry({
            itemSelector: '.col-12'
        });

        // mfp image
        $('.mfp-image-single').magnificPopup({
            type: 'image',
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function() {
                    // just a hack that adds mfp-anim class to markup 
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeOnContentClick: true,
            midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        });

        // mfp image
        $('.mfp-image-gallery').magnificPopup({
            type: 'image',
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function() {
                    // just a hack that adds mfp-anim class to markup 
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeOnContentClick: true,
            midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
            gallery: {
                enabled: true
            }
        });

        // mfp iframe
        $('.mfp-iframe').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // set background color and opacity from html5 data attribute
        $('[data-bgc]').each(function() {
            var bgc = $(this).attr('data-bgc'),
                res = bgc.split(','),
                hex = res[0];

            // check if opacity exists witg bgc
            if (bgc.indexOf(',') > -1) {
                var alpha = res[1];
            } else {
                var alpha = 100;
            }
            $(this).css('background-color', convertHex(hex,alpha)).removeAttr('data-bgc');
        });

        // set font size by html5 data attribute
        $('[data-fs]').each(function() {
            var fs = $(this).attr('data-fs');

            $(this).css('font-size', fs+'px');
        });

        // convert hex to rgba
        function convertHex(hex,opacity){
            var hex = hex.replace('#',''),
                r = parseInt(hex.substring(0,2), 16),
                g = parseInt(hex.substring(2,4), 16),
                b = parseInt(hex.substring(4,6), 16),

                result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
            return result;
        }

        // console.log(convertHex('#fc0247',80));      

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }


        if ($(".paroller")[0]){
            // initialize paroller.js and set attributes for selected elements
            $("[data-paroller-factor]").paroller();

            $(".paroller").paroller({
                factor: 0.3,            // multiplier for scrolling speed and offset
                factorXs: 0.1,           // multiplier for scrolling speed and offset
                type: 'background',     // background, foreground
                direction: 'vertical' // vertical, horizontal
            });
        }

        $('.material-input input, .material-input textarea').each(function() {
            $(this).on('focus', function() {
                $(this).parent().addClass('active');
            }).on('focusout', function() {
                if($(this).val() == '') {
                    $(this).parent().removeClass('active');
                }
            });
        });

        /* ========================================================================= */
        /*  Contact Form
        /* ========================================================================= */
        
        $('#contact-form').validate({
            rules: {
                fname: {
                    required: true,
                    minlength: 2
                },
                lname: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                fname: {
                    required: "come on, you have a first name don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                lname: {
                    required: "come on, you have a last name don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "mail.php",
                    success: function() {
                        $('#contact-form #success').fadeIn();
                        $('#contact-form')[0].reset();
                        $('#contact-form #success').delay(5000).slideUp(400);
                    },
                    error: function() {
                        $('#contact-form #error').fadeIn();
                    }
                });
            }
        });
    });

    if ($("#contact-map")[0]) {
      
    }
}
}, 100);

})(jQuery);