import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import CartPage from '../pages/CartPage';
import ProductListPage from '../pages/ProductListPage';
import ProductPage from '../pages/ProductPage';

const Wrapper = styled.div`
  padding-top: 56px;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductListPage}></Route>
        <Route exact path="/product/:id" component={ProductPage}></Route>
        <Route exact path="/cart" component={CartPage}></Route>
      </Switch>
    </Wrapper>
  );
}

export default App;
