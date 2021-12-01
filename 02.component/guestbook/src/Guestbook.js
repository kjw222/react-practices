import React from "react";
import Guestbook__Form from "./Guestbook__Form";
import Guestbook__List from "./Guestbook__List";

export default function(){
    return(
        <div className="Guestbook">
            <h1>방명록</h1>
            <Guestbook__Form/>
            <Guestbook__List/>

        </div>
    )
}