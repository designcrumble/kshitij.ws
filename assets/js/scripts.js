$(document).ready(function() {

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
            console.log(hoursIST);
            let x = "Crafting Interfaces"
            let iconDest = "/assets/img/icons/defaultActivity.svg"

            if (hoursIST > 1) {
                x = "Sleeping."
                iconDest = "/assets/img/icons/activity--sleep.svg"
            }
            if (hoursIST > 7 ) {
                x = "Having Breakfast."
                iconDest = "/assets/img/icons/food.svg"
            }
            if (hoursIST > 9) {
                x = "working on Sideprojects."
                iconDest = "/assets/img/icons/activity--sideprojects.svg"
            }
            if (hoursIST > 11 ) {
                x = "on Lunch Break."
                iconDest = "/assets/img/icons/food.svg"
            }
            if (hoursIST > 13) {
                x = "Crafting Interfaces."
                iconDest = "/assets/img/icons/interfaces.svg"
            }
            if (hoursIST > 19 ) {
                x = "Listening to Podcasts."
                iconDest = "/assets/img/icons/activity--podcasts.svg"
            }
            if (hoursIST > 21) {
                x = "Stuffing Dinner."
                iconDest = "/assets/img/icons/food.svg"
            }
            if (hoursIST > 23 ) {
                x = "Playing Call of Duty."
                iconDest = "/assets/img/icons/activity--play.svg"
            }
            console.log(x);
            if ($('#currentActivity').text != x) {
                $('#currentActivity').text(x);
            }
            $( '#currentActivityIcon' ).attr("src",iconDest);
        }, 3000)

    // Ventures Hover Image Replacement
    // ToDo: Animate in the elements
    $(".ventures #venture-sideway").hover(function() {
        $( '.venture-graphic img' ).attr("src","/assets/img/ventures/sideway.png");
    });
    $(".ventures #venture-bolt").hover(function() {
        $( '.venture-graphic img' ).attr("src","/assets/img/ventures/bolt.png");
    });
    $(".ventures #venture-flexplates").hover(function() {
        $( '.venture-graphic img' ).attr("src","/assets/img/ventures/flexplates.png");
    });
    $(".ventures #venture-figmafreebies").hover(function() {
        $( '.venture-graphic img' ).attr("src","/assets/img/ventures/figmafreebies.png");
    });


 });