import { Button } from "react-bootstrap";
import React from "react";
import '../css/Buttons.css' ;
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import AllPost from "../pages/AllPost";

export default function SelectorFav(props){
    return(
        <div className="Buttons">
            <Link to ="All">
                <Button >
                    <span className="All">All</span>
                </Button>
            </Link> 
            <Link to ="Faves">
                <Button >
                  <span className="My-faves Text-Style-3">My faves</span>
                </Button>
            </Link>
          </div> 
    );
}