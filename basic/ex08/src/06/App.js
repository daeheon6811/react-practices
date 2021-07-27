import React, {Component, Fragment } from 'react';
import Header from './Header';
import Content from './Content';
import Clock01 from './Clock01';
import Clock02 from './Clock02';



export default class extends Component{
         render(){
            return (
                <Fragment>
                    <Header/>
                    <Content/>
                    
                    <Clock01/>
               
                </Fragment>
             
            )
         }
}