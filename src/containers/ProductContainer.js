import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct, increase, decrease, setPrice} from '../modules/products';
import { addProduct, updateOption } from '../modules/cart';
import Product from '../components/Product';

function ProductContainer({ productId }) {
  const { data, loading, error } = useSelector(
    state => state.products.product[productId]
  ) || {
    loading: false,
    data: null,
    error: null
  };

  const { productPrice, productQuantity } = useSelector(state => ({
    productPrice: state.products.productPrice,
    productQuantity: state.products.productQuantity,
  }));
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  const onAdd = (name, id, imgSrc, price, quantity) => dispatch(addProduct(name, id, imgSrc, price, quantity));
  const onUpdate = ({ id, price, quantity }) => {
    dispatch(updateOption(id, price, quantity));
  };

  useEffect(() => {
    dispatch(getProduct(productId));
    if (data) return dispatch(setPrice(data.price));
  }, [dispatch, productId, data]);

  if (loading && !data) return (
    <div className="Loading">
      <span className="l1"></span>
      <span className="l2"></span>
      <span className="l3"></span>
    </div>
  );
  if (error) return <div className="Error"><span></span>에..에러!!</div>;
  if (!data) return null;

  return <Product product={data} productPrice={productPrice} productQuantity={productQuantity} onIncrease={onIncrease} onDecrease={onDecrease} onAdd={onAdd} onUpdate={onUpdate} cart={cart} />;
}

export default ProductContainer;
