/**
 * Created by aljonp on 9/18/15.
 */

/* myFunction(elem)
 * elem = element whose class names will be printed
 *
 * This function will print all class names of a given element in an array.
 */
function myFunction(elem) {
  // Checks whether the parameter is a string.
  if (typeof elem !== 'string') {
    console.log("ERROR: Parameter takes a string.");
  }

  else {
    elem = elem.toUpperCase();
    var elength = document.getElementsByTagName(elem).length;
    var elements = [];

    // Splits all the class names in a given element and puts them into one array.
    for (var i = 0; i < elength; i++) {
      var elemsplit = document.getElementsByTagName(elem)[i].className.split(" ");
      elements = elements.concat(elemsplit);
    }

    // Checks whether there are no classes and prints all class names if there are.
    if (elements.length === 0) {
      console.log("ERROR: There are no classes for element: " + elem);
    }
    else {
      console.log("This HTML file contains the element, " + elem + ", with classes: ");
      console.log(elements);
    }
  }
}

/* addClass(elem, className)
 * elem = element whose class names will be modified
 * className = the new class to be added
 *
 * This function will add the class names to a given element.
 * This function will also check for duplicated and only add when there are no duplicates.
 */
function addClass(elem, className) {
  var isChanged = 1; // Variable to check whether a class name has been added.
  if ( (typeof elem !== 'string') || (typeof className !== 'string')) {
    console.log("ERROR: Both parameters must be strings.");
  }
  else {
    elem = elem.toUpperCase();
    var allelem = document.getElementsByTagName(elem);
    var elength = document.getElementsByTagName(elem).length;

    // Splits all class names and checks whether the class name is already in the element.
    for (var i = 0; i < elength; i++) {
      var flag = 1;
      var elemsplit = document.getElementsByTagName(elem)[i].className.split(" ");
      for (var j = 0; j < elemsplit.length; j++) {

        // If a class name is already in the element, flip flag.
        if (elemsplit[j] === className) {
          flag = 0;
        }
      }

      // If flag has been changed (remains 1), it will add the new class name.
      if (flag === 1) {
        isChanged = 0;
        allelem[i].className += ' ' + className;
      }
    }

    // Checks whether all classes has been modified, will print if not.
    if (isChanged === 0) {
      console.log("\"" + className + "\"" + " has been successfully added to all elements: " + elem);
    }
    else {
      console.log("ERROR: All elements, " + elem + ", already has the class name: " + className);
    }
  }
}

/* getVariable(variable)
 * variable = Variable to search for input
 *
 * This is a helper function for validateForm that will grab the input of a given variable.
 */
function getVariable(variable) {
  if (typeof variable !== 'string') {
    console.log("ERROR: Parameter only accept string variables.");
  }
  var url = window.location.search.substring(1);
  url = url.replace(/%E2%80%9D/g, "");
  var vars = url.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      pair[1] = pair[1].replace(/\+/g, " ");
      return decodeURIComponent(pair[1]);
    }
  }
  console.log('ERROR: Variable %s not found', variable);
}

function validateForm() {
  //document.writeln(getVariable('name'));
  //document.writeln(getVariable('email'));
  //document.writeln(getVariable('password'));
  //document.writeln(getVariable('confirm'));

  var name = getVariable('name');
  var email = getVariable('email');
  var password = getVariable('password');
  var confirm = getVariable('confirm');

}