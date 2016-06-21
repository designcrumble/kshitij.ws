
//Isotope
$(window).load(function(){
        $(".portfolio-masonry").isotope({
            transitionDuration: '0.3s',
            itemSelector: ".selector"
        }), $(function() {
            var t = $(".portfolio-masonry").isotope({
                    itemSelector: ".item"
                }),
                e = {
                    numberGreaterThan50: function() {
                        var t = $(this).find(".number").text();
                        return parseInt(t, 10) > 50
                    },
                    ium: function() {
                        var t = $(this).find(".name").text();
                        return t.match(/ium$/)
                    }
                };
            $("#portfolio-sorting").on("click", "li", function() {
                var i = $(this).attr("data-filter");
                i = e[i] || i, t.isotope({
                    filter: i
                })
            }), $(".portfolio-sorting").each(function(t, e) {
                var i = $(e);
                i.on("click", "li", function() {
                    i.find(".active").removeClass("active"), $(this).addClass("active")
                })
            })
        });
});

// ScrollReveal Config

window.sr = ScrollReveal({reset:true});

// Customizing a reveal set
// sr.reveal( 'header', { duration: 1000 } );
sr.reveal( '.head-text', { duration: 2000 } );
sr.reveal('.scrollr', { duration: 2000 });
sr.reveal( '.btn', { duration: 2100 } );
sr.reveal( '.scroll-port', { duration: 2100 } );


    

//Navbar Config
$(window).scroll(function() {

    var screensize = $( window ).width();
    if(screensize>=768){
      var navbarColor = "255,255,255";//color attr for rgba
      var smallLogoHeight = $('.small-logo').height();
      var bigLogoHeight = $('.big-logo').height();
      var navbarHeight = $('.navbar').height(); 
      var logoContainer = $('.small-logo-container').height();

      var smallLogoEndPos = (navbarHeight/2)-(navbarHeight/5);
      var smallSpeed = (smallLogoHeight / bigLogoHeight)/5;
      
      var ySmall = ($(window).scrollTop() * smallSpeed); 
      
      var smallPadding = navbarHeight - ySmall;
      if (smallPadding > navbarHeight) { smallPadding = navbarHeight;  }
      if (smallPadding < smallLogoEndPos) { smallPadding = smallLogoEndPos; }
      if (smallPadding < 0) { smallPadding = 0; }
      
      $('.small-logo-container ').css({ "padding-top": smallPadding});
      
      var navOpacity = (ySmall / smallLogoHeight) / 2; 
      if  (navOpacity > 1) { navOpacity = 1; }
      if (navOpacity < 0 ) { navOpacity = 0; }
      var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
      $('.navbar').css({"background-color": navBackColor});
    }
    else{
        $('.navbar-collapse').css({"height": "12em;"});

        var navbarColor = "255,255,255";
        var navBackColor = 'rgb(' + navbarColor + ')';
        $('.navbar').css({"background-color": navBackColor});
    }
	  
  
});
// Active class
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

//DropDown Toggle
var screenwidth = $( window ).width();
if(screenwidth>=768){
    $('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
});
}
else{
    $(this).find('.dropdown-menu').css({"padding-right":"15px;"})
    $(this).find('.dropdown-menu').css({"background-color":"transparent;"})
}

// Slick Slider Settings

jQuery(function($) {
    var el, set, timeRemain, sliderContinue;


    // App
    var Application = {

        settings: {
            sliderAutoplaySpeed: 7000,
            sliderSpeed: 1200
        },

        elements: {
            slider: $('#slick'),
            slickAllThumbs: $('.slick-dots button'),
            slickActiveThumb: $('.slick-dots .slick-active button'),
            
        },

        init: function() {
            set = this.settings;
            el = this.elements;


            this.slider();
            
        },

        /**
         * Slider
         */
        slider: function() {

            el.slider.on('init', function() {
                $(this).find('.slick-dots button').text('');
                Application.dotsAnimation();
                
            });

            el.slider.slick({
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: set.sliderAutoplaySpeed,
                fade: false,
                speed: set.sliderSpeed,
                pauseOnHover: false,
                pauseOnDotsHover: true
            });

            $('.slick-dots').hover(
                function() {
                    var trackWidth = $('.slick-dots .slick-active button').width();
                    $('.slick-dots .slick-active button').stop().width(trackWidth);
                    el.slider.slick('slickPause');
                    clearTimeout(sliderContinue);
                },
                function() {
                    Application.dotsAnimation(timeRemain);
                    var trackWidth = $('.slick-dots .slick-active button').width();


                    sliderContinue = setTimeout(function() {
                        el.slider.slick('slickNext');
                        el.slider.slick('slickPlay');
                    }, timeRemain);
                }
            );

            el.slider.on('beforeChange', function() {
                $('.slick-dots button').stop().width(0);
            });

            el.slider.on('afterChange', function() {
                $('.slick-dots button').width(0);
                Application.dotsAnimation();
            });

        },

        /**
         *
         * @param remain {number}
         */

        dotsAnimation: function(remain) {

            if (remain) {
                var newDuration = remain;
            } else {
                var newDuration = set.sliderAutoplaySpeed;
            }

            $('.slick-dots .slick-active button').animate({ width: '100%' },
                {
                    duration: newDuration,
                    easing: 'linear',
                    step: function(now, fx) {
                        var timeCurrent = Math.round((now*set.sliderAutoplaySpeed)/100);
                        timeRemain = set.sliderAutoplaySpeed - timeCurrent;
                    }
                }
            );
        },

        

       

       

    };



    //Init
    Application.init();
    
  
    $(window).load(function() {
      $('.slick-slide .img--holder').height($(window).height());
    });
  
    $(window).resize(function() {
      $('.slick-slide .img--holder').height($(window).height());
    });

});


//Contact-Us-Slider
$(document).ready(function() {
  $("#slider-range-min").slider({
    range: "min",
    step: 100,
    value: 100,
    min: 0,
    max: 30000,
    slide: function(event, ui) {
      $("#amount").val("€" + ui.value);
    },
    change: function(event, ui) {
      if (ui.value === 0) {
        $("#amount").val("To be determined");
      } else if (ui.value === 30000) {
        $("#amount").val("€" + ui.value + " or more");
      } else {
        $("#amount").val("€" + $("#slider-range-min").slider("value"));
      }
    }
  });
  $("#amount").val("€" + $("#slider-range-min").slider("value"));

});

$(document).ready(function() {

  // -- autosize init --

  autosize($('textarea'));

});

//Home-Slideshow
$(document).ready(function(){
  
  $(".Modern-Slider").slick({
    autoplay:true,
    autoplaySpeed:10000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    cssEase:'linear',
   // fade:true,
    draggable:false,
    prevArrow:'<button class="PrevArrow"></button>',
    nextArrow:'<button class="NextArrow"></button>', 
  });
  
});