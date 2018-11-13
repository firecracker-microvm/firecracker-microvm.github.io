$(document).ready(function(){
    
    //[Anclas con animación - Global]
    $('a[href*="#"]:not([href="#"]):not([href="#skip"])').click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 20)
                }, 1000);

                return false;
            }
        }
    });
    
    //Menu
    $('.mdl-header label').click(function(){
        $('body').toggleClass('over-hidden');
    });
    
    $('.mdl-header nav a').click(function(){
        $('.mdl-header label').click();
    });

    //Sticky Header
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop();
        if (scrollPos > 570){
            $('.sticky-header').addClass('sticky-show');
            console.log('adding class');
        } else {
            $('.sticky-header').removeClass('sticky-show');
        }
    });

    
});

$(window).load(function(){
    $('.sta-masonry').each(function(){
        $(this).masonry();
    });
});