import React, { Component } from 'react';
import ListItem from './ListItem';


export default class extends Component {
  render(){

    console.log(this.props.foods);
    const foods = []

    this.foods.forEach((food, index) =>{
        foods[index] = <ListItem name = {food.name} value = {food.value}/> 
    });

    

    return (

      <ul>   
{foods}
     </ul>
  ) 
 }    
  }