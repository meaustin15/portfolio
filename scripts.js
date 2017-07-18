$(document).ready(function(){

    $('#contactForm').on('submit', submitContactForm);
    

});

function raiseCurtain() {
    var curtain = document.getElementsByClassName("curtain");
    curtain[0].classList.add("raise");
}

$('#contact-submit').on('click', function() {
    $('audio').get(0).play();
});

function submitContactForm(){
    event.preventDefault();
    var x = document.forms["contactForm"]["email"].value;
    if (x== ""){
        alert("Email must be filled out");
        return false;
    } else {
        $("#contactForm").slideUp();
        $("#success").slideDown();
        $('audio').get(0).play();
        
             //  alert("Thank you for submitting the form");
    }
}

$('apc').mouseenter(function () {
    $(this).css({border: '0 solid red'}).animate({
        borderWidth: 10
    }, 500);
    }).mouseleave(function () {
     $(this).animate({
        borderWidth: 0
    }, 500);
});



$("project1").on('hover', function(){
    consolelog
 $(this).css({"border-color": "#C1E0FF", 
             "border-width":"1px", 
             "border-style":"solid"});
});

 $(this).addClass('borderClass'); $(this).removeClass('borderClass');


$("#apc")
  .each(function(i) {
    if (i != 0) {
      $("#select")
        .clone()
        .attr("id", "images/" + i)
        .appendTo($(this).parent());
    }
    $(this).data("beeper", i);
  })
  .mouseenter(function() {
    $("#beep-two" + $(this).data("beeper"))[0].play();
  });
$("#beep-two").attr("id", "beep-two0");