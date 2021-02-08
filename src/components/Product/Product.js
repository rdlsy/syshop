import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Detail, Wrap, Img, Order, OrderDetail, Name, Info, Quantity, QuantityBox, Price, Btns, CartBtn, OrderBtn, DetailImgArea, Popup, PopupWrap } from './style';

export default function Product ({ product, onIncrease, onDecrease, productPrice, productQuantity, onAdd, onUpdate, cart }) {
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const { id, name, imgSrc, detailImgSrc, bigImgSrc } = product;
  const cartList = cart && cart.map((i) => i.itemId);
  const condition = cartList.includes(id);
  const index = cartList.indexOf(id);
  
  const increase = () => {
    if (productQuantity < 10) onIncrease();
  }
  const decrease = () => {
    if (productQuantity > 1) onDecrease();
  }
  const addCart = () => {
    if (condition) {
      setCheck(true);
    } else {
      addProduct();
    }
  }
  const addProduct = () => {
    check && setCheck(false);
    setOpen(true);
    if (condition) {
      onUpdate({
        id: index,
        price: productPrice + cart[index].price,
        quantity: productQuantity + cart[index].quantity
      });
    } else {
      onAdd({
        id: id,
        name: name,
        imgSrc: imgSrc,
        price: productPrice,
        quantity: productQuantity
      });
    }
  }
  productPrice = product.price * productQuantity;
  const itemPrice = productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <Detail>
      <Wrap>
        <Img>
          <img src={bigImgSrc} alt="" />
        </Img>
        <Order>
          <Name>{name}</Name>
          <OrderDetail>
            <Info>
              <li>
                <dl>
                  <dt>제조국</dt>
                  <dd>상품정보고시 참조</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>택배비</dt> 
                  <dd>무료</dd> 
                </dl>
              </li>
              <li>
                <dl>
                  <dt>택배사</dt> 
                  <dd>로젠택배 또는 롯데택배</dd> 
                </dl>
              </li>
            </Info>
            <Quantity>
              <em>주문수량</em>
              <QuantityBox>
                <span>{productQuantity}</span>
                <div>
                  <button onClick={increase}><IoMdArrowDropup /></button>
                  <button onClick={decrease}><IoMdArrowDropdown /></button>
                </div>
              </QuantityBox>
            </Quantity>
            <Price>
              <dt>총 합계금액</dt>
              <dd>{itemPrice}원</dd>
            </Price>
            <Btns>
              <CartBtn onClick={addCart}>장바구니</CartBtn>
              <OrderBtn onClick={() => alert('장바구니에 먼저 담아주세요..!')}>구매하기</OrderBtn>
            </Btns>
          </OrderDetail>
        </Order>
      </Wrap>
      <DetailImgArea>
        <img src={detailImgSrc} alt={`${name} 상세 이미지`} />
      </DetailImgArea>
      {(
        open &&
        <Popup>
          <PopupWrap>
            <p>장바구니에 추가 되었습니다.</p>
            <div>
              <button onClick={() => setOpen(false)}>쇼핑 계속하기</button>
              <Link to={'/cart'}>장바구니 확인</Link>
            </div>
          </PopupWrap>
        </Popup>
      )}
      {(
        check &&
        <Popup>
           <PopupWrap>
            <p>이미 장바구니에 있습니다.<br />상품을 추가하겠습니까?</p>
            <div>
              <button onClick={() => setCheck(false)}>쇼핑 계속하기</button>
              <button onClick={addProduct}>상품 추가하기</button>
            </div>
          </PopupWrap>
        </Popup>
      )}
    </Detail>
  );
}