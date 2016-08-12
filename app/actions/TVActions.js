import AppDispatcher from '../AppDispatcher';
import TVConstants from './constants';
import MovieDBClient from '../utils/MovieDBClient';

const TVActions = {

  /**
   * Create an account with an empty value
   */
    getGenres() {
        AppDispatcher.dispatch({
            type: TVConstants.GET_GENRES,
            genres: []
        });
        MovieDBClient.get('/genre/movie/list').then( response => {
            AppDispatcher.dispatch({
                type: TVConstants.GET_GENRES_SUCCESS,
                genres: response.genres
            });
        });
    },

    getMovies(genre_id) {
        AppDispatcher.dispatch({
            type: TVConstants.GET_MOVIES,
            movies: []
        });
        MovieDBClient.get('/genre/'+genre_id+'/movies').then( response => {
            AppDispatcher.dispatch({
                type: TVConstants.GET_MOVIES_SUCCESS,
                movies: response.results
            });
        });
    },

    getMovie(movie_id) {
        AppDispatcher.dispatch({
            type: TVConstants.GET_MOVIE,
            movie: {},
        });
        MovieDBClient.get(`/movie/${movie_id}`, 'trailers').then( response => {
            AppDispatcher.dispatch({
                type: TVConstants.GET_MOVIE_SUCCESS,
                movie: response,
            });
        });
  },

};

export default TVActions;
