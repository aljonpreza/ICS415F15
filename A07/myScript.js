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



/* validateForm()
 * This function will check all values of the given inputs.
 * If there are no inputs, the input box will turn red and an error
 * will be printed on the top of the form.
 * If password and password confirmation are not the same, it will state so.
 */
function validateForm() {
  var vname = document.forms["myForm"]["name"].value;
  var vemail = document.forms["myForm"]["email"].value;
  var vpass = document.forms["myForm"]["password"].value;
  var vconf = document.forms["myForm"]["confirm"].value;
  var isWrong = [];
  var isCorrect = 1;
  var validConf = 1;


  if (vname == null || vname == "") {
    document.getElementById("username").style.background = "#FF1111";
    isCorrect = 0;
    isWrong.push("name");
  }
  else {
    document.getElementById("username").style.background = "white";
  }

  if (vemail == null || vemail == "") {
    document.getElementById("email").style.background = "#FF1111";
    isCorrect = 0;
    isWrong.push("email");
  }
  else {
    document.getElementById("email").style.background = "white";
  }

  if (vpass == null || vpass == "") {
    document.getElementById("password").style.background = "#FF1111";
    isCorrect = 0;
    isWrong.push("password");
  }
  else {
    document.getElementById("password").style.background = "white";
  }

  if (vconf == null || vconf == "") {
    document.getElementById("confirm").style.background = "#FF1111";
    isCorrect = 0;
    isWrong.push("confirmation password");
  }
  else {
    document.getElementById("confirm").style.background = "white";
  }

  if (vpass !== vconf) {
    isCorrect = 0;
    document.getElementById("password").style.background = "#FF1111";
    document.getElementById("confirm").style.background = "#FF1111";
    validConf = 0;
  }

  if (isCorrect === 0) {
      var isWrongString = isWrong.join(', ');
      document.getElementById("error").style.padding = "3px";
      document.getElementById("error").innerHTML = '\<strong><span style="color: #FF9900">ERROR:</span></strong> Please fill in the following: ' + isWrongString;

    if (validConf === 0) {
      document.getElementById("error").innerHTML += '\<br/>Both password inputs must be the same!';
    }
    return false;
  }

  else {
    return true;
  }
}