import React from 'react';
import styles from '../assets/css/Task.css'
export default function Task({name}){
    return(

        <li className={styles.TaskList__Task}>
                    <input type='checkbox' defualtchecked='true' />
        {name}
                  <a href='#' className={styles.TaskList__Task__remove}></a>
        </li>
    )
}