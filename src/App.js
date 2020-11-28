
import React from 'react'
import './App.css';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import Properties from './components/Properties';

function App() {
  const loadCanvas = (e) => {
    if(e.target.closest(".blockelem") !== null) {
      document.getElementById("properties").classList.add("expanded");
      document.getElementById("propwrap").classList.add("itson");
    }
  }
  return (
    <div >
     <Header />
     <Sidenav />
     <Properties />
     <div id="canvas" onClick={(e) => loadCanvas(e)}></div>
    </div>
  );
}

export default App;
