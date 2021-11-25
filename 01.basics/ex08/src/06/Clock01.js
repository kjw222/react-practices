import React from "react";

export default function(){
    const date = new Date();        //객체가 없기때문에 함수 호출하고 끝이다. 모두 지역이므로.. 상태관리라는 게 존재하지 않는다. 객체(class)는 가능하다. 따라서 상태처리를 위해 후크를 사용
    let hours = date.getHours();
    let minites = date.getMinutes();
    let seconds = date.getSeconds();

    let session = 'AM';
    if(hours>12){session='PM';}
    if(hours<10){hours=('0'+hours).slice(-2);}
    // if(minites<10){minites='0'+minites;}
    // if(seconds<10){seconds='0'+seconds;}

    return(
        <div>
            {hours}
            : 
            {minites}
            :
            {seconds}  
            {session}


            //삼항연산자 를 통해서!
            {hours} :   {minites <10 ? ('0'+minites): minites} : {('0'+seconds).slice(-2)} {session}
        </div>

    )
}