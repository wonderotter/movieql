import fetch from 'node-fetch';

const API_URL = "https://yts.lt/api/v2/list_movies.json?";

export const getMovies = (genre, rating) => {
    let REQUEST_URL = API_URL;

    if(genre !== undefined || genre !== null){
        REQUEST_URL += `genre=${genre}`;
    }

    if(rating > 0){
        REQUEST_URL += `&minimum_rating=${rating}`;
    }

    const data = fetch(REQUEST_URL)
                .then(res => res.json())
                .then(json => json.data.movies);
                
    return data;
};