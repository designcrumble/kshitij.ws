let slide = 1;
let anchor = '<h6>Since your content describes a process,<br/> let’s try <span> another layout </span>.</h6><button onclick="changeSlide(slide+1); return false;" class="btn__convert btn btn-primary">Yes, lets try it</button>';
let final = '<h6>Boom. Did you know that using visuals to engage customers <br /> makes you<span> 2-3x </span>more likely to convert them?</h6><a id="signupBtn" href="#" class="btn__convert btn btn-secondary">GET EARLY ACCESS</a>';
let visual = '<h6>Nice, you just saved <span>10-20 hours</span> a week!<br/> No more fiddling with formatting.</h6> <button onclick="changeSlide(slide+1); return false;" class="btn__convert btn btn-primary">Make It Better</button>';
// Note : Replace If Else with Swtich Case for better Optimization.

function changeSlide(slideNumber) {
	// document.getElementById("slideshow").src = `../assets/img/slides/slide${slideNumber}.png`;

	$('#slideshow'	).fadeIn( "slow", function() {
		this.src = `../assets/img/slides/slide${slideNumber}.png`;
    // Animation complete
	});
	if (slideNumber === 2) {
		console.log(slideNumber);
		document.getElementById("slideButton").innerHTML = "Transform My Text";
		$('.guy_illustration').animate({
		  opacity: .2,
		});
		$('.layouts_illustration').animate({
		  opacity: .2,
		});
		$('.customer_illustration').animate({
		  opacity: .2,
		});
		slide = slide + 1;
	}

	if (slideNumber === 3) {
		console.log(slideNumber);
		document.getElementById("slideaction").innerHTML = visual;
		$('.guy_illustration').animate({
		  opacity: 1,
		});
		slide = slide + 1;
	}

	if (slideNumber === 4) {
		console.log(slideNumber);
		document.getElementById("slideaction").innerHTML = anchor;
		$('.layouts_illustration').animate({
		  opacity: 1,
		});
		slide = slide + 1;
	}

	if (slideNumber === 5) {
		console.log(slideNumber);
		document.getElementById("slideaction").innerHTML = final;
		$('.customer_illustration').animate({
		  opacity: 1,
		});
		// Modal

		// Get the modal
		let modal = document.getElementById('demoSignup');

		// Get the button that opens the modal
		let btn = document.getElementById("signupBtn");

		// Get the <span> element that closes the modal
		let span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal 
		btn.onclick = function() {
		    modal.style.display = "flex";
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		    modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}		
		console.clear();
	}

	return false;
}



// Modal

// Get the modal
let modal = document.getElementById('demoSignup');

// Get the button that opens the modal
let btn = document.getElementById("signupBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





$(document).ready(function () {
    $("#mc-embedded-subscribe").click(function () {
		let fname = $('#MMERGE3').val();
		let mail = $('#mce-EMAIL').val();
		let team = $('#mce-MMERGE1').val();
		let purpose = $('#mce-MMERGE2').val();

        if (fname.length == 0) {
            alert("Please input a first name");
        } else if (email.length == 0) {
            alert("Please input a last name");
        } else if (team.length == 0) {
            alert("Please input an age");
        }
        else if (purpose.length == 0) {
            alert("Please input a last name");
        }
    });
});
