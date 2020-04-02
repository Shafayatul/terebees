(function($) { "use strict";
window.$router = true;

/*setInterval(() => {
    alert(window.$router);
}, 5000);*/
  

$( document ).ready(function() {
    if (document.cookie.indexOf('visited=true') == -1){
      // load the overlay
      $('#myModal').modal({show:true});
    //   $('.vimeo').on('ended', function(e){
    //       alert('shhffhhf')
    //   )};
      var year = 1000*60*60*24*365;
      var expires = new Date((new Date()).valueOf() + year);
      document.cookie = "visited=true;expires=" + expires.toUTCString();
  
    }
  }); 

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

     
      
    });

    if ($("#contact-map")[0]) {
      
    }
}
}, 100);

})(jQuery);