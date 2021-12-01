import React from "react";
import Guestbook from "./Guestbook";
import Guestbook_MessageBox from "./Guestbook_MessageBox";
import Guestbook__Delete from "./Guestbook__Delete";
import './assets/css/styles.css';

export default function(){
    return(
        <div id="App">
               
            <Guestbook/>
            <Guestbook__Delete/>
            <Guestbook_MessageBox/>
           

        </div>
    )
}