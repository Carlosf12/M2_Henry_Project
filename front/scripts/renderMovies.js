// front/scripts/renderMovies.js

function createMovieCard(movieCard) {
    //Destructure
    const {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster
    } = movieCard;

    //HTML Element Creation
    const cardDiv = document.createElement('div');
    const titleElement = document.createElement('h3');
    const posterElement = document.createElement('img');
    const genreElement = document.createElement('p');
    const yearElement = document.createElement('p');
    const directorElement = document.createElement('p');
    const durationElement = document.createElement('p');
    const ratingElement = document.createElement('p');

    //Assign values to HTML Elements
    titleElement.innerHTML = title;
    posterElement.src = poster;
    posterElement.alt = `Movie cover for: ${title}`;
    yearElement.innerHTML = `Year: ${year}`;
    durationElement.innerHTML = `Duration: ${duration}`;
    directorElement.innerHTML = `Director: ${director}`;
    genreElement.innerHTML = `Genre: ${genre.join(', ')}`;
    ratingElement.innerHTML = `Rating: ${rate}`;

    //Assign CSS Classes
    cardDiv.classList.add('movie-card');
    ratingElement.classList.add('rating-box');
    titleElement.classList.add('movie-title');
    posterElement.classList.add('movie-poster');
    yearElement.classList.add('movie-year');
    durationElement.classList.add('movie-duration');
    directorElement.classList.add('movie-director');
    genreElement.classList.add('movie-genre');

    //Append elements
    cardDiv.appendChild(titleElement);
    cardDiv.appendChild(posterElement);
    cardDiv.appendChild(yearElement);
    cardDiv.appendChild(durationElement);
    cardDiv.appendChild(directorElement);
    cardDiv.appendChild(genreElement);
    cardDiv.appendChild(ratingElement);

    //Return card element
    return cardDiv;
}

//Selecting the movie cards gallery
const gallery = document.getElementById('movie-list-container');

function renderCards(movies) {

    //Empty the container
    gallery.innerHTML = '';

    //Obtain HTML element
    const galleryElements = movies.map(movieCard => createMovieCard(movieCard));

    //Display elements in gallery. Append
    galleryElements.forEach(galleryElement => gallery.appendChild(galleryElement));
};


// Assuming you have your movie data in a variable called 'movieData'
import  tempData from './tempData.js';

// Call renderCards with your movie data
renderCards(tempData);