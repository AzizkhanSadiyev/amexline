$(document).ready(function () {
  // Collapse tabs
  function collapse() {
    $('.collapse_btn').each(function () {
      if($(this).hasClass("clp_clicked")) {
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
      if(120 < $(window).scrollTop() && !scrolled) {
        nav.addClass('visible_mob');
        main.addClass('p_top');
        hd_top.addClass('scroll_head');
        scrolled = true;
      }

      if(120 > $(window).scrollTop() && scrolled) {
        nav.removeClass('visible_mob');
        main.removeClass('p_top');
        hd_top.removeClass('scroll_head');
        scrolled = false;
      }

      $(window).scroll(function () {
        if(120 < $(window).scrollTop() && !scrolled) {
          nav.addClass('visible_mob');
          main.addClass('p_top');
          hd_top.addClass('scroll_head');
          scrolled = true;
        }

        if(120 > $(window).scrollTop() && scrolled) {
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
      if(120 < $(window).scrollTop() && !scrolled) {
        nav.addClass('visible_mob');
        main.addClass('p_top');
        hd_top.addClass('scroll_head');
        scrolled = true;
      }

      if(120 > $(window).scrollTop() && scrolled) {
        nav.removeClass('visible_mob');
        main.removeClass('p_top');
        hd_top.removeClass('scroll_head');
        scrolled = false;
      }

      $(window).scroll(function () {
        if(120 < $(window).scrollTop() && !scrolled) {
          nav.addClass('visible_mob');
          main.addClass('p_top');
          hd_top.addClass('scroll_head');
          scrolled = true;
        }

        if(120 > $(window).scrollTop() && scrolled) {
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
        if(120 < $(window).scrollTop() && !scrolled) {
          nav.addClass('visible_mob');
          main.addClass('p_top');
          hd_top.addClass('scroll_head');
          scrolled = true;
        }

        if(120 > $(window).scrollTop() && scrolled) {
          nav.removeClass('visible_mob');
          main.removeClass('p_top');
          hd_top.removeClass('scroll_head');
          scrolled = false;
        }

        $(window).scroll(function () {
          if(120 < $(window).scrollTop() && !scrolled) {
            nav.addClass('visible_mob');
            main.addClass('p_top');
            hd_top.addClass('scroll_head');
            scrolled = true;
          }

          if(120 > $(window).scrollTop() && scrolled) {
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
        if(120 < $(window).scrollTop() && !scrolled) {
          nav.addClass('visible_mob');
          main.addClass('p_top');
          hd_top.addClass('scroll_head');
          scrolled = true;
        }

        if(120 > $(window).scrollTop() && scrolled) {
          nav.removeClass('visible_mob');
          main.removeClass('p_top');
          hd_top.removeClass('scroll_head');
          scrolled = false;
        }

        $(window).scroll(function () {
          if(120 < $(window).scrollTop() && !scrolled) {
            nav.addClass('visible_mob');
            main.addClass('p_top');
            hd_top.addClass('scroll_head');
            scrolled = true;
          }

          if(120 > $(window).scrollTop() && scrolled) {
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

  // benefit tabs
  function benefitTabs() {
    $(".clicked_tab_btn").each(function (index) {
      let this_id = $(this).data("id");
      if($(this).hasClass("active")) {
        $(this).parents(".benefit_tabs").find(".bf_tb_content").find(".bf_tb_items[data-id=" + this_id + "]").addClass("active");
        $(this).parents(".benefit_tabs").find(".bf_tb_content").find(".bf_tb_items[data-id=" + this_id + "]").siblings().removeClass("active");
      }

      $(this).click(function () {
        let this_id = $(this).data("id");
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(this).parents(".benefit_tabs").find(".bf_tb_content").find(".bf_tb_items[data-id=" + this_id + "]").addClass("active");
        $(this).parents(".benefit_tabs").find(".bf_tb_content").find(".bf_tb_items[data-id=" + this_id + "]").siblings().removeClass("active");
      });
    });
  }
  benefitTabs();
  // benefit tabs

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
    $('.wrap_contact_block .col_body').matchHeight({ property: 'min-height' });
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
  speed: 2000,
  autoplay: {
    slideSpeed: 2000,
    delay: 2100,
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

var swiper = new Swiper('.auksion_slider .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 40,
  noSwiping: true,
  allowTouchMove: true,
  loop: true,
  speed: 1800,
  autoplay: {
    slideSpeed: 1800,
    delay: 2100,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.auksion_slider  .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.auksion_slider .swiper-button-next',
    prevEl: '.auksion_slider .swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    560: {
      slidesPerView: 2,
      spaceBetween: 16,
    }
  }
});

var swiper = new Swiper('.road_slider .swiper-container', {
  slidesPerView: 2,
  spaceBetween: 40,
  noSwiping: true,
  allowTouchMove: true,
  loop: true,
  speed: 1600,
  autoplay: {
    slideSpeed: 1600,
    delay: 1900,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.road_slider  .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.road_slider .swiper-button-next',
    prevEl: '.road_slider .swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    560: {
      slidesPerView: 2,
      spaceBetween: 16,
    }
  }
});

var swiper = new Swiper('.buy_slider .swiper-container', {
  slidesPerView: 2,
  spaceBetween: 40,
  noSwiping: true,
  allowTouchMove: true,
  loop: true,
  speed: 1800,
  autoplay: {
    slideSpeed: 1800,
    delay: 2100,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.buy_slider  .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.buy_slider .swiper-button-next',
    prevEl: '.buy_slider .swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    560: {
      slidesPerView: 2,
      spaceBetween: 16,
    }
  }
});


var swiper = new Swiper('.sell_slider .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 40,
  noSwiping: true,
  allowTouchMove: true,
  loop: true,
  speed: 1800,
  autoplay: {
    slideSpeed: 1800,
    delay: 2100,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.sell_slider .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.sell_slider .swiper-button-next',
    prevEl: '.sell_slider .swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    560: {
      slidesPerView: 2,
      spaceBetween: 16,
    }
  }
});


var swiper = new Swiper('.comments_slider .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 40,
  noSwiping: true,
  autoHeight: true,
  allowTouchMove: true,
  loop: true,
  speed: 2000,
  autoplay: {
    slideSpeed: 2000,
    delay: 2300,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.comments_slider .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.comments_slider .swiper-button-next',
    prevEl: '.comments_slider .swiper-button-prev',
  },
});


var swiper = new Swiper('.wrap_partners .swiper-container', {
  slidesPerView: 4,
  slidesPerGroup: 4,
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
  // pagination: {
  //   el: '.wrap_partners  .swiper-pagination',
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: '.wrap_partners .swiper-button-next',
  //   prevEl: '.wrap_partners .swiper-button-prev',
  // },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
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
/// manshet slider ///
var galleryThumbs = new Swiper('.manshet_appartment .gallery-thumbs', {
  spaceBetween: 12,
  slidesPerView: 4,
  loop: true,
  allowTouchMove: true,
  freeMode: false,
  loopedSlides: 40, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.manshet_appartment .swiper-button-next',
    prevEl: '.manshet_appartment .swiper-button-prev',
  },
  speed: 2200,
  autoplay: {
    delay: 2200,
    slideSpeed: 2200,
    disableOnInteraction: false,
  },
  breakpoints: {
    800: {
      spaceBetween: 10,
    },
    560: {
      spaceBetween: 5,
    }
  }
});
var galleryTop = new Swiper('.manshet_appartment .gallery-top', {
  spaceBetween: 12,
  loop: true,
  loopedSlides: 40, //looped slides should be the same
  thumbs: {
    swiper: galleryThumbs,
  },
  effect: 'fade',
});
$('div.manshet_appartment .swiper-slide').on('click', function (e) {
  e.preventDefault();
  galleryTop.slideTo($(this).index());
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
  /// end manshet slider ///