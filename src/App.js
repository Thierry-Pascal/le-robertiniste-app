import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Article from "./Components/Article";
import HashLoader from "react-spinners/HashLoader";

function App() {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    let timer = Math.floor(Math.random() * 2800)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, timer)
  }, [])

  return (
    <div className="App">
      {
        loading ?
        <div>
          
          <div className="app-loader">
            <HashLoader color={'#FCBA03'} loading={loading} size={60} />
            <p>Retrieving the  best articles for you....</p>
          </div>
        </div>
        :

        <div>
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path='/articles/:pathname' element={<Article />}/>
            </Routes>
          </Router>
          <Footer />
        </div>
      }
      
    </div>
  );
}

export default App;
