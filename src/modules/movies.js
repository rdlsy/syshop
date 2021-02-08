import * as moviesAPI from '../api/movies';
import { 
  createPromiseThunk, 
  reducerUtils,
  handleAsyncActions 
} from '../lib/asyncUtils';

const GET_MOVIES_REQUEST = 'movies/GET_MOVIES_REQUEST';
const GET_MOVIES_SUCCESS = 'movies/GET_MOVIES_SUCCESS';
const GET_MOVIES_FAILURE = 'movies/GET_MOVIES_FAILURE';

export const getMovies = createPromiseThunk(GET_MOVIES_REQUEST, moviesAPI.getMovies);

const initialState = {
  movies: reducerUtils.initial()
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
    case GET_MOVIES_SUCCESS:
    case GET_MOVIES_FAILURE:
      return handleAsyncActions(GET_MOVIES_REQUEST, 'movies', true)(state, action);
    default:
      return state;
  }
}