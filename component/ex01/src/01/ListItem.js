import React, { Component } from 'react';
import FoodList from './FoodList';

export default class extends Component {

 constructor() {
      super(...arguments);
      this.foods = [
        {name : "Bread" , value : 10} ,
        {name : "Egg" , value : 20} ,
        {name : "Milk" , value : 30} ,

       ]  
 }


    render() {
        return (
          <div id = 'App'>
            
          </div>
         );
    }
    
  
  }