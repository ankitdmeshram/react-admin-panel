import React from 'react'
import "./App.css"
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Home from './Pages/Home';

const App = () => {
  return (
    <div className="container-fluid gs-cont">
      <div className="gs-container">
        <Sidebar />
        <div className="gs-body gs-col container-fluid bg-light" id="gs-body">
          <Header />
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App
