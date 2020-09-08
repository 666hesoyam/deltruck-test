// Import HTML template
$(function(){
    $("#included__header").load("template/header.html");
    $("#included__header--mobile").load("template/header--mobile.html");
    $("#included__about-block").load("template/about-block.html"); 
    $("#included__footer").load("template/footer.html"); 
    $("#included__footer--mobile").load("template/footer--mobile.html"); 
});


// Pop up

// subscribe
function throw_message_subscribe(str) {
    $("#subscribe__box").fadeIn(500).delay(6000).fadeOut(500);
}

// request
function throw_message_request(str) {
    $("#request__box").fadeIn(500).delay(6000).fadeOut(500);
}
