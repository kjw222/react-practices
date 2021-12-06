import React, { Fragment, useState } from 'react';
import Task from './Task';
import styles from './assets/css/TaskList.css';

export default function({tasks}) {
    const [addedTask, setAddedTask]= useState(''); 
    const taskAdd=(e)=>{
        setAddedTask(e.target.value);

       return <Task key={tasks.length} name={addedTask} />;

    }
    return (
        <div className={styles.TaskList}>
            <ul>
                {tasks.map(task => <Task key={task.no} name={task.name} />)}
                
                <Fragment id = 'add'/>
            </ul>

            <input
                type='text'
                className={styles['TaskList--add-task']} 
                placeholder='태스크 추가' 
                onKeyPress={taskAdd}/>
        </div>      
    );
    
}