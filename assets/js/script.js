$(document).ready(function () {
  // close document click
  $(document).click(function () {
    $(".nav-section .header-side-box .search-box").slideUp();
  });
  // search box
  $(".nav-section .header-side-box .icon-box .search-icon i").click(function (
    e
  ) {
    e.stopPropagation();
    $(".nav-section .header-side-box .search-box").slideToggle();
  });
  // search box
  $(".nav-section .header-side-box .search-box").click(function (e) {
    e.stopPropagation();
  });
  // menu box
  $(".nav-section .header-side-box .icon-box .open-menu i").click(function (e) {
    e.stopPropagation();
    $(".nav-section .nav-box").fadeIn();
  });
  $(".nav-section .nav-box .close-menu").click(function (e) {
    e.stopPropagation();
    $(".nav-section .nav-box").fadeOut();
  });
});
