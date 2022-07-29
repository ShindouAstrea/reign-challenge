import React from "react";
import logo from "../assets/logo.svg";
import '../css/CardPost.css';

export default function CardPost({item}){
    const time = JSON.stringify(item.created_at)
    const hours = time.slice(12,20)
    const postTime = timeAgo(time.slice(1,11).concat(" ",hours) );
    const handleClick=()=>{
       window.open(item.story_url)
    };
    return(
        <div onClick={handleClick} className="RectanglePost" >
            <ul className="PostContent">
                <li><span className="-hours-ago-by-autho Text-Style-2">{postTime} ago by {item.author}</span></li>
                <div className="TextContent">Texto {item.story_title}
                <img src={logo}
                    className="iconmonstr-favorite-3">
                </img>
                </div>
                
            </ul>
        </div>
           
    );
}
function timeAgo(time){
    const year = parseInt(time.slice(0,5)) ;

    const month=parseInt(time.slice(6,8));

    const day =parseInt(time.slice(8,11));

    const d = new Date()
    const dayNow = parseInt(d.getDate());
    const monthNow = parseInt(d.getMonth())+1;
    const yearNow = parseInt(d.getFullYear());
    const hoursNow = parseInt(d.getHours());
    const minutesNow = parseInt(d.getMinutes());
    const secondsNow = parseInt(d.getSeconds());

    if(year == yearNow){
        if(month ==monthNow){
            if(dayNow-day ==1) {
                return `${dayNow-day} day `
            }
            return `${dayNow-day} days`
        }
        else if(monthNow-month==1) {
            return `${monthNow-month} Month `
        }
        return `${monthNow-month} Months`

    } else if(yearNow-year ==1) {
        return `${yearNow-year} year `
    }
    return `${yearNow-year} years`
}
