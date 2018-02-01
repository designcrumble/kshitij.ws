$(document).ready(function () {

	// Scroll Reveal
	window.sr = ScrollReveal();

	var sections = document.getElementsByClassName('main');
	function divreveal() {
	  sr.reveal('div', { container: sections, duration: 2000, scale: 1, distance: '30px' });
	  // sr.reveal('div', { container: footer, duration: 2000, scale: 1, distance: '30px' });
	  // ds.reveal('div', { duration: 2000, scale: 1, distance: '30px' });
	}
	        sr.reveal('header', { duration: 1000, scale: 1, distance: '10px' });
	        sr.reveal('.hero', { duration: 1000, scale: 1, distance: '0px' });
	        sr.reveal('.hero h1', { duration: 3000, scale: 1.1, distance: '150px' });
	        sr.reveal('.hero h4', { duration: 3000, scale: 1.1, distance: '200px' });
	        sr.reveal('.hero-cta', { duration: 3000, scale: 1.1, distance: '250px' });
	        // sr.reveal('.main__description', { duration: 2000, scale: 1, distance: '80px' });
	        sr.reveal('.stick-mockup', { duration: 3000, scale: 1.2, distance: '100px' });
	        sr.reveal('.footer', { duration: 1000, scale: 1, distance: '30px' });
	        sr.reveal('section div', {duration: 1000, scale: 1, distance: '30px' });

  var stickVideo = document.getElementById('stickVideo');
  var playButton = document.getElementById('playButton');

  $('#stickVideo').click(function() {
    if (this.paused == false) {
        this.pause();
    } else {
        this.play();
    }
  });

  playButton.addEventListener('click', function () {
      if (stickVideo.paused) {
          if (stickVideo.requestFullscreen) {
              stickVideo.requestFullscreen();
          }
          else if (stickVideo.msRequestFullscreen) {
              stickVideo.msRequestFullscreen();
          }
          else if (stickVideo.mozRequestFullScreen) {
              stickVideo.mozRequestFullScreen();
          }
          else if (stickVideo.webkitRequestFullScreen) {
              stickVideo.webkitRequestFullScreen();
          }
          stickVideo.play();
      }
      else {
          stickVideo.pause();
      }
  }, false);


	// Desktop - GIF on Hover
	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

	jQuery(document).ready(function($){
	    if(!isMobile) {
			$(".gif").hover(
				function()
				{
					var src = $(this).attr("src");
					$(this).attr("src", src.replace(/\.png$/i, ".gif"));
				},
				function()
				{
					var src = $(this).attr("src");
					$(this).attr("src", src.replace(/\.gif$/i, ".png"));
			});
	    }
	    else {
	    	// var src = $(".gif").attr("src");
    		$(".gif--1").attr("src", $(".gif--1").attr("src").replace(/\.png$/i, ".gif"));
    		$(".gif--2").attr("src", $(".gif--2").attr("src").replace(/\.png$/i, ".gif"));
    		$(".gif--3").attr("src", $(".gif--3").attr("src").replace(/\.png$/i, ".gif"));
	    }
	});

	$("#mc-embedded-subscribe-form").submit(function(e){
			let fname = $('#mce-MMERGE3').val();
			let mail = $('#mce-EMAIL').val();
			let reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;

			if (reg.test(mail)){
			 	return 0;
			 }
			 else{
			 	$("label[for='mce-EMAIL']").css('color','red').text("Please Enter Your Work Email");
			 return false;
			 }

	        if (fname.length == 0) {
	            $("label[for='mce-MMERGE3']").css('color','red').text("Please Enter Your Name");
	        }
	        if (mail.length == 0) {
	        	$("label[for='mce-EMAIL']").css('color','red').text("Please Enter Your Work Email");
	        }
	        if (fname.length == 0 || mail.length == 0) {
		        return false;
	        }
	});


});
