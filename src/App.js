import React from 'react'
import Topbar from './components/Topbar/Topbar'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from './pages/User/List';
import UserEdit from './pages/User/UserEdit';
import UserAdd from './pages/User/UserAdd';
import ProductList from './pages/Products/List';
import ProductEdit from './pages/Products/ProductEdit';
import ProductAdd from './pages/Products/ProductAdd';
const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
           <List />
          </Route>
          <Route path="/user/:userId">
          <UserEdit />
          </Route>
          <Route path="/newUser">
          <UserAdd />
          </Route>
          <Route path="/products">
            <ProductList/>
          </Route>
          <Route path="/product/:productId">
            <ProductEdit/>
          </Route>
          <Route path="/newproduct">
            <ProductAdd/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
