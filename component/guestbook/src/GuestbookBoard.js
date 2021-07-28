import React, {Fragment} from 'react';
import Guestbooklist from './Guestbooklist';
import cards from './data.json';

export default function GuestbookBoard(){

    return (
        <div className={'Guestbook'}>
            <Guestbooklist key='1' name={"둘리"} cards={cards.filter(card => card.no==="1")}/>
            <Guestbooklist key='2' name={"마이콜"} cards ={cards.filter(card => card.no==="2")}/>
            <Guestbooklist key='3' name={"또치"} cards ={cards.filter(card => card.no==="3")}/>
        </div>
    );

}