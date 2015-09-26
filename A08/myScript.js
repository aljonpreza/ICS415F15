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


function doStuff()
{
  var nameElement = document.getElementById("someInput");
  var theName = nameElement.value;

  console.log(theName);

  $(document).ready(function() {
    document.getElementById("result").innerHTML = theName;
  });
}