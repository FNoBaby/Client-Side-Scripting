function loadedWebsite() {
  alert("Hello & Welcome to our website :) ");
}

function showContactForm() {
  document.getElementById("contactForm").style.display = "block";
  document.getElementById("contactText").style.display = "none";
}

function submitForm(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;

  if (name === "" || message === "") {
    alert("Please enter all inputs before submitting the form.");
  } else {
    var mailtoLink = "mailto:example@example.com?subject=Message from " + encodeURIComponent(name) + "&body=" + encodeURIComponent(message);
    window.location.href = mailtoLink;
  }
}
