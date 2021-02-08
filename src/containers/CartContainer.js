import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../components/Cart';
import { removeProduct, updateOption } from '../modules/cart';

function CartContainer() {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const onRemove = useCallback((id) => {
    dispatch(removeProduct(id));
  },[dispatch]);
  const onUpdate = useCallback(({ id, price, quantity }) => {
    dispatch(updateOption(id, price, quantity ));
  },[dispatch]);

  return <Cart products={products} onRemove={onRemove} onUpdate={onUpdate} />
}

export default CartContainer;