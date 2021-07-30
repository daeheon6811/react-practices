import React from 'react';
import GuestbookBoard from "./GuestbookBoard";
import styles from "./assets/scss/GuestbookList.scss"
export default function GuestbooklistItem({name,message,regDate}){

    return (
        <li className= {styles.Guestbook__List__Item}>
            <strong>{name}</strong>
            <p>
                {message}<br/>
            </p>
            <strong>{regDate}</strong>
            <a href=''>삭제</a>
        </li>
    );

}