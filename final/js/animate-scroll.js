var animationElements = $('.animated');

$(window).on('scroll', function () {
    
    var windowHeight = $(window).height();
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + windowHeight;
    
    $.each(animationElements, function() {
        
        var element = $(this);
        
        var elementHeight = element.outerHeight();
        var elementTop = element.offset().top;
        var elementBottom = elementHeight + elementTop;
        
        if(elementBottom >= windowTop && elementTop <= windowBottom) {
            
            element.addClass('slideInLeft');
        }
        else {
            element.removeClass('slideInLeft');
        }
        
    });
});

$(window).trigger('scroll');