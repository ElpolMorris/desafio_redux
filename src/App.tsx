import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import UserList from './containers/user-list/UserList'
import store from './store'
import UserCreate from './containers/user-create/UserCreate'
import UserDetail from './containers/user-detail/UserDetail'
import ProductList from './containers/product-list/ProductList'
import ProductDetail from './containers/product-detail/ProductDetail'
import ProductCreate from './containers/product-create/ProductCreate'
import ProductUpdate from './containers/product-update/ProductUpdate'
import NavToProducts from './components/nav-to-products/NavToProducts'

function App() {
  return (
    <div className="container mt-4">
      <Provider store={store}>
        <Router>
          <Route path="/" exact>
            <NavToProducts />
            <UserList />
          </Route>
          <Route path="/create">
            <UserCreate />
          </Route>
          <Route path="/detail/:id">
            <UserDetail />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route path="/products/detail/:id">
            <ProductDetail />
          </Route>
          <Route path="/products/create">
            <ProductCreate />
          </Route>
          <Route path="/products/update/:id">
            <ProductUpdate />
          </Route>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
