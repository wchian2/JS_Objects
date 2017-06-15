// JS Objects

// The line below is an example of an array
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
    't','u','v','w','x','y','z']

console.log(alphabet.length);

// Objects now

var alphabetDetail = {
    letter: 'a',
    type: 'vowel'
}

console.log(alphabetDetail);

// Movies database exercise

var movies = [
    {title: "Cool Runnings", rating: 5, hasWatched: true},
    {title: "Snakes on a Plane", rating: 3, hasWatched: true},
    {title: "Iron Man", rating: null, hasWatched: false},
    {title: "Pirate of the Carribean", rating: null, hasWatched: false},
    {title: "Sam I Am?", rating: 1, hasWatched: true}
]

console.log(movies[0].title);

for(i=0;i<movies.length;i++) {

    var stars;
    // If rating is 1, "star" will remain singular; Otherwise it will be plural
    if(movies[i].rating == 1 || movies[i].rating == null) {
        stars = "star";
    } else {
        stars = "stars";
    }

    // Hmm, I can't seem to get that if-statement below to work...
    if(movies[i].rating == null) {
        String(movies[i].rating) === "No";
    }

    if(movies[i].hasWatched == true) {
        console.log("You have watched " + "\"" + movies[i].title + "\"" + " - " + movies[i].rating + " " + stars)
    } else {
        console.log("You have not seen "+ "\"" + movies[i].title + "\"" + " - " + movies[i].rating + " " + stars)
    }
}