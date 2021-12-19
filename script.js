/* javascript taget fra Youtube til burger menu – https://www.youtube.com/watch?v=oYRda7UtuhA&t=1337s&ab_channel=EasyTutorials */


/* skifter mellem at vise / skjule navigationens links når brugeren klikker på 
burgerens ikoner */

var navLinks = document.getElementById("navLinks");


function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}