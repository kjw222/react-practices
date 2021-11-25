//import React from "react";        //전체를 다 받는 법

import React, {Fragment} from "react";          //개별적으로 받는 법 Fragment도 함수다. div 대신 Fragment를 사용해도 되는데, 브라우저에서 확인해보면 div는 확인이 되고, Fragment는 보이지 않는다.
import Header from './Header';
import Content from "./Content";
export default function(){
    return(
        // <Fragment>
        //        <Header/>
        //         <Content/>        
        // </Fragment>
        React.createElement(Fragment, null, React.createElement(Header, null), React.createElement(Content, null))  //어떤 엘러먼트로 감쌀지, null은 뭐징.., 부모자리, 자식자리
    )
}