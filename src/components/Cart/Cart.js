import React, { useState } from 'react';
import { CartBody, CartInner, Title, ItemBox, Info, Options, Btns, TotalPrice, OrderBtns } from './style';

const Item = React.memo(function Item({ item, onRemove, onUpdate }) {
  const [option, setOption] = useState({
    defaultPrice: item.price / item.quantity,
    price: item.price,
    quantity: item.quantity
  });
  const remove = () => {
    onRemove(item.id);
  }
  const onChange = e => {
    const value = parseInt(e.target.value);
    setOption({
      ...option,
      price: option.defaultPrice * value,
      quantity: value
    });
    onUpdate({
      id: item.id,
      price: option.defaultPrice * value,
      quantity: value
    });
  }
  const selOption = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const totalPrice = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <ItemBox>
      <Info>
        <figure><img src={item.imgSrc} alt={item.name} /></figure>
        <Options>
          <p className="name">
            {item.name}
          </p>
          <div>
            <select onChange={onChange} value={item.quantity}>
              {
                selOption.map((num, index) => (
                  <option key={index}>{num}</option>
                )) 
              }
            </select>
            <p className="price">{totalPrice}원</p>
          </div>
        </Options>
      </Info>
      <Btns>
        <button className="buy" onClick={() => alert('준비중입니다.')}>구매하기</button>
        <button onClick={remove} className="remove">삭제</button>
      </Btns>
    </ItemBox>
  )
});

const Total = (products) => {
  let price = products.map((i) => i.price);
  let total = price.reduce((pre, val) => pre + val);
  total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return total;
};

export default function Cart({ products, onRemove, onUpdate }) {
  return (
    <CartBody>
      <CartInner>
        <Title>전체상품 ({products.length})</Title>
        {
          products.length ?
          products.map((item, index) => (
            <Item key={index} item={item} onRemove={onRemove} onUpdate={onUpdate} />
          )) : <ItemBox className="none">장바구니에 상품이 없습니다.</ItemBox>
        }
        <TotalPrice>
          <dl>
            <dt>총 상품금액</dt>
            <dd>
              {products.length ? Total(products) : 0}원
            </dd>
          </dl>
        </TotalPrice>
        <OrderBtns>
          <button onClick={() => alert('준비중입니다.')}>전체주문하기</button>
        </OrderBtns>
      </CartInner>
    </CartBody>
  );
};