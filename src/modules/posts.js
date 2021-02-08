import * as postsAPI from '../api/posts';
import { 
  createPromiseThunk, 
  reducerUtils,
  handleAsyncActions 
} from '../lib/asyncUtils';

const GET_POSTS_REQUEST = 'posts/GET_POSTS_REQUEST';
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
const GET_POSTS_FAILURE = 'posts/GET_POSTS_FAILURE';

const ADD_POST_REQUEST = 'posts/ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'posts/ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'posts/ADD_POST_FAILURE';

const REMOVE_POST_REQUEST = 'posts/REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'posts/REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'posts/REMOVE_POST_FAILURE';

const UPDATE_POST_REQUEST = 'posts/UPDATE_POST_REQUEST';
const UPDATE_POST_SUCCESS = 'posts/UPDATE_POST_SUCCESS';
const UPDATE_POST_FAILURE = 'posts/UPDATE_POST_FAILURE';

const CLEAR_POSTS = 'posts/CLEAR_POSTS';

export const getPosts = createPromiseThunk(GET_POSTS_REQUEST, postsAPI.getPosts);
export const addPost = createPromiseThunk(ADD_POST_REQUEST, postsAPI.addPost);
export const removePost = createPromiseThunk(REMOVE_POST_REQUEST, postsAPI.removePost);
export const updatePost = createPromiseThunk(UPDATE_POST_REQUEST, postsAPI.updatePost);
export const clearPosts = () => ({ type: CLEAR_POSTS });

const initialState = {
  posts: reducerUtils.initial()
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_FAILURE:
      return handleAsyncActions(GET_POSTS_REQUEST, 'posts', true)(state, action);
    case ADD_POST_REQUEST:
    case ADD_POST_SUCCESS:
    case ADD_POST_FAILURE:
      return handleAsyncActions(ADD_POST_REQUEST, 'posts', true)(state, action);
    case REMOVE_POST_REQUEST:
    case REMOVE_POST_SUCCESS:
    case REMOVE_POST_FAILURE:
      return handleAsyncActions(REMOVE_POST_REQUEST, 'posts', true)(state, action);
    case UPDATE_POST_REQUEST:
    case UPDATE_POST_SUCCESS:
    case UPDATE_POST_FAILURE:
      return handleAsyncActions(UPDATE_POST_REQUEST, 'posts', true)(state, action);
    case CLEAR_POSTS:
      return {
        posts: reducerUtils.initial()
      };
    default:
      return state;
  }
}