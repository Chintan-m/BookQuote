/*function toggle_cart() {
  var x = document.getElementById("my-cart");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
*/
$(document).ready(function(){
  $("#toggle_cart").click(function(){
    $("#my-cart").slideToggle("slow");
  });
});