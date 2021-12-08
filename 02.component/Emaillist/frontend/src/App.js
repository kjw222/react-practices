import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Emaillist from "./Emaillist";
import RegisterForm from "./RegisterForm";

import datas from './assets/json/data.json';

import './assets/scss/App.scss';


export default function(){
    const [emails, setEmails] = useState([]);
    const [keyword, setKeyword]=useState('');
    
    const notifyKeywordChanged =(keyword)=>{
      setKeyword(keyword);  // 자식에게서 받아온 값을 세팅해주는 구문
    };
    useEffect(async ()=>{
        try{
            const response = await fetch('http://localhost:8080/api', {
                method: 'get',
                mode: 'cors',    //no-cors, cors, same-origin 이 있는데 same-origin이 default
                credentials: 'same-origin',     //여기도 default는 same-orifin. include, omit, same-origine     인증과 관련된 부분
                cache: 'no-cache',       //no-cache, reload, force-cache, dfault*
                headers: {
                    'Content-Type': 'application/json',         //cf. application/x-www-form-urlencoded
                    'Accept': 'application'                     //cf. text/html
                },
                redirect:  'follow',     //통신을 했는데 redirect응답을 했다면? .. follw*, error, manual(response.url)
                referrer: 'client',        //no-referrer, *client
                body: null
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const jsonResult = await response.json();
            if(jsonResult.result !== 'success'){
                throw new Error(`${jsonResult.result} ${jsonResult.message}`);
            }
            setEmails(jsonResult.data);
        }catch(err){
            console.log(err);
        }
    },[])
    
    return(
        <div className='App'>
            <RegisterForm/>
            <Searchbar keyword={keyword} callback={notifyKeywordChanged}/>
            <Emaillist keyword={keyword} emails={emails}/>
        </div>
    )
}