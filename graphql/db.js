let movies = [
    {   id: 1,
        name: "Zootopia",
        score: 0.92
    },
    {   id: 2,
        name: "How to train your dragon",
        score: 0.91
    },
    {
        id: 3,
        name: "SPIDER-MAN: FAR FROM HOME",
        score: 0.95
    },
    {
        id: 4,
        name: "ALADIN",
        score: 0.94
    },
    {
        id: 5,
        name: "YESTERDAY",
        score: 0.89
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovie = movies.filter(movie => movie.id === id);

    return filteredMovie[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);

    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;

        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: parseInt(`${movies.length + 1}`),
        name: name,
        score: score
    };

    movies.push(newMovie);

    return newMovie;
}