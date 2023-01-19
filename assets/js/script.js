$(document).ready(function () {
  $(".mine-navbar .mobileMenu ul .has-chiled").click(function () {
    $(this).children(".child-ul").slideToggle();
  });

  $(".mine-navbar .open-menu i").click(function () {
    $(".mobileMenu").addClass("right-0");
    $("body").addClass("body-over");
  });

  $(".mine-navbar .mobileMenu .exit-icon i").click(function () {
    $(".mobileMenu").removeClass("right-0");
    $("body").removeClass("body-over");
  });
});
