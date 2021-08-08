import React from 'react'
import "./App.css"

//React router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// Layout 
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';

// Pages
import Home from './Pages/Home';
import NotFound from './Pages/NotFound'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import BlankPage from './Pages/BlankPage'
import Buttons from './UserInterface/Buttons';

//UserInterface


const App = () => {
  return (
    <Router>
      <div className="container-fluid gs-cont">
        <div className="gs-container">
          <Sidebar />
          <div className="gs-body gs-col container-fluid bg-light" id="gs-body">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/blankpage" component={BlankPage} />
              <Route exact path="/buttons" component={Buttons} />
              
              <Route exact component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>

  )
}

export default App
