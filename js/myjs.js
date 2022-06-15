$(document).ready(function () {
  // Collapse tabs
  function collapse() {
    $('.collapse_btn').each(function () {
      if ($(this).hasClass("clp_clicked")) {
        $(this).siblings(".collapse_content").addClass("active");
        $(this).siblings(".collapse_content.active").slideDown();
      }
    });
    $('.collapse_btn').click(function (e) {
      e.preventDefault();
      $(this).toggleClass("clp_clicked");
      $(this).siblings(".collapse_content").slideToggle("linear");
      $(this).siblings(".collapse_content").addClass("active");

      $(this).parents(".collapse_row").siblings().find(".collapse_btn").removeClass("clp_clicked");

      $(this).parents(".collapse_row").siblings().find(".collapse_content").removeClass("active");
      $(this).parents(".collapse_row").siblings().find(".collapse_content").slideUp("linear");
    });
  }
  collapse();
  // Collapse tabs
  //language 
  function dropLangs() {
    $(".lang_sect").click(function () {
      $(this).toggleClass("clicked");
      // $(this).find(".langs").slideToggle();
    });
  }
  dropLangs();
  //language
  // Header fixed end
  function fixedMobileNav() {

    var wh = $(window).width();
    if(wh > 1172) {
      var hd_top = $(' ');
      var nav = $('.header_top ');
      var main = $('main ');
      var scrolled = false;
      if (120 < $(window).scrollTop() && !scrolled) {
        nav.addClass('visible_mob');
        main.addClass('p_top');
        hd_top.addClass('scroll_head');
        scrolled = true;
      }

      if (120 > $(window).scrollTop() && scrolled) {
        nav.removeClass('visible_mob');
        main.removeClass('p_top');
        hd_top.removeClass('scroll_head');
        scrolled = false;
      }

      $(window).scroll(function () {
        if (120 < $(window).scrollTop() && !scrolled) {
          nav.addClass('visible_mob');
          main.addClass('p_top');
          hd_top.addClass('scroll_head');
          scrolled = true;
        }

        if (120 > $(window).scrollTop() && scrolled) {
          nav.removeClass('visible_mob');
          main.removeClass('p_top');
          hd_top.removeClass('scroll_head');
          scrolled = false;
        }
      });

    } else {
      var hd_top = $('.header_top ');
      var nav = $('.header_bottom ');
      var main = $('main ');
      var scrolled = false;
      if (120 < $(window).scrollTop() && !scrolled) {
        nav.addClass('visible_mob');
        main.addClass('p_top');
        hd_top.addClass('scroll_head');
        scrolled = true;
      }

      if (120 > $(window).scrollTop() && scrolled) {
        nav.removeClass('visible_mob');
        main.removeClass('p_top');
        hd_top.removeClass('scroll_head');
        scrolled = false;
      }

      $(window).scroll(function () {
        if (120 < $(window).scrollTop() && !scrolled) {
          nav.addClass('visible_mob');
          main.addClass('p_top');
          hd_top.addClass('scroll_head');
          scrolled = true;
        }

        if (120 > $(window).scrollTop() && scrolled) {
          nav.removeClass('visible_mob');
          main.removeClass('p_top');
          hd_top.removeClass('scroll_head');
          scrolled = false;
        }
      });
    }
    

    $(window).resize(function () { 
      var wh = $(window).width();
      if(wh > 1172) {
        var hd_top = $(' ');
        var nav = $('.header_top ');
        var main = $('main ');
        var scrolled = false;
        if (120 < $(window).scrollTop() && !scrolled) {
          nav.addClass('visible_mob');
          main.addClass('p_top');
          hd_top.addClass('scroll_head');
          scrolled = true;
        }

        if (120 > $(window).scrollTop() && scrolled) {
          nav.removeClass('visible_mob');
          main.removeClass('p_top');
          hd_top.removeClass('scroll_head');
          scrolled = false;
        }

        $(window).scroll(function () {
          if (120 < $(window).scrollTop() && !scrolled) {
            nav.addClass('visible_mob');
            main.addClass('p_top');
            hd_top.addClass('scroll_head');
            scrolled = true;
          }

          if (120 > $(window).scrollTop() && scrolled) {
            nav.removeClass('visible_mob');
            main.removeClass('p_top');
            hd_top.removeClass('scroll_head');
            scrolled = false;
          }
        });

      } else {
        var hd_top = $('.header_top ');
        var nav = $('.header_bottom ');
        var main = $('main ');
        var scrolled = false;
        if (120 < $(window).scrollTop() && !scrolled) {
          nav.addClass('visible_mob');
          main.addClass('p_top');
          hd_top.addClass('scroll_head');
          scrolled = true;
        }

        if (120 > $(window).scrollTop() && scrolled) {
          nav.removeClass('visible_mob');
          main.removeClass('p_top');
          hd_top.removeClass('scroll_head');
          scrolled = false;
        }

        $(window).scroll(function () {
          if (120 < $(window).scrollTop() && !scrolled) {
            nav.addClass('visible_mob');
            main.addClass('p_top');
            hd_top.addClass('scroll_head');
            scrolled = true;
          }

          if (120 > $(window).scrollTop() && scrolled) {
            nav.removeClass('visible_mob');
            main.removeClass('p_top');
            hd_top.removeClass('scroll_head');
            scrolled = false;
          }
        });
      }

      
    });
  }
  fixedMobileNav();
  // Header fixed end

  //Menu 
  function menuClick() {
    $(".menu_btn").click(function () {
      $(this).toggleClass("clicked");
      $("nav.nav_mobile").toggleClass("transformed");
      $("body").toggleClass("mm_noscroll");
    });
    $("nav.nav_mobile ul.hdr_menu>li>a").click(function () {
      $(".menu_btn").removeClass("clicked");
      $("nav.nav_mobile").removeClass("transformed");
      $("body").removeClass("mm_noscroll");
    });
  }
  menuClick();
  //Menu

  //Full text 
  function fullText() {
    $(".full_text").click(function (e) {
      e.preventDefault();
      $(this).parents(".wrap_abt_site").toggleClass("full");
    });
  }
  fullText();
  //SEARCH 

  //Equal height
  equalHeight();

  function equalHeight(event) {
    $('.col_in').matchHeight({ property: 'min-height' });
  }
  //Equal height
});

// Scroll pages
var swiper = new Swiper('.top_slider .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 40,
  noSwiping: true,
  allowTouchMove: true,
  loop: true,
  speed: 2500,
  autoplay: {
    slideSpeed: 2500,
    delay: 2800,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.top_slider  .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.top_slider .swiper-button-next',
    prevEl: '.top_slider .swiper-button-prev',
  },
});
var swiper = new Swiper('.popular_slider .swiper-container', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 40,
  autoHeight: true,
  noSwiping: true,
  allowTouchMove: true,
  loop: true,
  speed: 2000,
  autoplay: {
    slideSpeed: 2000,
    delay: 2100,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.popular_slider  .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.popular_slider .swiper-button-next',
    prevEl: '.popular_slider .swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 16,
    },
    560: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 16,
    }
  }
});
var swiper = new Swiper('.partner_slider .swiper-container', {
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 20,
  noSwiping: true,
  allowTouchMove: true,
  loop: true,
  speed: 2500,
  autoplay: {
    slideSpeed: 2500,
    delay: 2800,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.partner_slider  .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.partner_slider .swiper-button-next',
    prevEl: '.partner_slider .swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 16,
    },
    560: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 16,
    }
  }
});