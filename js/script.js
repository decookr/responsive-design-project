function openNav() {
    document.getElementById("main").style.transition = "0.3s";
    document.getElementById("main").style.position = "relative";
    document.getElementById("main").style.left = "-330px";
    document.getElementById("side-nav-wrapper").style.width = "330px";
}
function closeNav() {
    document.getElementById("side-nav-wrapper").style.width = "0px";
    document.getElementById("main").style.position = "relative";
    document.getElementById("main").style.left = "0px";        
}

// menu toggle open/close
$(document).ready(function () {
    $(".sub-menu-header").click(function () {
        $(this).parent().toggleClass("open");
    });
});