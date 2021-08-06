import React, { Component } from 'react';
import './assets/scss/Clock.scss';

export default class Clock extends Component {



    constructor(props) {
        super(...arguments);

        this.state ={
             hours: '00',
             minutes: '00',
             seconds: '00',
             session: 'am',                         
        }   

        this.count = 0 ;
    }




    componentDidMount() {
      this.interval = setInterval(() => {

   
        

        if(++this.count == 5){
            this.props.callback();
        }
         
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        this.setState({
            hours: (`0${hours === 0 ? 12 : hours > 12 ? hours - 12 : hours }`.slice(-2)) ,
            minutes : `0${minutes}`.slice(-2),
            seconds : `0${seconds}`.slice(-2),
            session:  hours > 12 ? 'pm' : 'am'
        }) }, 1000);
    }

 
      componentWillUnMount() {

        console.log('click')
        clearInterval(this.interval)
      }
      

 

    render() {
        return (
            <div className="Clock">
                <div className="numbers">
                    <p className="hours">{this.state.hours}</p>
                    <p className="placeholder"></p>
            
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p className="minutes">{this.state.minutes}</p>
                    <p className="placeholder"></p>
     
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p className="seconds">{this.state.seconds}</p>
                    <p className="placeholder"></p>
          
                </div>
                <div className="AmPm">
                    <div>
                        <p className={this.state.seconds ===  'am' ? 'on' : 'off'   }>am</p>
                    </div>
                    <div>
                        <p className={this.state.seconds ===  'pm' ? 'on' : 'off'   }>pm</p>
                    </div>
                </div>
            </div>
        );
    }
}