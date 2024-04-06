var menuIcon = document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var container = document.querySelector(".container")


menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}

function buttonClicked(){
    var button1 = document.getElementById("myButton1")
    if (button1.value=="Subscribe") {
        button1.value = "Subscribed";
    }
    else {
        button1.value = "Subscribe";
    }
}
