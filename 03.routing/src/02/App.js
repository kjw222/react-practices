import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: '/'});

    useEffect(()=>{
        const handlePopState = (e)=>setRoute(e.state);

       // window.addEventListener('popstate')  여기서부터 다시!!
    })

    const handleLinkClick = (e) => {        //클릭했을 때 바로 실행
        e.preventDefault();

        
        const url = e.target.href.substr(e.target.href.lastIndexOf('/'));
        window.history.pushState({page: url}, e.target.text, url)        //뒤로가기 같은 거 지원
        setRoute({page:url});

    }

    const router = function () {
        let component = null;
        switch (route.page) {
            case '/':
                component = <Main/>;
                break;
            case '/gallery':
                component = <Gallery/>;
                break;
            case '/guestbook':
                component = <Guestbook/>;
                break;
        }

        return component;
    };

    return (
        <div>
            <div>{route.page}</div>
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
        </div>
    )
}