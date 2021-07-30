import React, {Fragment} from 'react';
import Guestbooklist from './Guestbooklist';
import GuestbookForm from './GuestbookForm'
import styles from './assets/scss/Guestbook.scss'
import item from './data.json';


export default function GuestbookBoard(){

    return (

        <div className={styles.Guestbook}>
            <h1 className={styles.Guestbook}>방명록</h1>
            <GuestbookForm/>
            <Guestbooklist key='1' name={"둘리"} items={item.filter(card => card.no=="1")}/>
            <Guestbooklist key='2' name={"마이콜"} items ={item.filter(card => card.no=="2")}/>
            <Guestbooklist key='3' name={"또치"} items ={item.filter(card => card.no=="3")}/>
        </div>
    );

}