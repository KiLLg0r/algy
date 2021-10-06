// $(document).ready(function () {
//   var form = document.querySelector(".search");
//   var formInput = document.querySelector("#searchField");
//   var button = document.querySelector("#searchButton");

//   formInput.click(function () {
//     var val = formInput.val();

//     $.ajax({
//       type: "POST",
//       url: "./php/search.php",
//       data: { searchItem: val },
//       dataType: "text",
//       success: function (data) {
//         $(".container").load("result.php").append(data);
//         document.location('result.php');
//       },
//       error: function (data) {
//         $(".container").append("ERROR");
//       },
//     });
//   });
// });

var nav = $("nav");
var line = $(".line");

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
