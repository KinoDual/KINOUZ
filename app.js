const movies = [
    {
      title: "Hayoliy Do`stlar",
      image: "https://via.placeholder.com/200x300",
      genre: "Drama"
    },
    {
      title: "Muzlik Davri",
      image: "https://via.placeholder.com/200x300",
      genre: "Crime"
    },
    {
      title: "Maymunlar Sayyorasi",
      image: "https://via.placeholder.com/200x300",
      genre: "Action"
    }
  ];
  
  const moviesContainer = document.getElementById("movies-container");
  const searchBar = document.getElementById("search-bar");
  
  function displayMovies(filteredMovies) {
    moviesContainer.innerHTML = "";
    filteredMovies.forEach(movie => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
      movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.genre}</p>
      `;
      moviesContainer.appendChild(movieCard);
    });
  }
  
  displayMovies(movies);
  
  searchBar.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchText)
    );
    displayMovies(filteredMovies);
  });
  