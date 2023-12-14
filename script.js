let movies = [
  {
    name: "Leo",
    image:
      "https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/10/Leo-poster-1.jpg?size=*:900",
    rating: "imdb rating : 7.3" ,
  },
  {
    name: "The Shawshank Redemption",
    image:
      "https://i.pinimg.com/736x/a2/5b/4a/a25b4ae8e03c4b2ebd06d861a082956a.jpg",
    rating: "imdb rating :9.3" ,
  },
  {
    name: "The Godfather ",
    image:
    "https://dailycollegian.com/wp-content/uploads/2022/03/godfatjer-634x900.jpg",
    rating: "imdb rating: 9.2" ,
  },
  {
    name: " Inception ",
    image:
      "https://www.themoviedb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    rating: "imdb rating : 8.8" ,
  },
  {
    name: "Fight Club",
    image:
      "https://www.tallengestore.com/cdn/shop/products/Fight_Club_-_Brad_Pitt_-_Ed_Norton_-_Hollywood_Cult_Classic_English_Movie_Graphic_Art_Poster_ed426c8b-941b-4c01-ad7b-5a4ee842996f.jpg?v=1579090156",
    rating: "imdb rating : 8.8" ,
  },
  {
    name: "The Dark Knight ",
    image:
      "https://e0.pxfuel.com/wallpapers/498/254/desktop-wallpaper-the-dark-knight-poster-2008-dark-knight-dark-knight-joker-2008.jpg",
    rating: "imdb rating : 9" ,
  },
  {
    name: "Nayagan",
    image:
      "https://wallpaperaccess.com/full/9471451.jpg",
    rating: "imdb rating : 8.6",
  },
  {
    name: " Harry Potter and the Sorcerer's Stone ",
    image:
      "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
    rating: "imdb rating : 7.6" ,
  },
  {
    name: "Jigarthanda Double X",
    image:
      "https://cenekraft.com/wp-content/uploads/2023/11/20231110_094245.jpg",
    rating: "imdb rating : 8.3" ,
  },
  {
    name: "Chithha",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWZkMjE2OTktOGQ4Zi00OWQ1LTgwNjAtZTFjOGExYWQyMTU5XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
    rating: "imdb rating : 8.3" ,
  },
];

function searchMovie() {
  let movieName = document.getElementById("search").value;

  if (movieName !== "") {
    let result = movies.filter(function (movie) {
      return movie.name.toUpperCase().includes(movieName.toUpperCase());
    });
    displaMovies(result)
  }
  else{
    displaMovies(movies)
  }
}

function displaMovies(data) {

    document.getElementById("movies").innerHTML="";

  let htmlString = ``;

  for (let i = 0; i < data.length; i++) {
    htmlString =
      htmlString +
      `
        <div class="movie">
        <div class="overlay">
        <iframe class="video width="560" height="315" src="https://www.youtube.com/embed/Qh-ydUlsA9c?si=BlBjkj3fqS4iCR7u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
        <div class="details">
            <h1>${data[i].name}</h1>
            <h2>${data[i].rating}</h2>
        </div>
        </div>
        <img
        class="poster"
        src=${data[i].image}
        alt="movie img"
        />
    </div>`;
  }

  document.getElementById("movies").innerHTML = htmlString;
}

displaMovies(movies);



/* let movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    let overlayDiv =document.createElement("div");
    overlayDiv.classList.add("overlay");

    movieDiv.appendChild(overlayDiv);

    console.log(movieDiv); */
