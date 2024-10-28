function confirmColour() {
  var color = document.getElementById("colorInput").value;
  if (color != null) {
    document.body.style.backgroundColor = color;
    alert("You chose colour code: " + color);
  } else {
    alert("Please select a color");
  }

  // using switch

  //   switch (color) {
  //     case null:
  //       alert("Please select a color");
  //       break;
  //     default:
  //       document.body.style.backgroundColor = color;
  //       alert("You chose colour code");
  //   }
}

function confirmLanguage() {
  // .querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.
  // If no matches are found, null is returned.
  // .checked returns true if the radio button is checked; otherwise, false.
  // .id returns the id of the selected radio button.
  var language = document.querySelector("input[name='language']:checked").id;

  //using if else

  //   if (language == "english") {
  //     alert("You chose English");
  //     document.getElementById("header").innerHTML = "Welcome to Malta!";
  //     document.getElementById("paragraph").innerHTML =
  //       "The capital city of Malta is Valletta.";
  //   } else if (language == "maltese") {
  //     alert("You chose Maltese");
  //     document.getElementById("header").innerHTML = "Merħba f'Malta!";
  //     document.getElementById("paragraph").innerHTML =
  //       "Il-kapitali ta' Malta hija Valletta.";
  //   } else if (language == "italian") {
  //     alert("You chose Italian");
  //     document.getElementById("header").innerHTML = "Benvenuti a Malta!";
  //     document.getElementById("paragraph").innerHTML =
  //       "La capitale di Malta è La Valletta.";
  //   } else {
  //     alert("Please select a language");
  //   }

  // using switch

  switch (language) {
    case "english":
      alert("You chose English");
      document.getElementById("header").innerHTML = "Welcome to Malta!";
      document.getElementById("paragraph").innerHTML =
        "The capital city of Malta is Valletta.";
      break;
    case "maltese":
      alert("You chose Maltese");
      document.getElementById("header").innerHTML = "Merħba f'Malta!";
      document.getElementById("paragraph").innerHTML =
        "Il-kapitali ta' Malta hija Valletta.";
      break;
    default:
      alert("You chose Italian");
      document.getElementById("header").innerHTML = "Benvenuti a Malta!";
      document.getElementById("paragraph").innerHTML =
        "La capitale di Malta è La Valletta.";
  }
}
