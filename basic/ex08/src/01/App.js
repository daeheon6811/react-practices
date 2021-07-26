import React from 'react';


export default function(){
  
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorials  -  특징1: HTML과의 차이점</p>
            {/*
                 1. 속성은 Camel Case
                 2. 
             */
            }
            <input type='text' maxLength='10' />
            {/* 
            2. Element는 꼭 닫혀야 한다.
            오류 ) <br> , <hr> , <input type = 'text'> <img src =''>
                        */}
            <br/>

            <hr/>

            <img width= '100px' src ="https://lh5.googleusercontent.com/p/AF1QipNLyz60W1rO5jQ73pbk05MxWKCP7kXjwLQFLT9u=w90-h90-n-k-no"></img>
            {/*
                  1. 속성 이름은 DOM API 기반이다
                  <div class='box'></div>
                  document.getElemntById('box').className
             */}

             <div id = {'box'} className= 'box'>
                 box입니다
             </div>

             

        </div> 
//        createElement(null,null,"hello World")
    );
}