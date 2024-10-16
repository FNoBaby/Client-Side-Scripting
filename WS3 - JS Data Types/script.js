function sum(){
    var sum = 0;
    for(let i = 0; i < 10; i++){
        var num = Math.random() * 10;
        sum += num;
    }

    alert("Total Sum is: " + sum);
}

function multiply(){
    var product = 1;
    for(let i = 0; i < 10; i++){
        var num = Math.random() * 10;
        product *= num;
    }

    alert("Total Multiplication is: " + product);
}

function typeOf1(){
    alert("Type of \"36.5\" is: " + typeof 36.5);
}

function typeOf2(){
    alert("Type of \"dog\" is: " + typeof "dog");
}

function typeOf3(){
    alert("Type of \"true\" is: " + typeof true);
}   

function typeOf4(){
    alert("Is 'kilt' equal to 'Kilt'?" + ("kilt".toLowerCase() == "Kilt".toLowerCase()));
}
