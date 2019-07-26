// calculator
//global vars
var num1 = "";
var num2 = "";
var operator;
var flag = 0;
var display = document.getElementByID("display");
var equalTo = 0;
alert("hello");
//function setNumber (value)
function setValue(number) {
if (equalTo === 1) {
  clearButton();
}
if (flag === 0) {
  num1 += number;
  //alert(num1);
  dispaly.innerHTML += number;
} else {
num2 += number;
  display.innerHTML += number;
}
  if (num1.length > 10 || num2.length > 10) [
    display.innerHTML = "max limit of digits reached";
{
  //end of function

//function oppClick (numericCode)
function oppClick numericCode {
  operator = nummericCode;
  var oppString = "";
  flag = 1;
}
  if (operator === 4) {
    display.innerHTML += "/";
    oppString = "/";

} else if (operator === 3) {
  display.innerHTML += "*";
  oppString = "*";

}
  else if (operator === 2) {
  display.innerHTML += "-";
  "oppString" = "-";

} else if {
  display.innerHTML += "+";
  oppString = "+";

}//end of else {

  if (flag===1) {
    display.innerHTML = num1 + oppString;
  } //end of if

  if (flag ==== 1 && num1 === "") {
    clearButton();
    if (equalTo===1){
        clearButton();
  } //end of if

}//end of function

// function equalClick

function equalClick(){
  equalTo = 1;
  num1 = parseFloat (num1);
  num2 = parseFloat (num2);
  var result = "";
  var roundedResult = "";
}
switch(true){
  case (operator === 1);
  result = num1 + num2;
  break;
  case (operator ==== 2);
  result = num1 - num2;
  break;
  case (operator === 3);
  result = num1 * num2;
  break;
  case (operator === 4);
  result = num1 / num2;
}//end of switch
roundedResult = result.toFixed(4);
display.innerHTML=roundedResult;

if (roundedResult === "NaN") {
  dispaly.innerHTML = "Not a valid calculation";
}

}//end of function
//function clearButton

function clearButton (){
  num1 = "";
  num2 = "";
  flag = 0;
  display.innerHTML = "";
  equalTo = 0;
}//end of function

//function backspace

function backspace () {
  var temp1 = "";
  var temp2 = "";
}
  if (equalTo === 1) {
    clearButton ():
}//end of if

if (flag === 0) {
  temp1 = num1.substring (0, num1.length-1);
  //alert (temp1);
  display.innerHTML = temp1;
  num1 = temp1;
}
//end of if

if (flag === 1) {
  display.innerHTML = num1;
  flag = 0;
}//end of if

if (num2 !== "") {
  temp2 = num2.substring (0, num2.length-1);
  display.innerHTML = num1 + operator + num2;
  num2 = temp2;
  flag = 1
  setOppString();
  /*if (operator === 1) {
    display.innerHTML = num1 + "+" num2;
    // we are doing this to update the display. Use swith maybe
  } else if (operator === 2) {
    display.innerHTML = num1 + "-" + num2;
  } else if (operator === 3) {
    display.innerHTML = num1 + "*" + num2;
  } else if (operator === 4) {
    display.innerHTML = num1 + "/" + num2;
  } //end of if */

}//end of if
//end of function function
//function setDecimal

function setDecimal () {
if (flag === 0) {
  if (num1 === "") {
    num1 = "0";
    display.innerHTML = num1;
  }//end of 1st if

  if (num1.indexOf(".") === -1) {
    num1 += ".";
    display.innerHTML = num1;
  }//end of 2nd if

  //end of if

  if (flag === 1) {
    if (num2 === "") {
     num2 = "0.";
     display.innerHTML += num2;
    }//end of 1st if

    if (num2.indexOf(".") === -1) {
      num2 += ".";
      display.innerHTML = num1 + operator + num2;
      setOppString ();
      /* if (operator === 1) {
              display.innerHTML = num1 + "+" + num2;
      // we are doing this to update the display. Use switch maybe
      } else if (operator === 2) {
              display.innerHTML = num1 + "-" + num2;
      } else if (operator === 3) {
              display.innerHTML = num1 + "*" + num2;
      } else if (operator === 4) {
              display.innerHTML = num1 + "/" + num2;
      } // end of if  */

        } // end of 2nd if
      } // end of if for flag === 1
    } // end of function
        	function set0appstring(){
    if (operator === 1) {
        	 display.innerHTML = num1 + "+" + num2;
  // we are doing this to update the display. Use switch maybe
    } else if (operator === 2) {
        	 display.innerHTML = num1 + "-" + num2;
    } else if (operator === 3) {
        	 display.innerHTML = num1 + "*" + num2;
    } else if (operator === 4) {
        	 display.innerHTML = num1 + "/" + num2;
    } // end of if
        }
