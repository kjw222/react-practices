import React from "react";

export default function(){
    const date = new Date();        //객체가 없기때문에 함수 호출하고 끝이다. 모두 지역이므로.. 상태관리라는 게 존재하지 않는다. 객체(class)는 가능하다. 따라서 상태처리를 위해 후크를 사용
  
    let hours = date.getHours();
    let minites = date.getMinutes();
    let seconds = date.getSeconds();
    
    

    return(
        <div>
            {('0'+(hours>12 ? hours - 12 : hours)).slice(-2)}
            {' : '} 
            {('0'+minites).slice(-2)}
            {' : '} 
            {('0'+seconds).slice(-2)} 
            {'  '}  
            {hours>12?'PM':'AM'}
        </div>

    )
}