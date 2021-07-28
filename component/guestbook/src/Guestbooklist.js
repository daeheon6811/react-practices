import React from 'react';

import GuestbooklistItem from "./GuestbooklistItem.js";


export default function Guestbooklist({name,items}){

    console.log(items)

    return (
        <ul className='Guestbook__List'>
            {items.map(item => <GuestbooklistItem
                key={item.no}
                name={item.name} message = {item.message}  regDate = {item.regDate}/> )}
        </ul>
    );

}