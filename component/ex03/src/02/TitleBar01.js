import React, {Component} from 'react';

export default class TitelBar01 extends Component {


    
    constructor(){
         super(...arguments); 
        // this.no = 10; 
         this.state = {
             no: 10,

         }

    }

    onclickHeader(e){

        console.log("click : TitelBar01", this.state.no)
        // this.no ++;
        //    this.render(); //  안불러진다, 객체지향 하는사람에게는 말이 안된다고 생각 할것임..
    this.setState({    // 이렇게하면 React에서 State가 불러지기 때문에 가능함.
        no : this.state.no + 1
    })
    }

    render() {
        return (
            <h1 onClick = {this.onclickHeader.bind(this) } // 객체 자신에게 접근하고싶으면 bind 를 사용해야한다.
                >
                   ex03 - Function Event Handler(Class Component) { /*this.no*/ this.state.no}  
               </h1>
        )
    }


 
}