import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductList from '../components/ProductList';
import { getProducts, clearProduct } from '../modules/products';

function ProductListContainer() {
  const { data, loading, error } = useSelector(state => state.products.products);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    return () => {
      dispatch(clearProduct());
    }
  }, [data, dispatch]);

  if (loading && !data) return (
    <div className="Loading">
      <span className="l1"></span>
      <span className="l2"></span>
      <span className="l3"></span>
    </div>
  );
  if (error) return <div className="Error"><span></span>에..에러!!</div>;
  if (!data) return null;
  
  return <ProductList products={data} />;
}

export default ProductListContainer;
