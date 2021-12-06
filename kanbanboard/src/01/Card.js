import React, { useState } from "react";
import TaskList from "./TaskList";
import styles from './assets/scss/Card.scss';

export default function Card({title, description, tasks, status}){
    const [showDetails, setShowDetails]=useState(true);

    // a = 'hello';
    // b = 'word';
    // [a,b].join(' '); // == 'hellow word';

    const styleSideColor={
        position: 'absolute',       //position이 absolute가 되며렴ㄴ 부모가 absolute나 relative여야한다. 
        zIndex: -1,     //레이어 개념. 
        top: 0,
        left: 0,
        width: 5,
        height: '100%',
        backgroundColor:  (status ==='Doing'?'red':(status === 'ToDo'?'green':'orange'))        //status별 색상 부여.
    };
    return(
        <div className={styles.Card}>
            <div style = {styleSideColor}/>     
            <div 
                className={
                    showDetails ? 
                        [styles.Card__Title, styles.Card__Title__open].join(' '): 
                        styles.Card__Title
                } onClick={()=>setShowDetails(!showDetails)}>
                {title}
            </div>
          {
              showDetails ?
                <div className={styles.Card__Details}>
                        {description}
                        <TaskList tasks={tasks}/>
                </div>:
                null
          }
        </div>
    );
}