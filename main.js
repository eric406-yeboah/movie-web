
const view = document.getElementById("view");

const searchForm = document.getElementById("searchForm");
const search = document.getElementById("search");

const apiKey = "04c35731a5ee918f014970082a0088b1";
const endPoint = "https://api.themoviedb.org/";

const link = (`${endPoint}3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=2`)
const IMGPATH = "https://image.tmdb.org/t/p/w500";
const SEARCHAPI = (`${endPoint}3/search/movie?&api_key=${apiKey}&query=`)



const  getMovies=async(url)=> {
  const resp = await fetch(url);
  const respData = await resp.json();
  showMovies(respData.results);
}

function showMovies(movies) {
  view.innerHTML = "";
  movies.forEach((movie) => {
    const { poster_path,  vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <img src="${IMGPATH + poster_path}" />
      <div class="movie-info">
        
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h2>Overview:</h2>
        ${overview}
      </div>
    `;

    view.appendChild(movieEl);
  });
}

const getClassByRate =(vote)=> {
  return vote >=8 ? 'green' : (vote >=5 ? 'orange' : 'red');
}

const formSubmit = (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);
    search.value = "";
  }
};

searchForm.addEventListener("submit",formSubmit);


getMovies(link);

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

