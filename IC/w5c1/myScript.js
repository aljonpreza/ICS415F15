/**
 * Created by aljonp on 9/21/15.
 */
$(document).ready(function(){
  var color = '#';
  var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
  color += letters[Math.floor(Math.random() * letters.length)];

  function resetColor() {
    color = '#';
    letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
    color += letters[Math.floor(Math.random() * letters.length)];
  }

  $(".col-md-3").mouseenter(function() {
    resetColor();
    $(this).css("background-color", color);
  });
});