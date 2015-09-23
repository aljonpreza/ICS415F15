/**
 * Created by aljonp on 9/23/15.
 */
$(document).ready(function() {
  $("#answer1").hide();
  $("#answer2").hide();

  $("#question1").click(function() {
    $("#answer1").toggle();
  });

  $("#question2").click(function() {
    $("#answer2").toggle();
    $("#answer2").load("answer2.txt");
  });



});