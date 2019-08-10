import { getMovies } from './db';

const resolvers = {
    Query: {
        movies: (_,{genre, rating}) => getMovies(genre, rating)
    }
}

export default resolvers;