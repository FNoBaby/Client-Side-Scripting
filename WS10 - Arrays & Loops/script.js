/*
    Using normal arrays
    var movies = [];
    var ratings = [];

    movies.push("The Shawshank Redemption");
    ratings.push(9.2);

    movies.push("The Godfather");
    ratings.push(9.2);

    movies.push("The Dark Knight");
    ratings.push(9.0);

    movies.push("The Lord of the Rings: The Return of the King");
    ratings.push(8.9);

    movies.push("Pulp Fiction");
    ratings.push(8.9);

    movies.push("Schindler's List");
    ratings.push(8.9);

    movies.push("Forrest Gump");
    ratings.push(8.8);

    movies.push("The Lord of the Rings: The Fellowship of the Ring");
    ratings.push(8.8);

    movies.push("The Lord of the Rings: The Two Towers");
    ratings.push(8.7);

    movies.push("The Matrix");
    ratings.push(8.7);

    function displayMovies() {
        var ul = document.getElementById("movies");

        // This for loop will create a list item for each movie in the array
        for (var i = 0; i < movies.length; i++) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(movies[i] + " - " + ratings[i]));
            ul.appendChild(li);
        }
    }
 */

    //Using an array of objects
var movies = [
    { title: "The Shawshank Redemption", rating: 9.2 },
    { title: "The Godfather", rating: 9.2 },
    { title: "The Dark Knight", rating: 9.0 },
    { title: "The Lord of the Rings: The Return of the King", rating: 8.9 },
    { title: "Pulp Fiction", rating: 8.9 },
    { title: "Schindler's List", rating: 8.9 },
    { title: "Forrest Gump", rating: 8.8 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", rating: 8.8 },
    { title: "The Lord of the Rings: The Two Towers", rating: 8.7 },
    { title: "The Matrix", rating: 8.7 }
];

function displayMovies() {
    var ul = document.getElementById("movies");

    // This for loop will create a list item for each movie in the array
    for (var i = 0; i < movies.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(movies[i].title + " - " + movies[i].rating));
        ul.appendChild(li);
    }
}