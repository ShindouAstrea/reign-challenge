
import React from "react";
import '../css/SelectorRoute.css' ;
import {Row,Col} from 'react-bootstrap';
import {Link,Outlet} from 'react-router-dom';


export default function SelectorRoute(){
    return(
            <Row >
                <div className="Buttons">
                        <Col>
                        <Link className= "Rectangle" to="/">
                                <span className="Text">All</span>
                        </Link>
                   
                        <Link className= "Rectangle" to="/Faves">
                                <span className="Text">Faves</span>
                        </Link>
                    </Col>
                    <Outlet/>

                </div>
                    
            </Row>
           
    );
}
