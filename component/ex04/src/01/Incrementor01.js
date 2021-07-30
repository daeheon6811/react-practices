import React  , {Component}  from 'react';

export default class extends Component{


    constructor(){
        super(...arguments);
        this.state = {
            value : this.props.begin
        }


    }

    onClickButton() {

        // this.staet.value = this.state.value + this.props.step  이거는 안된다.
        this.setState({
            value : this.state.value + this.props.step
        });
    }

    render() {
        return (
            <div>
                 <button onClick = {this.onClickButton.bind(this)}>
                     <strong>+</strong>
                 </button>
                  <span>{this.state.value}</span>
            </div>
        ) 
    }

}



