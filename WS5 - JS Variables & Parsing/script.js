let str1 = "99 bottles of beer on the wall. 99 bottles of beer.";
let str2 = "There are many people who are taking the bottles off the wall.";
let str3 = "3.50 Eur is the price of each beer.";
let str4 = "There are 26 bottles left on the wall. These bottles are from 3 different types of brands.";

function start() {
  let name = prompt("What is your name?");

  let id = prompt("What is your user ID?");

  alert("Your user ID is " + id + "and the type of data is" + typeof id);

  document.getElementById("heading").innerHTML =
    "Welcome to our page, " + name + " ("+ id +")"+ "!";

  document.getElementById("string1").innerHTML += str1;
  document.getElementById("string2").innerHTML += str2;
  document.getElementById("string3").innerHTML += str3;
  document.getElementById("string4").innerHTML += str4;
}

function parseString1ToInt() {
  let result = parseInt(str1);
  document.getElementById("result1").innerHTML = result;
}

function parseString2ToInt() {
  let result = parseInt(str2);
  document.getElementById("result2").innerHTML = result;
}

function parseString3ToInt() {
  let result = parseInt(str3);
  document.getElementById("result3").innerHTML = result;
}

function parseString3ToFloat() {
  let result = parseFloat(str3);
  document.getElementById("result3").innerHTML = result;
}

function parseString4ToInt() {
  let str4 =
    "There are 26 bottles left on the wall. These bottles are from 3 different types of brands.";
  document.getElementById("result4").innerHTML = parseInt(str4);
}
