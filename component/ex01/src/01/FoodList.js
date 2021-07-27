import React, { Component } from 'react';
import ListItem from './ListItem';


export default class extends Component {
  render(){
    return (
      <ul>   
      <ListItem name ="Bread"/>
      <ListItem name ="Hello"/>
      <ListItem name = "Milk"/>
      <ListItem name = "Cat"/>
  
     </ul>
  ) 
 }    
  }