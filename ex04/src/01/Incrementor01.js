import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            //step: this.props.step,      //step은 정확히 변화되지 않는 수니까 저장할 필요는 없다.
            val: this.props.begin           //begin은 state.val에 저장.
        }
    }
    onClickButton(e){
            //this.state.values = this.state.values +this.props.step;         //이렇게도 가능한데.. 이것보다는 setState로 변화시킬것.
            this.setState({
                val: this.state.val + this.state.step
            })
        
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickButton.bind(this)}>   {/**이 객체 안에 있는 onClickButton 이라는 뜻으로 this를 붙여준다.**/} 
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
            </div>
        );
    }
}