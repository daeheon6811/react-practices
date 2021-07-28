import React from 'react';

import GuestbooklistItem from "./GuestbooklistItem.js";


export default function Guestbooklist({items}){

    return (
        <ul className='Guestbook__List'>
            {items.map(item => <GuestbooklistItem
                key={item.no}
                name={item.name}/> )}
        </ul>
    );

}