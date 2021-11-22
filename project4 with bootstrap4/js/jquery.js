$(function () {
  // slider height
  var winheight = $(window).height(),
    uppheight = $(".upper-bar").innerHeight(),
    navheight = $(".navbar").innerHeight();

  $(".slider,.carousel-item").height(winheight - (uppheight + navheight));

  // feature work
  $(".featured-work ul li").on("click", function () {
    $(this).addClass("actve").siblings().removeClass("active");
  });

  // mixItUp in featured work
  $(".shuffle-images").mixItUp();

  //
});
