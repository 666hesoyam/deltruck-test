// Import HTML template
$(function(){
    $("#included__header").load("template/header.html");
    $("#included__about-block").load("template/about-block.html"); 
    $("#included__footer").load("template/footer.html"); 
});

// Pop up

// subscribe
function throw_message_subscribe(str) {
    $("#subscribe__box").fadeIn(500).delay(6000).fadeOut(500);
}
// order
function throw_message_order(str) {
    $("#order__box").fadeIn(500).delay(6000).fadeOut(500);
}