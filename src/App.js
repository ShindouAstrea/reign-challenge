import logo from './logo.svg';
import './App.css';
import './css/Buttons.css'
import SelectorFav from './components/SelectorFav';
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import AllPost from './pages/AllPost';
import FavPost from './pages/FavPost';
import {Pagination} from '@mui/material';
import React, { useEffect,useState } from 'react';

function App() {

  
  return (
    <div className="Front-End-Test---Home-view">
      <div className="Rectangle-2-Copy">
        <span className="HACKER-NEWS Text-Style">HACKER NEWS</span>
      </div>
      
      
        <Router>
          <SelectorFav/>
          <div className="ContainerPosts">
        {/* Links for all the routes */}
            <Routes>
              <Route path="All" element={<AllPost />}/>
              <Route path="Faves" element={<FavPost/>}/>
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;