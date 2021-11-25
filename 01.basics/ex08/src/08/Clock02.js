import React from "react";

export default function(){
    const date = new Date();        //객체가 없기때문에 함수 호출하고 끝이다. 모두 지역이므로.. 상태관리라는 게 존재하지 않는다. 객체(class)는 가능하다. 따라서 상태처리를 위해 후크를 사용
  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    
    const htmls = "<span>" + 
        ('0' + hours).slice(-2)  + 
        " : " + 
        ('0' + minutes).slice(-2) + 
        " : " +
        ('0' + seconds).slice(-2)
        "</span>";
    const o ={
        __html: htmls
    }
    return(

        //HTML 태그를 동적으로 생성하여 JSX element의 특정 속성으로 추가하는 작업은 금지하고 있지만, 
        //XSS(Cross Site Scripting) 보호기능을 끄고 사용할 수는 있다.
        <div dangerouslySetInnerHTML={o}/>
    )
}