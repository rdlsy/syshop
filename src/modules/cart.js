const ADD_PRODUCT = 'cart/ADD_PRODUCT';
const REMOVE_PRODUCT = 'cart/REMOVE_PRODUCT';
const UPDATE_OPTION = 'cart/UPDATE_OPTION';

let nextId = 0;

export const addProduct = item => ({
  type: ADD_PRODUCT,
  item: {
    id: nextId++,
    itemId: item.id,
    name: item.name,
    imgSrc: item.imgSrc,
    price: item.price,
    quantity: item.quantity
  }
});
export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  id
});
export const updateOption = (id, price, quantity) => ({
  type: UPDATE_OPTION,
  id,
  price: price,
  quantity: quantity 
});

const initialState = [];

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return state.concat(action.item);
    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.id);
    case UPDATE_OPTION:
      return state.map(product => product.id === action.id ? { ...product, price: action.price, quantity: action.quantity } : product);
    default:
      return state;
  }
}