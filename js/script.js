'use strict';

$(function () {
    let windowWidth = $(window).width();
    var offset = 0;

    if(windowWidth <= 360) {
        offset = 170;
    }
    else if (windowWidth > 360 && windowWidth <= 768) {
        offset = 145;
    } else {
        offset = 125;
    }

     $('#theCarousel').carousel();
     

     var animateScroll = (function ($) {
         var animateToTarget = function (event) {
            let $eventTarget = $(event.target);
            if(!$eventTarget.is('a')){
                $eventTarget = $eventTarget.parent('a');
            }

             $('body, html')
                 .stop()
                 .animate({
                     scrollTop: $($eventTarget.attr('href')).offset().top - 100
                 }, 1500, 'easeInOutExpo');
         };

         var init = function () {
             $('body')
                 .scrollspy({
                     target: '.navbar',
                     offset: offset
                 });

             $('nav a').on('click', function (event) {
                 event.preventDefault();
                 $.when($('.navbar-collapse.in').collapse('hide'))
                     .then(function () {
                         animateToTarget(event);
                     });
             });
         }

         init();
     })($);
   

    var animatedNavbar = (function($) {
        var headerOffset = 300;
        var elem = $('.scroll-navbar');

        var init = function() {
            $(window).on('scroll',
                function() {
                    setTimeout(navbarOnScrolling, 250);
                });
        }


        var navbarOnScrolling = function() {
            let scrollY = window.pageYOffset || document.scrollTop;

            if (scrollY >= headerOffset) {
                elem.addClass('shrink-navbar');
            } else {
                elem.removeClass('shrink-navbar');
            }
        }

        init();
    })($);
});