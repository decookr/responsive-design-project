// sidenav toggle open/close
$(document).ready(function () {
    $(".toggle-sidenav").click(function () {
        $("#side-nav-wrapper, #main, body").toggleClass("open");
    });
});

// menu toggle open/close
$(document).ready(function () {
    $(".toggle-collapse").click(function () {
        $(this).parent().toggleClass("open");
    });
});


