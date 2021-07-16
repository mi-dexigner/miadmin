import React from 'react'
import Topbar from './components/Topbar/Topbar'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from './pages/User/List';
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
           
          </Route>
          <Route path="/newUser">
            
          </Route>
          <Route path="/products">
            
          </Route>
          <Route path="/product/:productId">
            
          </Route>
          <Route path="/newproduct">
            
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
