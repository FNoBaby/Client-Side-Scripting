function showDateTime(){
    var dt = new Date();

    document.getElementById("datetime").innerHTML += dt;
}

function add(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var result = num1 + num2;

    document.getElementById("addition").innerHTML = result;
}

function subtract(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var result = num1 - num2;
    result = result.toFixed(2);

    document.getElementById("subtract").innerHTML = result;
}

function multiply(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var result = num1 * num2;
    result = result.toFixed(2);

    document.getElementById("multiply").innerHTML = result;
}

function divide(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var result = num1 / num2;
    result = result.toFixed(2);

    document.getElementById("divide").innerHTML = result;
}

function power(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var result = Math.pow(num1, num2);
    result = result.toFixed(2);

    document.getElementById("power").innerHTML = result;
}

function modulus(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var result = num1 % num2;
    result = result.toFixed(2);

    document.getElementById("modulus").innerHTML = result;
}

function area(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var result = 0.5 * num1 * num2;
    result = result.toFixed(2);

    document.getElementById("area").innerHTML = result;
}

function squarePerimeter(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var result = 2 * (num1 + num2);
    result = result.toFixed(2);

    document.getElementById("squarePerimeter").innerHTML = result;
}