function raiseCurtain() {
    var curtain = document.getElementsByClassName("curtain");
    curtain[0].classList.add("raise");
}

function submitContactForm(){
    var x = document.forms["contactForm"]["email"].value;
    if (x== ""){
        alert("Email must be filled out");
        return false;
    } else {
        alert("Thank you for submitting the form");
    }
}