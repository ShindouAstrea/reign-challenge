import React, { useEffect, useState } from   'react';
import CardPost from '../components/CardPost';
import Pagination from '@mui/material/Pagination';
import {Row,Col } from 'react-bootstrap' ;
import SelectorDropDown from '../components/SelectorDropDown';

import '../css/CardPost.css' ;

export default function FavPost(){
  const [url,setUrl]=useState(`https://hn.algolia.com/api/v1/search_by_date?page=0`);
  const[arrayPost,setPost]=useState([]);
  const [numberPages,setNumber]=useState();
  const [page, setPage] = React.useState(1);
  
  const handleChange = (event, value) => {
    setPage(value);
    setUrl(`https://hn.algolia.com/api/v1/search_by_date?page=${value}`)
  };
    const getPosts =(url)=>{
      fetch(url)
      .then(response=>response.json())
      .then(data=> {setNumber((data).nbPages);setPost((data).hits)})
      .catch(error=>console.log(error))
    } ;
    useEffect(()=>{
      getPosts(url);
    },[url])
    return(
      <Row>
        <SelectorDropDown/>
        <Row>
          {
            arrayPost.map((item,index)=>(
              <Col key={index}>
                <CardPost item={item}/>
              </Col>
            ))
          }
        </Row>
      <Pagination count={numberPages} page={page} onChange={handleChange}/>
    </Row>   
    );
}