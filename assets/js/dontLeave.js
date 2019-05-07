var mouseX = 0;
var mouseY = 0;
var popupCounter = 0;
const byeArray = ["Bye", "Adiós", "وداعا", "अलविदा", "再见", "Adjö", "PA", "Tschüss", "doei", "Farvel", "tạm biệt"]
var span = $('#dontLeaveText');


loopMeNot = (span, array) => {
    // for ( var i=0; i < array.length; i++ ) {
    //     span.text(array[i]);
    //     pause(0.2);
    // }
    var index = 0;
    setInterval(function(){        
    $("#dontLeaveText").animate({
    transform: 'scale(0)',
    filter: 'blur(15px)'
    },function()
    {
       if(byeArray.length > index) {
        // var rand = byeArray[Math.floor(Math.random() * byeArray.length)];
        let rand = Math.floor(Math.random() * byeArray.length);
       $(this).text(byeArray[rand]).animate({
        transform: 'scale(1)',
        filter: 'blur(0px)'
       })
       index++; 
       }
       else
       index = 0;
    });
    },150);
}

// var rand = Math.floor(Math.random() * 4);
// document.getElementById("name").innerHTML = names[rand];
$('#dontLeave').hide();
document.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // document.getElementById("coordinates").innerHTML = "<br />X: " + e.clientX + "px<br />Y: " + e.clientY + "px";
    $('#dontLeave').hide();
});
$(document).mouseleave(function () {
    if (mouseY < 100) {
        if (popupCounter < 3) {
            // alert("Please don't close the tab!");
            $('#dontLeave').toggle();
            loopMeNot(span,byeArray);
        }
        popupCounter ++;
    }
    else {
        $('#dontLeave').hide();
    }
});