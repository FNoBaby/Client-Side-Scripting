function convertToFerenheit() {
    let celciusInput = document.getElementById("degrees").value;
    document.getElementById("farenheit").value = ((parseInt(celciusInput) * 9) / 5 + 32).toFixed(2);
}

function convertToCelsius() {
  var fernheit = document.getElementById("farenheit").value;
  document.getElementById("degrees").value = (((parseInt(fernheit) - 32) * 5) / 9).toFixed(2);
}
