import React from "react";

export default function(){
    const date = new Date();        //객체가 없기때문에 함수 호출하고 끝이다. 모두 지역이므로.. 상태관리라는 게 존재하지 않는다. 객체(class)는 가능하다. 따라서 상태처리를 위해 후크를 사용
  
    const hours = date.getHours();
    const minites = date.getMinutes();
    const seconds = date.getSeconds();
    
    

    return(
        /**
         * comment01: 컴포넌트 안이 아니기 때문에 자바스크립트 구문이 가능하다.
         */
        <div /**  comment02: 여기서도 주석 사용은 가능하다. 하지만 비추천
         * */className="Clock02" title = "시계" porpe01=''>
        {/**
         * JSX는 HTML이 아니다!! <!-- --> 주석은 사용할 수 없다.
         */}
         //comment03 : JSX 안에서의 주석을 사용하면 그대로 나온다.
            
            {('0'+(hours>12 ? hours - 12 : hours)).slice(-2)}
            {' : '} 

            {/**comment04: 이런 방식으로 표현식이 실행되는 블록 안에서 주석을 달아야 한다: 추천 */ }
            
            {('0'+minites).slice(-2)}
            {' : '} 
            {('0'+seconds).slice(-2)} 
            {'  '}  
            {hours>12?'PM':'AM'}
        </div>

    )
}