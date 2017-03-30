// Initialize DatePicker
		    $(document).ready(function(){



		    	//Same Height For Divs



			    window.onload = function() {
					//home-page
					var x = ".thumbnail-home";

					function eqHeight(x){
						var heights = $(x).map(function() {
					        return $(this).height();
					    }).get(),

					    maxHeight = Math.max.apply(null, heights);

					    $(x).height(maxHeight);
					}

					eqHeight(x);
					x = ".thumbnails-trapyz";
					eqHeight(x);
					x = ".thumbnail-pricing";
					eqHeight(x);
					x= ".pri-thumbnail";
					eqHeight(x);
					x= ".contact-card";
					eqHeight(x);
					x= ".thumbnail-solutions";
					eqHeight(x);
					x=".thumbnail-sdk"
					eqHeight(x);
			    };
			    
		    	window.sr = ScrollReveal();
				sr.reveal('.page-head' , { duration: 400 });
				sr.reveal('.wow' , 300);
				sr.reveal('.wow-phone' , { origin: 'bottom', distance:'300px', duration: 1000,
				delay: 300, opacity:0, scale:1, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});


				//Navbar Config
				/**
				 * Listen to scroll to change header opacity class
				 */
				function checkScroll(){
				    var startY = $('.navbar').height(); //The point where the navbar changes in px

				    if($(window).scrollTop() > startY){
				        $('.navbar').addClass("scrolled");
				        $('.navbar-default .navbar-nav>li>a').addClass("navbar-dark");
				        $('.navbar-default .navbar-nav>li>a').addClass("button-dark");
				        $('.navbar-default .navbar-nav>li:last-child').css("button-dark");

				        $('.svg').attr('src', 'assets/logo-brand.svg');

				    }else{
				        $('.navbar').removeClass("scrolled");
				        $('.navbar-default .navbar-nav>li>a').removeClass("navbar-dark");
				        $('.navbar-default .navbar-nav>li>a').removeClass("button-dark");
				        $('.navbar-default .navbar-nav>li:last-child').removeClass("button-dark");
				        $('.svg').attr('src', 'assets/logo-white.svg');
				    }
				}

				if($('.navbar').length > 0){
				    $(window).on("scroll load resize", function(){
				        checkScroll();
				    });
				}

				
				//Typewriter Effect
				var TxtType = function(el, toRotate, period) {
			        this.toRotate = toRotate;
			        this.el = el;
			        this.loopNum = 0;
			        this.period = parseInt(period, 10) || 2000;
			        this.txt = '';
			        this.tick();
			        this.isDeleting = false;
			    };

			    TxtType.prototype.tick = function() {
			        var i = this.loopNum % this.toRotate.length;
			        var fullTxt = this.toRotate[i];

			        if (this.isDeleting) {
			        this.txt = fullTxt.substring(0, this.txt.length - 1);
			        } else {
			        this.txt = fullTxt.substring(0, this.txt.length + 1);
			        }

			        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

			        var that = this;
			        var delta = 200 - Math.random() * 100;

			        if (this.isDeleting) { delta /= 2; }

			        if (!this.isDeleting && this.txt === fullTxt) {
			        delta = this.period;
			        this.isDeleting = true;
			        } else if (this.isDeleting && this.txt === '') {
			        this.isDeleting = false;
			        this.loopNum++;
			        delta = 500;
			        }

			        setTimeout(function() {
			        that.tick();
			        }, delta);
			    };

			    window.onload = function() {
			        var elements = document.getElementsByClassName('typewrite');
			        for (var i=0; i<elements.length; i++) {
			            var toRotate = elements[i].getAttribute('data-type');
			            var period = elements[i].getAttribute('data-period');
			            if (toRotate) {
			              new TxtType(elements[i], JSON.parse(toRotate), period);
			            }
			        }
			        // INJECT CSS
			        var css = document.createElement("style");
			        css.type = "text/css";
			        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
			        document.body.appendChild(css);
			    };

	})
