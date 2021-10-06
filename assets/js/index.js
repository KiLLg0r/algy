var nav = $("nav");
var navCollapse = $(".navbar-collapse");
var line = $(".line");
var hamburgerMenu = $(".hamburger-menu");

activeLink();
window.onresize = activeLink;

nav.find(".navbar-collapse .links li a").click(function (e) {
  e.preventDefault();
  if (!$(this).hasClass("active")) {
    nav.find(".navbar-collapse .links li a").removeClass("active");
    $(this).addClass("active");
    activeLink();
  }
});

function activeLink() {
  var active = nav.find(".active");
  var pos = 0;
  var wid = 0;

  if (active.length) {
    pos = active.position().left;
    wid = active.width();
    line.css({
      left: pos,
      width: wid,
    });
  }
}

hamburgerMenu.click(function () {
  navCollapse.toggleClass("active");
  if (hamburgerMenu.hasClass("bx-menu")) {
    hamburgerMenu.addClass("bx-menu-alt-right").removeClass("bx-menu");
    $(".brand").css("margin-top", "0.25rem");
  } else {
    hamburgerMenu.addClass("bx-menu").removeClass("bx-menu-alt-right");
    $(".brand").css("margin-top", "0");
  }
});
