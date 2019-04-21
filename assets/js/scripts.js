$(document).ready(function() {

    // Navigation Time-Job Function
    let currentTime = new Date();

    let currentOffset = currentTime.getTimezoneOffset();
    
    let ISTOffset = 330;   // IST offset UTC +5:30 
    
    let ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
    
    // ISTTime now represents the time in IST coordinates
    
    let hoursIST = ISTTime.getHours()
    let minutesIST = ISTTime.getMinutes()
    
    console.log( hoursIST + ":" + minutesIST + " ");
    if (hoursIST > 1 && hoursIST<7) {
        console.log( "on Snooze");
    }
    if (hoursIST > 7 && hoursIST<8) {
        console.log( "having Breakfast");
    }
    if (hoursIST > 9 && hoursIST<11) {
        console.log( "working on Sideprojects");
    }
    if (hoursIST > 11 && hoursIST<13) {
        console.log( "on Lunch Break");
    }
    if (hoursIST > 13 && hoursIST<19) {
        console.log( "Crafting Interfaces");
    }
    if (hoursIST > 19 && hoursIST<21) {
        console.log( "Listening to Podcasts");
    }
    if (hoursIST > 21 && hoursIST<23) {
        console.log( "stuffing Dinner");
    }
    if (hoursIST > 23) {
        console.log( "playing Call of Duty");
    }
    // Ventures Hover Image Replacement
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