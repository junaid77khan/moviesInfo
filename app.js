
let name = document.getElementById("name");
let release = document.getElementById("release");
let director = document.getElementById("director");
let actor = document.getElementById("actor");
let language = document.getElementById("language");
let awards = document.getElementById("awards");
let boxOffice = document.getElementById("box-office");
let runTime = document.getElementById("run-time");
let country = document.getElementById("country");
let genre = document.getElementById("genre");
let writer = document.getElementById("writer");
let rating = document.getElementById("rating");
let img = document.getElementById('img');
let movieContent = document.getElementById('movieContent');
movieContent.classList.add("vanish");
let loaderContainer = document.getElementById('loader-container');
loaderContainer.classList.add("vanish");

const searchMovie = () => {
    loaderContainer.classList.remove("vanish");
    movieContent.classList.remove("vanish");
    let api = 'https://www.omdbapi.com/?apikey=61e576a4&t=';
    let movieName = document.getElementById('movieName');
    let query = api + movieName.value;
    fetch(query).then((data) => {
        return data.json();
    }).then((data) => {
        loaderContainer.classList.add("vanish");
        console.log(data);
        name.innerText = data.Title;
        release.innerText = data.Released;        
        director.innerText = data.Director;      
        actor.innerText = data.Actors;
        language.innerText = data.Language;
        awards.innerText = data.Awards;
        boxOffice.innerText = data.BoxOffice;
        runTime.innerText = data.Runtime;
        country.innerText = data.Country;
        genre.innerText = data.Genre;
        writer.innerText = data.Writer;
        rating.innerText = data.imdbRating;
        img.src = data.Poster;
    })
}
