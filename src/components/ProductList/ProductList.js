import React from 'react';
import { Link } from 'react-router-dom';
import { List, Item, Img, Name, Price } from './style';

export default function ProductList({ products }) {
  const setPrice = (num) => {
    let price = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return price;
  }

  return (
    <List>
      {products.map(product => (
        <Item key={product.id}>
          <Link to={`/product/${product.id}`}>
            <Img><img src={product.imgSrc} alt={product.name} /></Img>
            <Name>{product.name}</Name>
            <Price>판매가 : <b>{setPrice(product.price)}</b>원</Price>
          </Link>
        </Item>
      ))}
    </List>
  );
}