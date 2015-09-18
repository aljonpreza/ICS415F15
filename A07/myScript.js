/**
 * Created by aljonp on 9/18/15.
 */
function myFunction(elem) {
  if (typeof elem !== 'string') {
    alert("ERROR: Must be an element.");
  }
  else {
    elem = elem.toUpperCase();
    var elength = document.getElementsByTagName(elem).length;
    var elements = [];
    for (var i = 0; i < elength; i++) {
      var elemsplit = document.getElementsByTagName(elem)[i].className.split(" ");
      elements = elements.concat(elemsplit);
    }

    document.write("This HTML file contains the element, " + elem + ", with classes: ");
    for (var i = 0; i < elements.length; i++) {
      document.write(elements[i] + " ");
    }
  }

}