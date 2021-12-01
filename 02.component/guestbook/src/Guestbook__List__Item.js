import React from "react";

export default function({title, content}){
    const onClickdelBtn = (e) =>{
        console.log('onClickdelBtn no: ', {title})
    }
        
    
    return(
        <li className="Guestbook__List__Item" >
            <strong>{title}</strong>
            <p>{content}
            </p>
            <strong></strong>
            <a href='' className='Delete' onClickdelBtn>삭제</a>
         </li>
    )
}