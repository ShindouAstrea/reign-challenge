import React, { useEffect, useState } from   'react';
import CardPost from '../components/CardPost';
import {Row,Col} from 'react-bootstrap';
import SelectorDropDown from '../components/SelectorDropDown';
//Api pagination
import Pagination from '@mui/material/Pagination';


import '../css/Pagination.css' ;
import '../css/CardPost.css' ;


/**
 * This function render per page all the posts from hacker news api, the actual posts limit per page it's 20.
 * @returns render all posts from the api hacker news.
 */
export default function AllPost(){
 
  const [url,setUrl]=useState(`https://hn.algolia.com/api/v1/search_by_date?page=0`);
  const[arrayPost,setPost]=useState([]);
  const [numberPages,setNumber]=useState();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    setUrl(`https://hn.algolia.com/api/v1/search_by_date?query=&page=${value-1}`)
  };
    /**
     * This arrow function consume hacker news api to get a list with all the post from the api,
     * the response  json has 20 elements per page.
     * @param {string} url the get url from hacker news api
     * @returns {Array} An Array with items copied from the response JSON.
     */
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
              <Col sm key={index}>
                <CardPost item={item}/>
              </Col>
            ))
          }
        </Row>
        <Row>
            <Pagination count={numberPages} page={page} onChange={handleChange} />  
        </Row>
      </Row>   
      
      
    );
}