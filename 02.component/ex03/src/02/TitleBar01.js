import React, {Component} from 'react';

export default class TitelBar01 extends Component {     //클래스 컴포넌트

    constructor(){
        super(...arguments);  // super(arguements[0], arguments[1], arguments[2])== super(...arguments); 스프레드 연산자?
    //***********no vs state.no
     //  this.no=0;
        this.state ={       //이벤트 함수에서의 this는 컴포넌트의 this가 아니라 dom을 가르킨다고 볼 수 있음..
            no: 0
        }
        
    }

    onClickHandler(){     //확장 객체 리터럴에서 함수를 이렇게 만드는 걸 지원해준다는디
         //***********no vs state.no
      //  this.no++;
        this.setState({no: this.state.no+1})
        console.log('TitleBar01 clicked!!'+this.state.no);
    }
    render() {
        return (
            <h1 
                onClick = {this.onClickHandler.bind(this)} //this를 빼주면 안됨.. 함수형 컴포넌트에서는 this를 사용할 수 없음. 함수에서의 this는 걔를 call한 것.
                style={{cursor: 'pointer'}}>
                    ex03 - Functional Event Handler(Class Component)
                 {
                     //***********no vs state.no
                 
                 //`no: ${this.no}, state.no: ${this.state.no}`}
                 }
                 </h1>
               
        )
    }
}