import { combineReducers } from 'redux';
import posts from './posts';
import movies from './movies';
import cart from './cart';
import products from './products';
const rootReducer = combineReducers({ 
  posts,
  movies,
  cart,
  products
 });

export default rootReducer;