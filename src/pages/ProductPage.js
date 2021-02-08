import React from 'react';
import ProductContainer from '../containers/ProductContainer';

function ProductPage({ match }) {
  const { id } = match.params;

  return <ProductContainer productId={parseInt(id, 10)} />;
}

export default ProductPage;
