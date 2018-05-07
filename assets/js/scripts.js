$(document).ready(function () {

	function some() {

		document.body.scrollTop = document.documentElement.scrollTop = 0;
		$("body").addClass("no-scroll");
		$("#signupmodal").removeClass("hide"); 
		$("#signupmodal").addClass("show-modal"); 
		$('#signup').find('[name="FNAME"]').focus();
		$('#signup').find('[name="EMAIL"]').val(x);
		$('#signup').find('[name="MMERGE3"]').val(company);
		$(".form-container").on('click', function(e) {
			e.stopPropagation();
		});	
		$("#signupmodal").click(function(){ 
			$("#signupmodal").addClass("hide"); 
			$("#signupmodal").removeClass("show-modal"); 
			$("body").removeClass("no-scroll");
		});
	};

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

	// Desktop - GIF on Hover
	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	const mobileLink = '<a href="https://dribbble.com/itsKshitij" class="action">BROWSE MY PORTFOLIO ON DRIBBBLE</a>';

	jQuery(document).ready(function($){
		if(!isMobile) {
			$('body').replaceWith("<div id="mobile" class="mobile"><div class="container mobile__container"><div class="row"><div class="col-xs-12"><div class="responsive-image"><img src="/assets/img/responsive.png" alt="You shall not pass"></div><div class="title">Mobile Website in Development</div><div class="desc">You can browse the desktop version or comeback again in june 2018</div>"+ mobileLink+ "</div></div></div></div> ");
			console.log('replaced');
		}
	});

});

	function some() {

		document.body.scrollTop = document.documentElement.scrollTop = 0;
		$("body").addClass("no-scroll");
		$("#signupmodal").removeClass("hide"); 
		$("#signupmodal").addClass("show-modal"); 
		$('#signup').find('[name="FNAME"]').focus();
		$('#signup').find('[name="EMAIL"]').val(x);
		$('#signup').find('[name="MMERGE3"]').val(company);
		$(".form-container").on('click', function(e) {
			e.stopPropagation();
		});	
		$("#signupmodal").click(function(){ 
			$("#signupmodal").addClass("hide"); 
			$("#signupmodal").removeClass("show-modal"); 
			$("body").removeClass("no-scroll");
		});
	};

