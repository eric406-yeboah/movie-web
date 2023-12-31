// home search  button


document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const movieList = document.getElementById('movieList');
  
    const API_KEY = '04c35731a5ee918f014970082a0088b1';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
  
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const searchTerm = searchInput.value.trim();
      if (searchTerm !== '') {
        searchMovies(searchTerm);
        searchInput.value = '';
      }
    });
  
    
  
    const searchMovies=async(query)=> {
      const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
        const response = await fetch(url);
        const data = await response.json();
        showMovies(data.results);
  
    }
  
    function showMovies(movies) {
      movieList.innerHTML = "";
      movies.forEach(movie => {
        const { poster_path, title, vote_average, overview } = movie;
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
  
        movieElement.innerHTML = `
          <img src="${IMG_PATH + poster_path}" alt="${title}">
          <div class="movie-info">
            <h3>${title}</h3>
            <span>${vote_average}</span>
          </div>
          <div class="overview">
            <h3>Overview:</h3>
            ${overview}
          </div>
        `;
  
        movieList.appendChild(movieElement);
      });
    }
  });

  // sign up button

document.addEventListener('DOMContentLoaded', function () {
  const openPopupBtn = document.getElementById('openPopupBtn');
  const closePopupBtn = document.getElementById('closePopupBtn');
  const signupPopup = document.getElementById('signupPopup');

  openPopupBtn.addEventListener('click', function () {
    signupPopup.style.display = 'block';
  });

  closePopupBtn.addEventListener('click', function () {
    signupPopup.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const openPopupBtn = document.getElementById('open');
  const closePopupBtn = document.getElementById('closePopupBtn1');
  const signupPopup = document.getElementById('signupPopup1');

  openPopupBtn.addEventListener('click', function () {
    signupPopup.style.display = 'block';
  });

  closePopupBtn.addEventListener('click', function () {
    signupPopup.style.display = 'none';
  });
});