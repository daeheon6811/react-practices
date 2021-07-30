import React, { useState } from 'react';

export default function TitelBar02() {


    // const no = 10;
    const { no } = useState();


    const onclickHeader = (e) =>{
        console.log("click : TitelBar02")
    }
  
        return (
            <h1 onClick = { (e) =>
                { onclickHeader(e) } }
                style = {{ cursor: 'pointer' } }
                >
                   ex03 - Function Event Handler(Funtional Component)
               </h1>
        )

}