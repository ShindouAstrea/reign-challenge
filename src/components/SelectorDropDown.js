import React,{useState,useEffect} from "react";
import {Row,Col} from 'react-bootstrap';
import '../css/DropDown.css' ;


export default function SelectorDropDown(){
    //Hook to get text to search in a future
    const [url,setUrl]=useState("http://hn.algolia.com/api/v1/search?query=") ;
    const[arrayPost,setPost]=useState([]);
    //Get the actual text and display the search if exists
    const handleDropDown=()=>{
        const textFilter = document.getElementById("input").value;
        if(textFilter){
            document.getElementById("RectangleDropped").style.display="block";
        } else document.getElementById("RectangleDropped").style.display="none";
       setUrl(`http://hn.algolia.com/api/v1/search?query=${textFilter}`);
       console.log(url);
    }
     /**
     * This arrow function consume hacker news api to get a list with all the post from the api,
     * the response  json has 20 elements per page.
     * @param {string} url the get url from hacker news api
     * @returns {Array} An Array with items copied from the response JSON.
     */
      const getPosts =(url)=>{
        fetch(url)
        .then(response=>response.json())
        .then((data)=> {setPost(data.hits)})
        .catch(error=>console.log(error))
      };
      useEffect(()=>{
        getPosts(url);
      },[url])
    return(
            <div >
                <input className="Rectangle-26-Copy-23" onChange={handleDropDown}id="input" type="text" placeholder="Type here to filter posts"></input>
                <Row>
                    <div id ="RectangleDropped" className="RectangleDropped" >
                    <Row>
                        {
                            arrayPost.map((item,index)=>(
                                <Col key={index}>
                                    <RectangleItem item={item}/>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
                </Row>
                    
            </div>
    );
}
/**
 * Function that render an item with the specific filter
 * @param {object} item Item to renders
 * @returns {Render}  Item rendered inside of  a rectangle
*/
function RectangleItem({item}){
    /**
    * Open a new browser tab with the link of selected post
    */

    const openNewTabWithUrlPost=()=>{
        window.open(item.url) 
    }
    return (
        <div onClick={openNewTabWithUrlPost} className="RectangleItemSearch">
            <span className="SearchTitle">{item.title}</span>
        </div>
    );
}