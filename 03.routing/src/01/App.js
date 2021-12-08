import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState('');
  
    //component did mount
    useEffect=()=>{
        //did mount 통신을 시작하는 장소, 타이머 시작 장소
        const handleHashChange = () => {setRoute(window.location.hash.substr(1))};

        window.addEventListener('hashchange', handleHashChange)
        return()=>{
            //unmount 통신 끝내는 장소, 타이머 끝나는 장소
            window.removeEventListener('hashchange', handleHashChange)
        }
    },[]
    return (()=>{       //이 함수를 선언과 동시에 실행.
        switch(route){
            case '/': return <main/>;
            case '/guestbook': return <Guestbook/>
            case '/gallery': return <Gallery/>
            default: return null;
                 
        }
        //return <div>{`${route}에 맞는 컴포넌트를 리턴합니다`}</div>
    })();
    
    //(<div>Hash Route 직접 만들어 보기 : ${route}</div>);
}