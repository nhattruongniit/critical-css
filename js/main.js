$(document).ready(function() {

    /* TODO: jquery slimscroll for cart ============*/
    $('.js-cart-slimscroll').slimScroll({
        height: '310px',
        size: '5px'
    });

    /* TODO: slider banner ==================*/
    if($('.js-banner')) {
        $('.js-banner').slick({
            dots: false,
            autoplay: false,
            autoplaySpeed: 5000,
            pauseOnFocus: false,
            pauseOnHover: false,
            prevArrow: '<div class="c-button__slider c-button__slider--prev"><i class="fa fa-long-arrow-left"></i></div>',
            nextArrow: '<div class="c-button__slider c-button__slider--next"><i class="fa fa-long-arrow-right"></i></div>'
        });
    }

    if($('.js-special')) {
        $('.js-special').slick({
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 5000,
            pauseOnFocus: false,
            pauseOnHover: false,
        });
    }

    /* TODO: countdown for component clock ==============*/
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
        
    function initializeClock(endtime, clock) {
        var days = clock.querySelector('.js-clock__days');
        var hours = clock.querySelector('.js-clock__hours');
        var mins = clock.querySelector('.js-clock__mins');
        var secs = clock.querySelector('.js-clock__secs');

        function updateClock() {
            var t = getTimeRemaining(endtime);
            days.innerHTML = t.days;
            hours.innerHTML = ('0' + t.hours).slice(-2);
            mins.innerHTML = ('0' + t.minutes).slice(-2);
            secs.innerHTML = ('0' + t.seconds).slice(-2);
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
      
    if($('.js-clock')) {
        var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
        $('.js-clock').each(function(index, el) {
            initializeClock(deadline, el);
        });
    }

    /* TODO: grid for component yield ==============*/
    $('.js-filter > a').on('click', function() {
        var $filter = $(this).attr('data-filter');
        $('.js-filter a').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.c-yield__stage').find($('.c-yield__public')).hide().removeClass('active');
        $('.' + $filter).show().addClass('active');
    })
    $('.js-filterFeature > a').on('click', function() {
        var $filter = $(this).attr('data-filter');
        $('.js-filterFeature a').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.c-yield__stageFeature').find($('.c-yield__public')).hide().removeClass('active');
        $('.' + $filter).show().addClass('active');
    })
})