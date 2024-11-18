var music = [];

function loadedWebsite(){
    music.push("Chasing Cars")
    music.push("Human")
    music.push("Mr. Brightside")
    music.push("Supermassive Black Hole")
    music.push("Twisted Transistor")
    music.push("Yellow")
    music.push("Seven Nation Army")

    var arrayCount = document.getElementById("arrayLength");
    arrayCount.innerHTML += music.length;
}

function lookup(){
    var musicSearch = document.getElementById("arrayLookup").value;
    var musicResult = document.getElementById("arrayValue");
    var indexType = document.querySelector('input[name="index"]:checked').value;

    musicResult.style.color = "black";
    musicResult.innerHTML = "Song: ";

    if (indexType === "1") {
        musicSearch -= 1;
    }

    if(musicSearch >= 0 && musicSearch < music.length){
        musicResult.innerHTML += music[musicSearch];
    }else{
        musicResult.style.color = "red";
        musicResult.innerHTML = "The item you were looking for is not in the list, kindly enter a number between " + (indexType === "1" ? 1 : 0) + " and " + (music.length - (indexType === "1" ? 0 : 1));  
    }
}

function createArray() {
    var artist1 = document.getElementById("input1").value;
    var artist2 = document.getElementById("input2").value;
    var artist3 = document.getElementById("input3").value;
    var artists = [artist1, artist2, artist3];

    var result = document.getElementById("result");
    result.innerHTML = "You entered the following artists in this order: " + "<br>" + artists.join(" and ");

    artists.sort();
    result.innerHTML += "<br>" + "And this is your sorted list: " + "<br>" + artists.join(" and ");
}   
