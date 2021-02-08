const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const products = [
  {
    id: 1,
    name: '에비츄 인형 (25cm) _훔쳐보츄',
    imgSrc: '/syshop/products/1.jpg',
    bigImgSrc: '/syshop/products/big/1.jpg',
    detailImgSrc: '/syshop/products/detail/1.jpg',
    price: 15000
  },
  {
    id: 2,
    name: '에비츄 인형 (25cm) _옷입었츄',
    imgSrc: '/syshop/products/2.jpg',
    bigImgSrc: '/syshop/products/big/2.jpg',
    detailImgSrc: '/syshop/products/detail/2.jpg',
    price: 15000
  },
  {
    id: 3,
    name: '에비츄 인형 (25cm) _에비츄맨',
    imgSrc: '/syshop/products/3.jpg',
    bigImgSrc: '/syshop/products/big/3.jpg',
    detailImgSrc: '/syshop/products/detail/3.jpg',
    price: 15000
  },
  {
    id: 4,
    name: '에비츄 인형 (25cm) _놀랐츄',
    imgSrc: '/syshop/products/4.jpg',
    bigImgSrc: '/syshop/products/big/4.jpg',
    detailImgSrc: '/syshop/products/detail/4.jpg',
    price: 15000
  },
  {
    id: 5,
    name: '에비츄 전신 키링 (15cm)_행복해츄',
    imgSrc: '/syshop/products/5.jpg',
    bigImgSrc: '/syshop/products/big/5.jpg',
    detailImgSrc: '/syshop/products/detail/5.jpg',
    price: 12000
  },
  {
    id: 6,
    name: '에비츄 인형 (35cm)',
    imgSrc: '/syshop/products/6.jpg',
    bigImgSrc: '/syshop/products/big/6.jpg',
    detailImgSrc: '/syshop/products/detail/6.jpg',
    price: 34000
  },
  {
    id: 7,
    name: '에비츄 얼굴쿠션 - 윙크해츄',
    imgSrc: '/syshop/products/7.jpg',
    bigImgSrc: '/syshop/products/big/7.jpg',
    detailImgSrc: '/syshop/products/detail/7.jpg',
    price: 29000
  },
  {
    id: 8,
    name: '에비츄 얼굴 쿠션_살쪘츄',
    imgSrc: '/syshop/products/8.jpg',
    bigImgSrc: '/syshop/products/big/8.jpg',
    detailImgSrc: '/syshop/products/detail/8.jpg',
    price: 29000
  }
];

export const getProducts = async () => {
  await sleep(500);
  return products;
};

export const getProductById = async id => {
  await sleep(500);
  return products.find(product => product.id === id);
};
