import React, { Component, Fragment } from 'react';

export default function() {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    return (

        /* 
            comment01: 컴포넌트 안이 아니기 때문에 자바스크립트 
            
        
        */
        <div 

/* 여기서도 다중행 주석이 가능함. */

        className = 'clock' 
        title='시계' 
        props01 = 'hello' props02 = 'world'>
            {/* jsx는 html이 아니다! . 이런 <!-- --> 주석은 사용할 수 없다. */}


            // comment 03: jsx 컨포넌트 렌더링 안에서 주석을 사용하면 화면 그대로 나옴

            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            :       
            {('0' + minutes).slice(-2)}
            :
            {('0' + seconds).slice(-2)}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    )
}