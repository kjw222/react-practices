import React from 'react';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    return (
        //*//
        <div>React Router 라이브러리 사용해 보기

            <BrowserRouter>
                
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/gallery' element={<Gallery/>}/>
                    <Route path='/Guestbook' element={<Guestbook/>}/>
                </Routes>
            </BrowserRouter>

        </div>

            /*
        <div>React Router 라이브러리 사용해 보기

        <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/Guestbook' element={<Guestbook/>}/>
            </Routes>
        </BrowserRouter>

        </div>
        /*/
    );
}