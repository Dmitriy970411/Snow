$(document).ready(function () {
  $("#icon-angle-down").on("click", "a", function (event) {

    event.preventDefault();


    var id = $(this).attr('href'),

      top = $(id).offset().top;


    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});

$('.single-item').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  fade: true,

  responsive: [{
    breakpoint: 768,
    settings: {
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000

    }
  }]
});

$('.logo-items').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  centerMode: true,
  centerPadding: '70px',

  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$('.post-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  dots: true,
  arrows: false,

  responsive: [{
      breakpoint: 890,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



$(function () {
  let jsheader = $("#jsheader");
  let header = $("#header");
  let headerH = header.innerHeight();
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  $(window).on("scroll download resize", function () {
    headerH = header.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > headerH) {
      jsheader.addClass("fixed");
    } else {
      jsheader.removeClass("fixed");
    }
  });
  jsheader.addClass("fixed");

  document.body.addEventListener('touchmove', function (e) {
    e.preventDefault();
  });

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");
    $("html, body").removeClass("no-scroll");


    $("html, body").animate({
      scrollTop: elementOffset - 20
    }, 700);
  });

  navToggle.on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
    $("html, body").toggleClass("no-scroll");


  });

});

$(document).ready(function () {
  $('#portfolio-gallery-main').masonry({

    itemSelector: '.item',

    singleMode: false,

    isResizable: true,

    isAnimated: true,

    animationOptions: {
      queue: false,
      duration: 500
    }

  });
});