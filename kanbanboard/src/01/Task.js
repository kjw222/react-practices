import React, { useState } from "react";
import styles from './assets/css/Task.css';

export default function({name}){

    const [status, setStatus] = useState('false');     //체크박스
    const completeTask=(e)=>{
        console.log("status : "+status+" e.target.checked : "+e.target.checked)
        setStatus(!status);
        e.target.checked=status;
        console.log("set status : "+status+" e.target.checked : "+e.target.checked)   
    }

    return(
            <li className={styles.Task}>
                  <input type='checkbox' onClick={completeTask}/>
                  {name}
                  <a href='#' className={styles['Task--remove']}></a>
            </li>
           

    );
}
    