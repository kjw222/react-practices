import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'; //개별적으로 받은 것

{/**solid를 위한 구문!!! examples로 사용하면 상관 없음*/}
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';         //통째로 받은 것
import {far} from '@fortawesome/free-regular-svg-icons';  
 

export default function() {
      {/**solid를 위한 구문!!!*/}
    library.add(faBell, fab, far);
    return (
        
        <div>
            {/**brand 통째로 로 다운받았을 때, 사용방법*/}
            <FontAwesomeIcon icon={["far", "bell"]}/>
            {/**solid 개별적으로 다운받았을 때, 사용방법*/}
            <FontAwesomeIcon icon={["fab", "bell"]}/>

            {/**examples -개별적으로 다운받앗을 때, 사용방법*/}
            <FontAwesomeIcon icon={faBell}/>
            <FontAwesomeIcon icon={faCheckCircle}/>
            <FontAwesomeIcon icon={faTimesCircle}/>

             {/**brands 통째로 다운받았을 떄 사용방법*/}
             <FontAwesomeIcon icon={["fab", "github"]}/>
             <FontAwesomeIcon icon={["fab", "apple"]}/>
             <FontAwesomeIcon icon={["fab", "nike"]}/>
        </div>
    )
}