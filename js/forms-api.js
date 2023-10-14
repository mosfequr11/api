// using checkValidity() function
function myFunction() {
  const inputObj = document.getElementById("id1");
  if (!inputObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inputObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Input OK";
  }
}

// using setCustomValidity() function style1
function inputValidation() {
  const inputObj = document.getElementById("id1");
  if (inputObj.validity.rangeOverflow) {
    document.getElementById("demo").innerHTML = "Input range is Overflow";
  } else if (inputObj.validity.rangeUnderflow) {
    document.getElementById("demo").innerHTML = "Input range is Underflow";
  } else if (inputObj.validity.valueMissing) {
    document.getElementById("demo").innerHTML = "Input value is Missing";
  } else {
    document.getElementById("demo").innerHTML = "Input OK";
  }
}

// using setCustomValidity() function style2
function inputValidationtwo() {
  const inputObj = document.getElementById("id1");
  if (inputObj.validity.rangeOverflow) {
    console.log("Input range is Overflow");
    inputObj.setCustomValidity("Input range is Overflow");
  } else if (inputObj.validity.rangeUnderflow) {
    inputObj.setCustomValidity("Input range is Underflow");
  } else if (inputObj.validity.valueMissing) {
    inputObj.setCustomValidity("Input value is Missing");
  } else {
    document.getElementById("demo").innerHTML = "Input OK";
  }
}
