import * as productsAPI from '../api/products';
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  createPromiseThunkById,
  handleAsyncActionsById
} from '../lib/asyncUtils';

const GET_PRODUCTS_REQUEST = 'products/GET_PRODUCTS_REQUEST';
const GET_PRODUCTS_SUCCESS = 'products/GET_PRODUCTS_SUCCESS';
const GET_PRODUCTS_FAILURE = 'products/GET_PRODUCTS_FAILURE';

const GET_PRODUCT_REQUEST = 'products/GET_PRODUCT_REQUEST';
const GET_PRODUCT_SUCCESS = 'products/GET_PRODUCT_SUCCESS';
const GET_PRODUCT_FAILURE = 'products/GET_PRODUCT_FAILURE';

const SET_PRICE = 'products/SET_PRICE';
const INCREASE_PRODUCT = 'products/INCREASE_PRODUCT';
const DECREASE_PRODUCT = 'products/DECREASE_PRODUCT';

const CLEAR_PRODUCT = 'products/CLEAR_PRODUCT';

export const getProducts = createPromiseThunk(GET_PRODUCTS_REQUEST, productsAPI.getProducts);
export const getProduct = createPromiseThunkById(GET_PRODUCT_REQUEST, productsAPI.getProductById);

export const setPrice = price => ({ type: SET_PRICE, price });
export const increase = () => ({ type: INCREASE_PRODUCT });
export const decrease = () => ({ type: DECREASE_PRODUCT });

export const clearProduct = () => ({ type: CLEAR_PRODUCT });

const initialState = {
  products: reducerUtils.initial(),
  product: reducerUtils.initial(),
  productPriceDefault: 0,
  productPrice: 0,
  productQuantity: 1,
  diff: 1
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
    case GET_PRODUCTS_SUCCESS:
    case GET_PRODUCTS_FAILURE:
      return handleAsyncActions(GET_PRODUCTS_REQUEST, 'products', true)(state, action);
    case GET_PRODUCT_REQUEST:
    case GET_PRODUCT_SUCCESS:
    case GET_PRODUCT_FAILURE:
      return handleAsyncActionsById(GET_PRODUCT_REQUEST, 'product', true)(state, action);
    case SET_PRICE:
      return {
        ...state,
        productPriceDefault: action.price,
        productPrice: action.price
      };
    case INCREASE_PRODUCT:
      return {
        ...state,
        productPrice: state.productPrice + state.productPriceDefault,
        productQuantity: state.productQuantity + state.diff,
        diff: 1
      };
    case DECREASE_PRODUCT:
      return {
        ...state,
        productPrice: state.productPrice - state.productPriceDefault,
        productQuantity: state.productQuantity - state.diff,
        diff: 1
      };
    case CLEAR_PRODUCT:
      return {
        ...state,
        productPrice: 0,
        productQuantity: 1,
        productPriceDefault: 0
      };
    default:
      return state;
  }
}
