$(document).ready(function () {
  // close document click

  // search box
  $(".nav-section .header-side-box .icon-box .search-icon i").click(function (
    e
  ) {
    e.stopPropagation();
    $(".nav-section .header-side-box .search-box").addClass("open-search");
  });
  $(".nav-section .header-side-box .search-box .close-search").click(function (
    e
  ) {
    e.stopPropagation();
    $(".nav-section .header-side-box .search-box").removeClass("open-search");
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
