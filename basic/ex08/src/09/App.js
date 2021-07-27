import React, {Component, Fragment } from 'react';
import Header from './Header';
import Content from './Content';
import Clock01 from './Clock';




export default class extends Component{
         render(){
            return (
                <Fragment>
                    <Header/>
                    <Content/>
                    
                    <Clock/>
               
                </Fragment>
             
            )
         }
}