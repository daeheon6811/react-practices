import React from 'react';
import GuestbookBoard from "./GuestbookBoard";

export default function GuestbooklistItem({name,message,regDate}){

    return (
        <li className='Guestbook__List__Item'>
            <strong>{name}</strong>
            <p>
                {message}<br/>
            </p>
            <strong>{regDate}</strong>
            <a href=''>삭제</a>
        </li>
    );

}