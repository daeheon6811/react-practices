import React, { Component, Fragment } from 'react';

export default function() {
    const date = new Date();

    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

const html ="<span>" + 
            "'0' + (hours > 12 ? hours - 12)).slice(-2)" + 
            " : " +""
           " </span>
 " "

    return (
        <div>
            {hours}
            :       
            {minutes}
            :
            {seconds}
            {session}
        </div>
    )
}