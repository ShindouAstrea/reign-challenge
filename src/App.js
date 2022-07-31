import './App.css';
import {Container,Row,Col } from 'react-bootstrap';
import SelectorRoute from './components/SelectorRoute';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AllPost from './pages/AllPost';
import FavPost from './pages/FavPost';
import React from 'react';

function App() {

  
  return (
    <div className="Front-End-Test---Home-view">
      <div className="Rectangle-2-Copy">
        <span className="HACKER-NEWS Text-Style">HACKER NEWS</span>
      </div>
        <Container>
        <Row>
            <Col>
              <BrowserRouter>
              <Routes>
                <Route path="/" element ={<SelectorRoute/>}>
                  <Route index element={<AllPost />}/>
                  <Route path="Faves" element={<FavPost/>}/>
                </Route>
              </Routes>
              </BrowserRouter>
            </Col>
            
          </Row>
        </Container>
          
          
       
    </div>
  );
}

export default App;