import React from 'react';

import GuestbooklistItem from "./GuestbooklistItem.js";

import styles from "./assets/scss/GuestbookList.scss"


export default function Guestbooklist({name,items}){

    console.log(items)

    return (
        <ul className={styles.Guestbook__List}>
            {items.map(item => <GuestbooklistItem
                key={item.no}
                name={item.name} message = {item.message}  regDate = {item.regDate}/> )}
        </ul>
    );

}