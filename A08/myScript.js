/**
 * Created by aljonp on 9/23/15.
 */


$(document).ready(function() {
  $(".answer").hide();
  $(".up").hide();

  $(".question").click(function() {
    $(this).next(".answer").slideToggle(0);
    $(this).find(".up, .down").toggle();

  });
});


function doStuff() {
  var urlname = document.getElementById("someInput");
  var name = urlname.value;

 $(document).ready(function() {
   $('#result').hide();


   $('#result').load(name, function() {
     var length = $("a[href]").length;
     document.getElementById("number").innerHTML = "Your website: \"" + name + "\" has a total of " + length + " links.";
   });
 });
}