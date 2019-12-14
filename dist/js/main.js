$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".header").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
  } 
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".header-content__contacts_phone-link").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header-content__contacts_phone-link").removeClass("active");
  }
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".header-content__logo").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header-content__logo").removeClass("active");
  }
});


