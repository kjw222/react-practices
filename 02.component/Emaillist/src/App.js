import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Emaillist from "./Emaillist";
import RegisterForm from "./RegisterForm";

import datas from './assets/json/data.json';

import './assets/scss/App.scss';


export default function(){
    const [keyword, setKeyword]=useState('');
    
    const notifyKeywordChanged =(keyword)=>{
         
      setKeyword(keyword);  // 자식에게서 받아온 값을 세팅해주는 구문
    };
    
    return(
        <div className='App'>
            <RegisterForm/>
            <Searchbar keyword={keyword} callback={notifyKeywordChanged}/>
            <Emaillist keyword={keyword} emails={datas}/>
        </div>
    )
}