import React from "react";
import '../styles.css';

export default function Header(){
  
    return(
        <div>
            <img className="logo" src="logo.png" alt="logo"/>
            <h2 className="sub-title">its time for popcorn! find your next movie here</h2>
        </div>
    );

}