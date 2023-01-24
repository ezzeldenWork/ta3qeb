$(document).ready(function () {
  if ($("html").attr("dir") == "rtl") {
    var dir_lang = true;
  } else {
    var dir_lang = false;
  }

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

  // show-details-button

  $(
    ".services-details-section .services-details-box .services-details-box-content .button-box.show-details-button"
  ).click(function (e) {
    e.preventDefault();
    $(
      ".services-details-section .services-details-box .services-details-box-content"
    ).hide();
    console.log(1);
    $(
      ".services-details-section .services-details-box .services-details-box-form"
    ).show();
  });

  // company-slider
  $(".feedback-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    outHight: true,
    autoplaySpeed: 2000,
    rtl: dir_lang,
    infinite: false,
    dots: false,
    prevArrow:
      "<div class='circle-arrow time-left'><i class='fa fa-chevron-left'></i></div>",
    nextArrow:
      "<div class='circle-arrow time-right'><i class='fa fa-chevron-right'></i></div>",
  });
});
