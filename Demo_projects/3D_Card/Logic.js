$(document).ready(function () {
  $("#title").fadeIn(500).slideDown();
  
  setTimeout(function () {
    $(".menu").fadeIn(500);
  }, 500);
});
function loadContent(type) {
  $.ajax({
    url: type + ".html",
    success: function (data) {
      $("#content").hide().html(data).fadeIn(500);
    }
  });
}