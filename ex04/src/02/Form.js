import React, { useState } from 'react';
import './assets/Form.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'; //개별적으로 받은 것

// {/**solid를 위한 구문!!! examples로 사용하면 상관 없음*/}
// import {library} from '@fortawesome/fontawesome-svg-core';
// import {fab} from '@fortawesome/free-brands-svg-icons';         //통째로 받은 것
// import {far} from '@fortawesome/free-regular-svg-icons';  

    //비제어? 값을 상태에서 관리. input value값을 넣어주면 제어컴포넌트(입력도 안됨.)가 됨. 비제어로 쓰고 싶으면 value 안 넣어주면 됨. 
export default function Form() {
    const [name, setName] = useState("");
    const onChangeInputName = (e) =>{
        setName(e.target.value.substr(0,10)); //10자로 제한. 그 뒤로는 안적힘
    };

    const [email, setEmail] = useState("");
    const [validEmail, setvalidEmail] = useState(false);
    const onChangeInputEmail = (e) =>{
        setEmail(e.target.value);

        const  re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;     //레귤러 expression w3c 자바스크립트 이메일 정규표현식 리터럴? 객체.
        setvalidEmail(re.test(e.target.value));
    };

    const [password, setPassword] = useState("");       //굳이 제어컴포넌트르 사용하는 이유는 validation을 위한 것이다. (길이 제한이나 null제한 등등)
    const onChangeInputPassword = (e) =>{
        setPassword(e.target.value);            //발리데이션으로 해놓고 성공하면 통신. 아작스로 성공이든 실패든 아작스로 돌리면 통신량이 많음.. 
    };

    const [gender, setGender] = useState('female'); //기본을 female로 줌
    const onChangeInputGender = (e) =>{           //checked 값을 상태값으로 바꿀 수 있도록!
        setGender(e.target.value);      //제어컴포넌트로 체크에 따라 바뀜 
    };

    const [birthYear, setBirthYear] = useState('1884');

    const [agreeProv, setAgreeProv] = useState('no');
    const onChangeInputProv = async (e) =>{
        const status = e.tartget.value === 'no'?'yes':'no';
        //API 호출
        //const url = `/prov/agree?status=${e.target.value === 'no' ? 'yes':'no'}`
        //await fetch
        const url =`/prov/agree?status=${agreeProv}`
        console.log(url);
        if(true){
            setAgreeProv(status)
        }
    }

    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            <label htmlFor="name">이름</label>
            <input id="name" name="name" type="text" value={ name } onChange={onChangeInputName}/>      

            <label htmlFor="email">이메일</label>
            <input id="email" name="email" type="text" value={ email } onChange={onChangeInputEmail}/>
            {
                email === ''? null : 
                    (validEmail ?
                    <FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: 5, fontSize: 16, color: 'blue'}}/> :
                    <FontAwesomeIcon icon={faTimesCircle} style={{marginLeft: 5, fontSize: 16, color: 'red'}}/>)
            }

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" value={ password } onChange={onChangeInputPassword} />
            

            <fieldset>
                <legend>성별</legend>
                <label>여</label> <input type="radio" name="gender" value={ "female" } onChange={onChangeInputGender} checked={gender==='female'} defaultChecked={ true } />
                <label>남</label> <input type="radio" name="gender" value={ "male" } onChange={onChangeInputGender} checked={gender==='male'} defaultChecked={ false } />
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select id="birthYear" value={birthYear} onChange={(e)=>{setBirthYear(e.target.value)}}>
                <option value='1984'>1984년</option>
                <option value='1985'>1985년</option>
                <option value='1986'>1986년</option>
                <option value='1987'>1987년</option>
                <option value='1988'>1988년</option>
                <option value='1989'>1989년</option>
                <option value='1990'>1990년</option>
            </select>

            <label htmlFor="birthYear">자기소개</label>
            <textarea value={""} />

            <fieldset>
                <legend>약관동의</legend>
                <input id="agree-prov" type="checkbox" name="agreeProv" value= { agreeProv } checked={agreeProv ==='yes'} onChange={onChangeInputProv} defaultChecked={ false } />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}