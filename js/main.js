$(function () {
  $(window).on("scroll", function () {
    var sct = $(window).scrollTop();
    if (sct > 100) {
      $(".header").addClass("on");
    } else {
      $("header").removeClass("on");
    }
  });
});
