(this.webpackJsonpsyshop=this.webpackJsonpsyshop||[]).push([[0],{47:function(n,t,e){},57:function(n,t,e){"use strict";e.r(t);var r=e(2),c=e(1),i=e.n(c),o=e(22),a=e.n(o),d=(e(47),e(4)),u=e(7),s=e(3),l=e(35),p=e(36),f=e(15);function b(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  margin-left: 1.2rem;\n  font-size: 1.5rem;\n  cursor: pointer;\n  @media "," {\n    margin-left: 0;\n    order: -1;\n  }\n"]);return b=function(){return n},n}function j(){var n=Object(d.a)(["\n  display: flex;\n  button {\n    display: none;\n    width: 56px;\n    height: 56px;\n    svg {\n      font-size: 2rem;\n    }\n  }\n  .menu_pc {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    li {\n      margin-left: 2rem;\n      &.active {\n        font-weight: 600;\n        color: #f783ac;\n      }\n    }\n  }\n  .menu_m {\n    position: fixed;\n    right: -100%;\n    top: 0;\n    background-color: #fff;\n    width: 100%;\n    height: 100%;\n    display: none;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    z-index: 11;\n    transition: right .5s;\n    &.active {\n      display: flex;\n      right: 0;\n    }\n    li {\n      margin: 0 0 2em;\n      a {\n        font-size: 2rem;\n      }\n      &.active {\n        font-weight: 600;\n        color: #f783ac;\n      }\n    }\n  }\n  @media "," {\n    button {\n      position: relative;\n      display: block;\n      z-index: 12;\n    }\n    ul {\n      position: fixed;\n      right: -100%;\n      top: 0;\n      background-color: #fff;\n      width: 100%;\n      height: 100%;\n      display: none;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      z-index: 11;\n      transition: right .5s;\n      &.active {\n        display: flex;\n        right: 0;\n      }\n      li {\n        margin: 0 0 2em;\n        a {\n          font-size: 2rem;\n        }\n      }\n    }\n  }\n"]);return j=function(){return n},n}function m(){var n=Object(d.a)(["\n  max-width: 1024px;\n  height: 56px;\n  padding: 0 1.2rem;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  .logo {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n    font-weight: 900;\n    color: #1e1e1e;\n    z-index: 12;\n    svg {\n      margin-right: .1em;\n      font-size: 1.7rem;\n      color: #ffd43b;\n    }\n  }\n  @media "," {\n    padding: 0 0 0 1rem;\n  }\n"]);return m=function(){return n},n}function h(){var n=Object(d.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 8px;\n  z-index: 10;\n"]);return h=function(){return n},n}var x=s.c.div(h()),g=s.c.div(m(),(function(n){return n.theme.tablet})),O=s.c.nav(j(),(function(n){return n.theme.tablet})),v=s.c.a(b(),(function(n){return n.theme.tablet}));var y=Object(u.f)((function(){return Object(r.jsx)(x,{children:Object(r.jsxs)(g,{children:[Object(r.jsxs)(f.b,{to:"/",className:"logo",children:[Object(r.jsx)(l.a,{}),"SYSHOP"]}),Object(r.jsx)(O,{children:Object(r.jsx)(v,{children:Object(r.jsx)(f.b,{to:"/cart",children:Object(r.jsx)(p.a,{})})})})]})})})),w=Object(u.f)(y),S=e(9),k=e(5),z=e(21);function E(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  button {\n    width: 115px;\n    height: 46px;\n    background-color: #f783ac;\n    font-size: 1rem;\n    font-weight: 600;\n    color: #fff;\n    cursor: pointer;\n  }\n  @media "," {\n    button {\n      width: 100%;\n    }\n  }\n"]);return E=function(){return n},n}function C(){var n=Object(d.a)(["\n  padding: 1.8rem 0 3rem;\n  dl {\n    display: flex;\n    justify-content: space-between;\n    dt, dd {\n      font-size: 1.3rem;\n      font-weight: 600;\n    }\n  }\n"]);return C=function(){return n},n}function _(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  button {\n    display: block;\n    width: 115px;\n    height: 46px;\n    line-height: 44px;\n    text-align: center;\n    font-size: 1rem;\n    cursor: pointer;\n    &.buy {\n      border: 1px solid #f783ac;\n      color: #f783ac;\n    }\n    &.remove {\n      margin-top: 0.5em;\n      border: 1px solid #c2b7bb;\n      color: #323232;\n    }\n  }\n  @media "," {\n    flex-direction: row;\n    button {\n      width: 49%;\n      &.remove {\n        margin-top: 0;\n        margin-left: 1%;\n      }\n    }\n  }\n"]);return _=function(){return n},n}function P(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 495px;\n  max-width: 100%;\n  .name {\n    padding: 0.5rem 0 0;\n    font-size: 1.3rem;\n  }\n  div {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    font-size: 1.3rem;\n    select {\n      width: 80px;\n      height: 35px;\n      line-height: 35px;\n      border-color: #c2b7bb;\n      border-radius: 3px;\n      background: url('/syshop/arrow.png') no-repeat right 8px center;\n      background-size: 18%;\n      appearance: none;\n      text-indent: 12px;\n    }\n  }\n  @media "," {\n    width: 100%;\n  }\n"]);return P=function(){return n},n}function I(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  figure {\n    width: 100px;\n    margin-right: 1.5em;\n    img {\n      width: 100%;\n    }\n  }\n  .price {\n    margin-left: auto;\n  }\n  @media "," {\n    position: relative;\n    padding-left: 120px;\n    margin-bottom: 1.2rem;\n    height: 100px;\n    figure {\n      position: absolute;\n      top: 0;\n      left: 0;\n      margin-right: 0;\n    }\n  }\n"]);return I=function(){return n},n}function U(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 1.2rem 0;\n  border-bottom: 1px solid #ececec;\n  &:first-child {\n    border-top: 1px solid #ececec;\n  }\n  &.none {\n    justify-content: center;\n    align-items: center;\n    height: 100px;\n  }\n  @media "," {\n    flex-direction: column;\n  }\n"]);return U=function(){return n},n}function R(){var n=Object(d.a)(["\n  padding-bottom: 1.7rem;\n  font-size: 2rem;\n  font-weight: 600;\n  @media "," {\n    padding-bottom: 1rem;\n    font-size: 1.2rem;\n  }\n"]);return R=function(){return n},n}function T(){var n=Object(d.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 400px;\n  background-color: #fff;\n  text-align: left;\n  @media "," {\n    width: 100%;\n    height: auto;\n    flex-direction: column;\n  }\n"]);return T=function(){return n},n}function D(){var n=Object(d.a)(["\n  max-width: 800px;\n  padding: 6rem 0 7rem;\n  margin: 0 auto;\n  @media "," {\n    padding: 2rem 1rem 4rem;\n  }\n"]);return D=function(){return n},n}var N=s.c.div(D(),(function(n){return n.theme.tablet})),A=s.c.div(T(),(function(n){return n.theme.tablet})),Q=s.c.p(R(),(function(n){return n.theme.tablet})),q=s.c.div(U(),(function(n){return n.theme.tablet})),L=s.c.div(I(),(function(n){return n.theme.tablet})),F=s.c.div(P(),(function(n){return n.theme.tablet})),B=s.c.div(_(),(function(n){return n.theme.tablet})),G=s.c.ul(C()),J=s.c.div(E(),(function(n){return n.theme.tablet})),M=i.a.memo((function(n){var t=n.item,e=n.onRemove,i=n.onUpdate,o=Object(c.useState)({defaultPrice:t.price/t.quantity,price:t.price,quantity:t.quantity}),a=Object(z.a)(o,2),d=a[0],u=a[1],s=t.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return Object(r.jsxs)(q,{children:[Object(r.jsxs)(L,{children:[Object(r.jsx)("figure",{children:Object(r.jsx)("img",{src:t.imgSrc,alt:t.name})}),Object(r.jsxs)(F,{children:[Object(r.jsx)("p",{className:"name",children:t.name}),Object(r.jsxs)("div",{children:[Object(r.jsx)("select",{onChange:function(n){var e=parseInt(n.target.value);u(Object(k.a)(Object(k.a)({},d),{},{price:d.defaultPrice*e,quantity:e})),i({id:t.id,price:d.defaultPrice*e,quantity:e})},value:t.quantity,children:[1,2,3,4,5,6,7,8,9,10].map((function(n,t){return Object(r.jsx)("option",{children:n},t)}))}),Object(r.jsxs)("p",{className:"price",children:[s,"\uc6d0"]})]})]})]}),Object(r.jsxs)(B,{children:[Object(r.jsx)("button",{className:"buy",onClick:function(){return alert("\uc900\ube44\uc911\uc785\ub2c8\ub2e4.")},children:"\uad6c\ub9e4\ud558\uae30"}),Object(r.jsx)("button",{onClick:function(){e(t.id)},className:"remove",children:"\uc0ad\uc81c"})]})]})})),H=function(n){var t=n.map((function(n){return n.price})).reduce((function(n,t){return n+t}));return t=t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};var V=function(n){var t=n.products,e=n.onRemove,c=n.onUpdate;return Object(r.jsx)(N,{children:Object(r.jsxs)(A,{children:[Object(r.jsxs)(Q,{children:["\uc804\uccb4\uc0c1\ud488 (",t.length,")"]}),t.length?t.map((function(n,t){return Object(r.jsx)(M,{item:n,onRemove:e,onUpdate:c},t)})):Object(r.jsx)(q,{className:"none",children:"\uc7a5\ubc14\uad6c\ub2c8\uc5d0 \uc0c1\ud488\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}),Object(r.jsx)(G,{children:Object(r.jsxs)("dl",{children:[Object(r.jsx)("dt",{children:"\ucd1d \uc0c1\ud488\uae08\uc561"}),Object(r.jsxs)("dd",{children:[t.length?H(t):0,"\uc6d0"]})]})}),Object(r.jsx)(J,{children:Object(r.jsx)("button",{onClick:function(){return alert("\uc900\ube44\uc911\uc785\ub2c8\ub2e4.")},children:"\uc804\uccb4\uc8fc\ubb38\ud558\uae30"})})]})})},W="cart/ADD_PRODUCT",Y="cart/REMOVE_PRODUCT",K="cart/UPDATE_OPTION",X=0,Z=function(n,t,e){return{type:K,id:n,price:t,quantity:e}},$=[];var nn=function(){var n=Object(S.c)((function(n){return n.cart})),t=Object(S.b)(),e=Object(c.useCallback)((function(n){t(function(n){return{type:Y,id:n}}(n))}),[t]),i=Object(c.useCallback)((function(n){var e=n.id,r=n.price,c=n.quantity;t(Z(e,r,c))}),[t]);return Object(r.jsx)(V,{products:n,onRemove:e,onUpdate:i})};var tn=function(){return Object(r.jsx)(nn,{})};function en(){var n=Object(d.a)(["\n  padding-top: 0.5rem;\n  border-top: 1px solid #ececec;\n  font-size: 0.8rem;\n  @media "," {\n    font-size: 1rem;\n  }\n"]);return en=function(){return n},n}function rn(){var n=Object(d.a)(["\n  margin-top: 1em;\n  height: 2.8em;\n  font-size: 0.8rem;\n  @media "," {\n    height: auto;\n    padding-bottom: 1rem;\n    font-size: 1.3rem;\n  }\n"]);return rn=function(){return n},n}function cn(){var n=Object(d.a)(["\n  img {\n    width: 100%;\n  }\n"]);return cn=function(){return n},n}function on(){var n=Object(d.a)(["\n  position: relative;\n  float: left;\n  width: calc(100% / 4);\n  padding: 10px 10px 50px;\n  box-sizing: border-box;\n  list-style: none;\n  @media "," {\n    width: calc(100% / 2);\n  }\n  @media "," {\n    width: calc(100% / 1);\n  }\n"]);return on=function(){return n},n}function an(){var n=Object(d.a)(["\n  max-width: 800px;\n  padding: 4rem 0 7rem;\n  margin: 0 auto;\n  @media "," {\n    padding: 2rem 0.5rem 4rem;\n  }\n  ::after {\n    content: '';\n    display: block;\n    clear: both;\n  }\n"]);return an=function(){return n},n}var dn=s.c.div(an(),(function(n){return n.theme.tablet})),un=s.c.div(on(),(function(n){return n.theme.tablet}),(function(n){return n.theme.mobile})),sn=s.c.figure(cn()),ln=s.c.p(rn(),(function(n){return n.theme.tablet})),pn=s.c.div(en(),(function(n){return n.theme.tablet}));var fn=function(n){var t=n.products;return Object(r.jsx)(dn,{children:t.map((function(n){return Object(r.jsx)(un,{children:Object(r.jsxs)(f.b,{to:"/product/".concat(n.id),children:[Object(r.jsx)(sn,{children:Object(r.jsx)("img",{src:n.imgSrc,alt:n.name})}),Object(r.jsx)(ln,{children:n.name}),Object(r.jsxs)(pn,{children:["\ud310\ub9e4\uac00 : ",Object(r.jsx)("b",{children:(t=n.price,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}),"\uc6d0"]})]})},n.id);var t}))})},bn=e(16),jn=e.n(bn),mn=e(20),hn=function(n){return new Promise((function(t){return setTimeout(t,n)}))},xn=[{id:1,name:"\uc5d0\ube44\uce04 \uc778\ud615 (25cm) _\ud6d4\uccd0\ubcf4\uce04",imgSrc:"/syshop/products/1.jpg",bigImgSrc:"/syshop/products/big/1.jpg",detailImgSrc:"/syshop/products/detail/1.jpg",price:15e3},{id:2,name:"\uc5d0\ube44\uce04 \uc778\ud615 (25cm) _\uc637\uc785\uc5c8\uce04",imgSrc:"/syshop/products/2.jpg",bigImgSrc:"/syshop/products/big/2.jpg",detailImgSrc:"/syshop/products/detail/2.jpg",price:15e3},{id:3,name:"\uc5d0\ube44\uce04 \uc778\ud615 (25cm) _\uc5d0\ube44\uce04\ub9e8",imgSrc:"/syshop/products/3.jpg",bigImgSrc:"/syshop/products/big/3.jpg",detailImgSrc:"/syshop/products/detail/3.jpg",price:15e3},{id:4,name:"\uc5d0\ube44\uce04 \uc778\ud615 (25cm) _\ub180\ub790\uce04",imgSrc:"/syshop/products/4.jpg",bigImgSrc:"/syshop/products/big/4.jpg",detailImgSrc:"/syshop/products/detail/4.jpg",price:15e3},{id:5,name:"\uc5d0\ube44\uce04 \uc804\uc2e0 \ud0a4\ub9c1 (15cm)_\ud589\ubcf5\ud574\uce04",imgSrc:"/syshop/products/5.jpg",bigImgSrc:"/syshop/products/big/5.jpg",detailImgSrc:"/syshop/products/detail/5.jpg",price:12e3},{id:6,name:"\uc5d0\ube44\uce04 \uc778\ud615 (35cm)",imgSrc:"/syshop/products/6.jpg",bigImgSrc:"/syshop/products/big/6.jpg",detailImgSrc:"/syshop/products/detail/6.jpg",price:34e3},{id:7,name:"\uc5d0\ube44\uce04 \uc5bc\uad74\ucfe0\uc158 - \uc719\ud06c\ud574\uce04",imgSrc:"/syshop/products/7.jpg",bigImgSrc:"/syshop/products/big/7.jpg",detailImgSrc:"/syshop/products/detail/7.jpg",price:29e3},{id:8,name:"\uc5d0\ube44\uce04 \uc5bc\uad74 \ucfe0\uc158_\uc0b4\uca98\uce04",imgSrc:"/syshop/products/8.jpg",bigImgSrc:"/syshop/products/big/8.jpg",detailImgSrc:"/syshop/products/detail/8.jpg",price:29e3}],gn=function(){var n=Object(mn.a)(jn.a.mark((function n(){return jn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,hn(500);case 2:return n.abrupt("return",xn);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),On=function(){var n=Object(mn.a)(jn.a.mark((function n(t){return jn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,hn(500);case 2:return n.abrupt("return",xn.find((function(n){return n.id===t})));case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),vn=e(13),yn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{loading:!1,data:n,error:null}},wn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{loading:!0,data:n,error:null}},Sn=function(n){return{loading:!1,data:n,error:null}},kn=function(n){return{loading:!1,data:null,error:n}},zn=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n.replaceAll("_REQUEST",""),c="".concat(r,"_SUCCESS"),i="".concat(r,"_FAILURE");return function(r,o){switch(o.type){case n:return Object(k.a)(Object(k.a)({},r),{},Object(vn.a)({},t,wn(e?r[t].data:null)));case c:return Object(k.a)(Object(k.a)({},r),{},Object(vn.a)({},t,Sn(o.payload)));case i:return Object(k.a)(Object(k.a)({},r),{},Object(vn.a)({},t,kn(o.payload)));default:return r}}},En=function(n){return n},Cn=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n.replaceAll("_REQUEST",""),c="".concat(r,"_SUCCESS"),i="".concat(r,"_FAILURE");return function(r,o){var a=o.meta;switch(o.type){case n:return Object(k.a)(Object(k.a)({},r),{},Object(vn.a)({},t,Object(k.a)(Object(k.a)({},r[t]),{},Object(vn.a)({},a,wn(e?r[t][a]&&r[t][a].data:null)))));case c:return Object(k.a)(Object(k.a)({},r),{},Object(vn.a)({},t,Object(k.a)(Object(k.a)({},r[t]),{},Object(vn.a)({},a,Sn(o.payload)))));case i:return Object(k.a)(Object(k.a)({},r),{},Object(vn.a)({},t,Object(k.a)(Object(k.a)({},r[t]),{},Object(vn.a)({},a,kn(o.payload)))));default:return r}}},_n="products/GET_PRODUCTS_REQUEST",Pn="products/GET_PRODUCTS_SUCCESS",In="products/GET_PRODUCTS_FAILURE",Un="products/GET_PRODUCT_REQUEST",Rn="products/GET_PRODUCT_SUCCESS",Tn="products/GET_PRODUCT_FAILURE",Dn="products/SET_PRICE",Nn="products/INCREASE_PRODUCT",An="products/DECREASE_PRODUCT",Qn="products/CLEAR_PRODUCT",qn=function(n,t){var e=n.replaceAll("_REQUEST",""),r="".concat(e,"_SUCCESS"),c="".concat(e,"_FAILURE");return function(e){return function(){var i=Object(mn.a)(jn.a.mark((function i(o){var a;return jn.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return o({type:n,param:e}),i.prev=1,i.next=4,t(e);case 4:a=i.sent,o({type:r,payload:a}),i.next=11;break;case 8:i.prev=8,i.t0=i.catch(1),o({type:c,payload:i.t0,error:!0});case 11:case"end":return i.stop()}}),i,null,[[1,8]])})));return function(n){return i.apply(this,arguments)}}()}}(_n,gn),Ln=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:En,r=n.replaceAll("_REQUEST",""),c="".concat(r,"_SUCCESS"),i="".concat(r,"_FAILURE");return function(r){return function(){var o=Object(mn.a)(jn.a.mark((function o(a){var d,u;return jn.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return d=e(r),a({type:n,param:r,meta:d}),o.prev=2,o.next=5,t(r);case 5:u=o.sent,a({type:c,payload:u,meta:d}),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(2),a({type:i,error:!0,payload:o.t0,meta:d});case 12:case"end":return o.stop()}}),o,null,[[2,9]])})));return function(n){return o.apply(this,arguments)}}()}}(Un,On),Fn={products:yn(),product:yn(),productPriceDefault:0,productPrice:0,productQuantity:1,diff:1};var Bn=function(){var n=Object(S.c)((function(n){return n.products.products})),t=n.data,e=n.loading,i=n.error,o=Object(S.b)();return Object(c.useEffect)((function(){return o(qn()),function(){o({type:Qn})}}),[t,o]),e&&!t?Object(r.jsxs)("div",{className:"Loading",children:[Object(r.jsx)("span",{className:"l1"}),Object(r.jsx)("span",{className:"l2"}),Object(r.jsx)("span",{className:"l3"})]}):i?Object(r.jsxs)("div",{className:"Error",children:[Object(r.jsx)("span",{}),"\uc5d0..\uc5d0\ub7ec!!"]}):t?Object(r.jsx)(fn,{products:t}):null};var Gn=function(){return Object(r.jsx)(Bn,{})},Jn=e(28);function Mn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 3rem 1rem;\n  width: 300px;\n  height: 200px;\n  background-color: #fff;\n  border-radius: 25px;\n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: 600;\n  p {\n    margin-top: 1em;\n  }\n  div {\n    display: flex;\n    margin-top: 1em;\n    button {\n      display: inline-block;\n      margin: 0 0.3em;\n      width: 108px;\n      height: 35px;\n      border: 1px solid #c2b7bb;\n      border-radius: 20px;\n      font-size: 1rem;\n      color: #949494;\n      cursor: pointer;\n      &:last-child {\n        margin: 0 0.3em;\n        width: 108px;\n        height: 35px;\n        line-height: 33px;\n        border: 1px solid #f783ac;\n        border-radius: 20px;\n        font-size: 1rem;\n        color: #f783ac;\n      }\n    }\n    a {\n      margin: 0 0.3em;\n      width: 108px;\n      height: 35px;\n      line-height: 33px;\n      border: 1px solid #f783ac;\n      border-radius: 20px;\n      font-size: 1rem;\n      color: #f783ac;\n    }\n  }\n"]);return Mn=function(){return n},n}function Hn(){var n=Object(d.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0,0,0,.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  z-index: 11;\n"]);return Hn=function(){return n},n}function Vn(){var n=Object(d.a)(["\n  padding-top: 5rem;\n  margin-top: 5rem;\n  border-top: 1px solid #ececec;\n  img {\n    width: 100%;\n  }\n  @media "," {\n    padding: 5rem 1rem 0;\n  }\n"]);return Vn=function(){return n},n}function Wn(){var n=Object(d.a)(["\n  width: 162px;\n  height: 50px;\n  background-color: #f783ac;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #fff;\n  cursor: pointer;\n  @media "," {\n    width: 49%;\n    margin-left: 1%;\n  }\n"]);return Wn=function(){return n},n}function Yn(){var n=Object(d.a)(["\n  width: 162px;\n  height: 50px;\n  background-color: #91445f;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #fff;\n  cursor: pointer;\n  @media "," {\n    width: 49%;\n  }\n"]);return Yn=function(){return n},n}function Kn(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return Kn=function(){return n},n}function Xn(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  height: 45px;\n  margin-bottom: 1.5em;\n  dt {\n    font-size: 1.3rem;\n    font-weight: bold;\n  }\n  dd {\n    font-size: 1.5rem;\n    font-weight: bold;\n  }\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(d.a)(["\n  margin-left: 1.5em;\n  display: flex;\n  text-align: center;\n  border: 1px solid #ececec;\n  span {\n    display: block;\n    width: 56px;\n    height: 50px;\n    line-height: 50px;\n  }\n  div {\n    display: flex;\n    flex-direction: column;\n    width: 33px;\n    height: 50px;\n    border-left: 1px solid #ececec;\n    font-size: 1.3rem;\n    button {\n      display: flex;\n      flex: 0.5 1 0%;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      &:last-child {\n        border-top: 1px solid #ececec;\n      }\n      svg {\n        font-size: 1.2rem;\n      }\n    }\n  }\n"]);return Zn=function(){return n},n}function $n(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  height: 52px;\n  em {\n    font-size: 1.1rem;\n    font-weight: 600;\n    font-style: normal;\n  }\n"]);return $n=function(){return n},n}function nt(){var n=Object(d.a)(["\n  padding-bottom: 1.5rem;\n  margin-bottom: 1.5rem;\n  border-bottom: 1px solid #ececec;\n  li {\n    position: relative;\n    padding-left: 15px;\n    margin-top: 1.5em;\n    dl {\n      display: flex;\n      flex-direction: row;\n      text-align: left;\n      dt {\n        width: 100px;\n        font-size: 1.1rem;\n        font-weight: 600;\n      }\n      dd {\n        font-size: 1.1rem;\n      }\n    }\n    &:before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 7px;\n      width: 4px;\n      height: 4px;\n      border-radius: 50%;\n      background-color: #faa2c1;\n    }\n    &:first-child {\n      margin-top: 0;\n    }\n  }\n  @media "," {\n     li {\n       margin-top: 0.8em;\n       padding-left: 90px;\n       &:before {\n         top: 5px;\n       }\n       dl {\n         dt {\n            position: absolute;\n            left: 10px;\n            top: 0;\n            width: auto;\n            font-size: 0.9rem;\n         }\n         dd {\n            font-size: 0.9rem;\n         }\n       }\n     }\n  }\n"]);return nt=function(){return n},n}function tt(){var n=Object(d.a)(["\n  font-size: 1.8rem;\n  font-weight: bold;\n  @media "," {\n    font-size: 1.3rem;\n  }\n"]);return tt=function(){return n},n}function et(){var n=Object(d.a)(["\n  padding-top: 1rem;\n"]);return et=function(){return n},n}function rt(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 1rem 0 0;\n  width: 335px;\n  height: 100%;\n  text-align: left;\n  @media "," {\n    width: 100%;\n    padding: 2rem 1rem 0;\n  }\n"]);return rt=function(){return n},n}function ct(){var n=Object(d.a)(["\n  width: 400px;\n  img {\n    width: 100%;\n  }\n  @media "," {\n    width: 100%;\n  }\n"]);return ct=function(){return n},n}function it(){var n=Object(d.a)(["\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  height: 400px;\n  background-color: #fff;\n  text-align: center;\n  @media "," {\n    width: 100%;\n    height: auto;\n    flex-direction: column;\n  }\n"]);return it=function(){return n},n}function ot(){var n=Object(d.a)(["\n  max-width: 800px;\n  padding: 6rem 0 7rem;\n  margin: 0 auto;\n  @media "," {\n    max-width: 100%;\n    padding: 0 0 4rem;\n  }\n"]);return ot=function(){return n},n}var at=s.c.div(ot(),(function(n){return n.theme.tablet})),dt=s.c.div(it(),(function(n){return n.theme.tablet})),ut=s.c.figure(ct(),(function(n){return n.theme.tablet})),st=s.c.div(rt(),(function(n){return n.theme.tablet})),lt=s.c.div(et()),pt=s.c.p(tt(),(function(n){return n.theme.tablet})),ft=s.c.ul(nt(),(function(n){return n.theme.tablet})),bt=s.c.div($n()),jt=s.c.div(Zn()),mt=s.c.dl(Xn()),ht=s.c.div(Kn()),xt=s.c.button(Yn(),(function(n){return n.theme.tablet})),gt=s.c.button(Wn(),(function(n){return n.theme.tablet})),Ot=s.c.div(Vn(),(function(n){return n.theme.tablet})),vt=s.c.div(Hn()),yt=s.c.div(Mn());var wt=function(n){var t=n.product,e=n.onIncrease,i=n.onDecrease,o=n.productPrice,a=n.productQuantity,d=n.onAdd,u=n.onUpdate,s=n.cart,l=Object(c.useState)(!1),p=Object(z.a)(l,2),b=p[0],j=p[1],m=Object(c.useState)(!1),h=Object(z.a)(m,2),x=h[0],g=h[1],O=t.id,v=t.name,y=t.imgSrc,w=t.detailImgSrc,S=t.bigImgSrc,k=s&&s.map((function(n){return n.itemId})),E=k.includes(O),C=k.indexOf(O),_=function(){x&&g(!1),j(!0),E?u({id:C,price:o+s[C].price,quantity:a+s[C].quantity}):d({id:O,name:v,imgSrc:y,price:o,quantity:a})},P=(o=t.price*a).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return Object(r.jsxs)(at,{children:[Object(r.jsxs)(dt,{children:[Object(r.jsx)(ut,{children:Object(r.jsx)("img",{src:S,alt:""})}),Object(r.jsxs)(st,{children:[Object(r.jsx)(pt,{children:v}),Object(r.jsxs)(lt,{children:[Object(r.jsxs)(ft,{children:[Object(r.jsx)("li",{children:Object(r.jsxs)("dl",{children:[Object(r.jsx)("dt",{children:"\uc81c\uc870\uad6d"}),Object(r.jsx)("dd",{children:"\uc0c1\ud488\uc815\ubcf4\uace0\uc2dc \ucc38\uc870"})]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("dl",{children:[Object(r.jsx)("dt",{children:"\ud0dd\ubc30\ube44"}),Object(r.jsx)("dd",{children:"\ubb34\ub8cc"})]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("dl",{children:[Object(r.jsx)("dt",{children:"\ud0dd\ubc30\uc0ac"}),Object(r.jsx)("dd",{children:"\ub85c\uc820\ud0dd\ubc30 \ub610\ub294 \ub86f\ub370\ud0dd\ubc30"})]})})]}),Object(r.jsxs)(bt,{children:[Object(r.jsx)("em",{children:"\uc8fc\ubb38\uc218\ub7c9"}),Object(r.jsxs)(jt,{children:[Object(r.jsx)("span",{children:a}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){a<10&&e()},children:Object(r.jsx)(Jn.b,{})}),Object(r.jsx)("button",{onClick:function(){a>1&&i()},children:Object(r.jsx)(Jn.a,{})})]})]})]}),Object(r.jsxs)(mt,{children:[Object(r.jsx)("dt",{children:"\ucd1d \ud569\uacc4\uae08\uc561"}),Object(r.jsxs)("dd",{children:[P,"\uc6d0"]})]}),Object(r.jsxs)(ht,{children:[Object(r.jsx)(xt,{onClick:function(){E?g(!0):_()},children:"\uc7a5\ubc14\uad6c\ub2c8"}),Object(r.jsx)(gt,{onClick:function(){return alert("\uc7a5\ubc14\uad6c\ub2c8\uc5d0 \uba3c\uc800 \ub2f4\uc544\uc8fc\uc138\uc694..!")},children:"\uad6c\ub9e4\ud558\uae30"})]})]})]})]}),Object(r.jsx)(Ot,{children:Object(r.jsx)("img",{src:w,alt:"".concat(v," \uc0c1\uc138 \uc774\ubbf8\uc9c0")})}),b&&Object(r.jsx)(vt,{children:Object(r.jsxs)(yt,{children:[Object(r.jsx)("p",{children:"\uc7a5\ubc14\uad6c\ub2c8\uc5d0 \ucd94\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){return j(!1)},children:"\uc1fc\ud551 \uacc4\uc18d\ud558\uae30"}),Object(r.jsx)(f.b,{to:"/cart",children:"\uc7a5\ubc14\uad6c\ub2c8 \ud655\uc778"})]})]})}),x&&Object(r.jsx)(vt,{children:Object(r.jsxs)(yt,{children:[Object(r.jsxs)("p",{children:["\uc774\ubbf8 \uc7a5\ubc14\uad6c\ub2c8\uc5d0 \uc788\uc2b5\ub2c8\ub2e4.",Object(r.jsx)("br",{}),"\uc0c1\ud488\uc744 \ucd94\uac00\ud558\uaca0\uc2b5\ub2c8\uae4c?"]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){return g(!1)},children:"\uc1fc\ud551 \uacc4\uc18d\ud558\uae30"}),Object(r.jsx)("button",{onClick:_,children:"\uc0c1\ud488 \ucd94\uac00\ud558\uae30"})]})]})})]})};var St=function(n){var t=n.productId,e=Object(S.c)((function(n){return n.products.product[t]}))||{loading:!1,data:null,error:null},i=e.data,o=e.loading,a=e.error,d=Object(S.c)((function(n){return{productPrice:n.products.productPrice,productQuantity:n.products.productQuantity}})),u=d.productPrice,s=d.productQuantity,l=Object(S.c)((function(n){return n.cart})),p=Object(S.b)();return Object(c.useEffect)((function(){if(p(Ln(t)),i)return p((n=i.price,{type:Dn,price:n}));var n}),[p,t,i]),o&&!i?Object(r.jsxs)("div",{className:"Loading",children:[Object(r.jsx)("span",{className:"l1"}),Object(r.jsx)("span",{className:"l2"}),Object(r.jsx)("span",{className:"l3"})]}):a?Object(r.jsxs)("div",{className:"Error",children:[Object(r.jsx)("span",{}),"\uc5d0..\uc5d0\ub7ec!!"]}):i?Object(r.jsx)(wt,{product:i,productPrice:u,productQuantity:s,onIncrease:function(){return p({type:Nn})},onDecrease:function(){return p({type:An})},onAdd:function(n,t,e,r,c){return p({type:W,item:{id:X++,itemId:(i=n).id,name:i.name,imgSrc:i.imgSrc,price:i.price,quantity:i.quantity}});var i},onUpdate:function(n){var t=n.id,e=n.price,r=n.quantity;p(Z(t,e,r))},cart:l}):null};var kt=function(n){var t=n.match.params.id;return Object(r.jsx)(St,{productId:parseInt(t,10)})};function zt(){var n=Object(d.a)(["\n  padding-top: 56px;\n  width: 100%;\n  height: 100vh;\n"]);return zt=function(){return n},n}var Et=s.c.div(zt());var Ct=function(){return Object(r.jsxs)(Et,{children:[Object(r.jsx)(w,{}),Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/",component:Gn}),Object(r.jsx)(u.a,{exact:!0,path:"/product/:id",component:kt}),Object(r.jsx)(u.a,{exact:!0,path:"/cart",component:tn})]})]})},_t=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,58)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;e(n),r(n),c(n),i(n),o(n)}))};function Pt(){var n=Object(d.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  html {\n    font-size: 14px;\n  }\n  body{\n    overflow-x: hidden;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  input, textarea, button {\n    background-color: transparent;\n    border: none;\n    outline: none;\n    appearance: none;\n    border-radius: 0;\n  }\n  h1, h2, h3, h4, h5, h6{\n    font-family: 'Roboto', sans-serif;\n  }\n  ol, ul, li {\n    list-style: none;\n  }\n  img {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  .Loading {position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);display: flex;width: 84px;height: 20px;text-align: center;justify-content: center;align-items: center;}\n  .Loading span{position: absolute;display: block;margin: 0 5px;display: inline-block;width: 20px;height: 20px;border-radius: 50%;}\n  .Loading span.l1{left: 0;background-color: #f8b26a;animation: loading1 0.8s linear infinite;}\n  .Loading span.l2{left: 30px;background-color: #abbd81;animation: loading2 0.8s linear infinite;}\n  .Loading span.l3{left: 60px;background-color: #e15b64;animation: loading3 0.8s linear infinite;}\n\n  @keyframes loading1 {\n    0% {\n      left: 0;\n      transform: scale(0);\n    }\n    25% {\n      left: 0;\n      transform: scale(1);\n    }\n    50% {\n      left: 30px;\n      transform: scale(1);\n    }\n    75% {\n      left: 60px;\n      transform: scale(1);\n    }\n    100% {\n      left: 60px;\n      transform: scale(0);\n    }\n  }\n\n  @keyframes loading2 {\n    0% {\n      left: 30px;\n      transform: scale(1);\n    }\n    25% {\n      left: 60px;\n      transform: scale(1);\n    }\n    50% {\n      left: 60px;\n      transform: scale(0); \n    }\n    75% {\n      left: 0;\n      transform: scale(0);\n    }\n    100% {\n      left: 30px;\n      transform: scale(1);\n    }\n  }\n\n  @keyframes loading3 {\n    0% {\n      left: 60px;\n      transform: scale(0);\n    }\n    25% {\n      left: 0;\n      transform: scale(0);\n    }\n    50% {\n      left: 0;\n      transform: scale(1); \n    }\n    75% {\n      left: 30px;\n      transform: scale(1);\n    }\n    100% {\n      left: 60px;\n      transform: scale(1);\n    }\n  }\n\n  .Error {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 5rem 0 0;\n    font-size: 3rem;\n    font-weight: bold;\n    span {\n      display: block;\n      margin-bottom: 1em;\n      width: 300px;\n      height: 300px;\n      border-radius: 50%;\n      background: url('/syshop/error.jpeg') no-repeat center;\n      background-size: 410px;\n    }\n    @media "," {\n      padding: 3rem 0 0;\n      font-size: 2rem;\n      span {\n        width: 200px;\n        height: 200px;\n        background-size: 300px; \n      }\n    }\n  }\n"]);return Pt=function(){return n},n}var It=Object(s.b)(Pt(),(function(n){return n.theme.tablet})),Ut="900px",Rt="1200px",Tt="1800px",Dt={mainColor:"#f783ac",mobile:"(max-width: ".concat("600px",")"),tablet:"(max-width: ".concat(Ut,")"),laptop:"(max-width: ".concat(Rt,")"),desktop:"(min-width: ".concat(Tt,")")},Nt=e(38),At=e(12),Qt=Object(At.combineReducers)({cart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return n.concat(t.item);case Y:return n.filter((function(n){return n.id!==t.id}));case K:return n.map((function(n){return n.id===t.id?Object(k.a)(Object(k.a)({},n),{},{price:t.price,quantity:t.quantity}):n}));default:return n}},products:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _n:case Pn:case In:return zn(_n,"products",!0)(n,t);case Un:case Rn:case Tn:return Cn(Un,"product",!0)(n,t);case Dn:return Object(k.a)(Object(k.a)({},n),{},{productPriceDefault:t.price,productPrice:t.price});case Nn:return Object(k.a)(Object(k.a)({},n),{},{productPrice:n.productPrice+n.productPriceDefault,productQuantity:n.productQuantity+n.diff,diff:1});case An:return Object(k.a)(Object(k.a)({},n),{},{productPrice:n.productPrice-n.productPriceDefault,productQuantity:n.productQuantity-n.diff,diff:1});case Qn:return Object(k.a)(Object(k.a)({},n),{},{productPrice:0,productQuantity:1,productPriceDefault:0});default:return n}}}),qt=e(29),Lt=e(39),Ft=e.n(Lt),Bt=e(40),Gt=e(41),Jt={key:"root",storage:Ft.a},Mt=Object(qt.a)(Jt,Qt);var Ht=function(){var n=Object(At.createStore)(Mt,Object(Bt.composeWithDevTools)(Object(At.applyMiddleware)(Gt.a)));return{store:n,persistor:Object(qt.b)(n)}}(),Vt=Ht.store,Wt=Ht.persistor;a.a.render(Object(r.jsx)(S.a,{store:Vt,children:Object(r.jsx)(Nt.a,{loading:null,persistor:Wt,children:Object(r.jsx)(f.a,{basename:"/syshop",children:Object(r.jsxs)(s.a,{theme:Dt,children:[Object(r.jsx)(It,{}),Object(r.jsx)(Ct,{})]})})})}),document.getElementById("root")),_t()}},[[57,1,2]]]);
//# sourceMappingURL=main.c07a3843.chunk.js.map