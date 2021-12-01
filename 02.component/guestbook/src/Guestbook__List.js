import React from "react";
import Guestbook__List__Item from './Guestbook__List__Item';
import datas from './assets/json/data.json';


export default function(){
     
        return(
            <ul className="Guestbook__List" >
                {datas.map((data)=> 
                <Guestbook__List__Item title={data.title} content={data.content}/>
                )}
            </ul> 
        )

    
}

