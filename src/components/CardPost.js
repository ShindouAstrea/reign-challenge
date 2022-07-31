import React from "react";
// import logoHeart from "../assets/logoHeart.svg";
import iconTime from "../assets/iconTime.svg"
import {Col,Row} from "react-bootstrap";
import '../css/CardPost.css';

export default function CardPost({item}){
    const time = JSON.stringify(item.created_at)
    const hours = time.slice(12,21)
    const postTime = timeAgo(time.slice(1,11).concat(" ",hours) );
    const handleClick=()=>{
       window.open(item.story_url)
    };
    return(
        <div>
            <div onClick={handleClick} className="RectanglePost" >
                <Row>
                    <Col>
                        <ul className="PostContent">
                            <li>
                                <img src={iconTime}
                                    alt="iconTime"
                                    className="iconTime"></img>
                                <span className="-hours-ago-by-autho Text-Style-2">{postTime} ago by {item.author}</span>
                            </li>
                            <li><span className="TextContent">{item.story_title}</span></li>
                        </ul>
                    </Col> 
                </Row>
            </div>
        </div>      
    );
}
/**
 * This function calculate the time's difference between local time & post's time. 
 * @param {string} time  String that represents a full time of the post
 * @returns {string} A Strin that indicate How many time ago was the post  compare with local time.
 */
function timeAgo(time){
//Time parse into a Int , each const save a extract of time  ( seconds, minutes , hour, day, month,year)
    const year = parseInt(time.slice(0,5)) ;
    const month=parseInt(time.slice(6,8));
    const day =parseInt(time.slice(8,11));
    const hour = parseInt(time.slice(12,14));
    const minutes =parseInt(time.slice(15,17));
    const seconds = parseInt(time.slice(18,21));
    
//Intances of UTC time
    const d = new Date()
    const dayNow = (d.getUTCDate());
    const monthNow = d.getUTCMonth()+1;
    const yearNow = d.getUTCFullYear();
    const hoursNow = d.getUTCHours();
    const minutesNow = d.getUTCMinutes() ;
    const secondsNow = d.getUTCSeconds() ;
    if(year === yearNow){
        if(month ===monthNow){
            if(dayNow===day){
                if(hour===hoursNow){
                    if(minutesNow===minutes){
                        if(secondsNow-seconds ===1) {
                            return `${secondsNow-seconds} second `
                        }else return `${secondsNow-seconds} seconds `
                    } else if(minutesNow-minutes===1){
                        return `${minutesNow-minutes} minute `
                    }else return `${minutesNow-minutes} minutes`
                } else if(hoursNow-hour===1){
                    return `${hoursNow-hour} hour `
                } return `${hoursNow-hour} hours `
            }else if(dayNow-day ===1) {
                    return `${dayNow-day} day `
                }else  return `${dayNow-day} days`   
        }
        else if(monthNow-month===1) {
            return `${monthNow-month} Month `
        }
        return `${monthNow-month} Months`

    } else if(yearNow-year ===1) {
        return `${yearNow-year} year `
    }
    return `${yearNow-year} years`
}
