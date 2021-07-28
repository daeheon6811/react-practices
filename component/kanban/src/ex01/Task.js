import React from 'react';

export default function Task({name}){
    return(
        <li className='Guestbook__List__Item'>
        {name}
        </li>
    )
}