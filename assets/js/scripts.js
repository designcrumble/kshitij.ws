$('.body-container').hide(); // hide body-container while rendering

$(document).ready(function(){ // When page is fully loaded...



    // Preloader
    $('.preloader').hide(); // hide preloader
    $('.body-container').show(); // and show body-container

	// Scroll Reveal
	window.sr = ScrollReveal();

	function divreveal() {
	  sr.reveal('div', { container: sections, duration: 2000, scale: 1, distance: '30px' });
	  // sr.reveal('div', { container: footer, duration: 2000, scale: 1, distance: '30px' });
	  // ds.reveal('div', { duration: 2000, scale: 1, distance: '30px' });
    }
    sr.reveal('section div', {duration: 1000, scale: 1, distance: '30px', viewFactor: 0.05, });


    // CurrentActivity Function every 3 seconds
        // ToDo: Play  a sound when activity changes. Add Icon before currently
        let currentTime = new Date();

        let currentOffset = currentTime.getTimezoneOffset();
        
        let ISTOffset = 330;   // IST offset UTC +5:30 
        
        let ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
        
        // ISTTime now represents the time in IST coordinates
        
        let hoursIST = ISTTime.getHours()
        let minutesIST = ISTTime.getMinutes()
        let secondsIST = ISTTime.getSeconds()

        setInterval(function () {
            // set current time
            $('#currentHour').text(hoursIST );
            $('#currentMinutes').text(minutesIST);

            let x = "Crafting Interfaces"
            let iconDest = "/assets/img/icons/activity-crafting-ui.svg"

            if (hoursIST > 1) {
                x = "Sleeping."
                iconDest = "/assets/img/icons/activity-sleeping.svg"
            }
            if (hoursIST > 7 ) {
                x = "Having Breakfast."
                iconDest = "/assets/img/icons/activity-eating.svg"
            }
            if (hoursIST > 9) {
                x = "working on Sideprojects."
                iconDest = "/assets/img/icons/activity--sideprojects.svg"
            }
            if (hoursIST > 11 ) {
                x = "on Lunch Break."
                iconDest = "/assets/img/icons/activity-eating.svg"
            }
            if (hoursIST > 13) {
                x = "Crafting Interfaces."
                iconDest = "/assets/img/icons/activity-crafting-ui.svg"
            }
            if (hoursIST > 19 ) {
                x = "Listening to Skrillex."
                iconDest = "/assets/img/icons/activity-music.svg"
            }
            if (hoursIST > 21) {
                x = "Stuffing Dinner."
                iconDest = "/assets/img/icons/activity-eating.svg"
            }
            if (hoursIST > 23 ) {
                x = "Playing Call of Duty."
                iconDest = "/assets/img/icons/activity-gaming.svg"
            }

            if ($('#currentActivity').text != x) {
                $('#currentActivity').text(x);
            }
            $( '#currentActivityIcon' ).attr("src",iconDest);
        }, 3000)

    // Ventures Hover Image Replacement
    // ToDo: Animate in the elements
    // $(".ventures #venture-sideway").hover(function() {
    //     $( '.venture-graphic img' ).attr("src","/assets/img/ventures/sideway.png");
    //     $( '.venture-graphic img' ).css('translateY',"-50px");
    // });
    // $(".ventures #venture-bolt").hover(function() {
    //     $( '.venture-graphic' ).css({
    //         'opacity': 0,
    //     });
    //     $( '.venture-graphic img' ).attr("src","/assets/img/ventures/bolt.png");
    //     $( '.venture-graphic' ).addClass("anim-fade-in");
    // });
    // $(".ventures #venture-flexplates").hover(function() {
    //     $( '.venture-graphic img' ).attr("src","/assets/img/ventures/flexplates.png");
    //     $( '.venture-graphic img' ).css('translateY',"-50px");
    // });
    // $(".ventures #venture-figmafreebies").hover(function() {
    //     $( '.venture-graphic img' ).attr("src","/assets/img/ventures/figmafreebies.png");
    //     $( '.venture-graphic img' ).css('translateY',"-50px");
    // });


 });

// Header Hover
// $("#indexIntro").mouseover(function() {
//     $("#indexIntro").text("Freelance Digital Designer looking to become Nomad. I like minimal and functional design.");
// });
// $("#indexIntro").mouseout(function() {
//     $("#indexIntro").text("Jobless Digital Designer looking to become Homeless. I like rad gradients and useless shapes. Just Kidding.");
// });
//Snackbar - Notification
function showSnackbar(value) {

    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    x.innerHTML = value;
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

  
  // Snackbar
  function showSnackbar(value) {

    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    x.innerHTML = value;
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// onResize animation
$(window).resize(function() {

});


//Navigation 
$( ".hamburger-menu" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
});
    
// Copy to Clipboard
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    showSnackbar('Email Address Copied to Clipboard');
  }
