import React from "react";
import './App.css';
import  Home from "./pages/Home";
//import Search from "./pages/Search"
import SearchPage from "./SearchPage";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
    <Router>
       <Routes>
          <Route path='/Search' element={<SearchPage/>} />
          <Route path='/' element={<Home/>}/>
       </Routes>
    </Router>  
    </div>
  );
}

export default App;
