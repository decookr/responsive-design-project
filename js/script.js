// sidenav toggle open/close
$(document).ready(function () {
    $(".toggle-sidenav").click(function () {
        $("#side-nav-wrapper, #main").toggleClass("open");
    });
});

// menu toggle open/close
$(document).ready(function () {
    $(".sub-menu-header").click(function () {
        $(this).parent().toggleClass("open");
    });
});