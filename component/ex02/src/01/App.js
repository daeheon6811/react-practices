import React , {Component} from 'react';
import FoodList from './FoodList';

export default function App(){

    const h1Styles = {

      width : 100,
      height : 30,
      padding : 5,
      color : '#fff',
      backgroundColor : '#ee9900'
       
    };
  
    return (
      <div id ='App'>
         <h1 style = {h1Styles}> Inline Styling</h1>
      </div>
    )  
}