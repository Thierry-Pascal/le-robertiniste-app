import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Article from "./Components/Article";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/articles/:pathname' element={<Article />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
