import React, { Component } from "react";
import ListItem from "./ListItem";

export default class FoodList extends Component{
    render(){
       // const Components = [];
        // const foods=this.props.foods;
        // for(let i = 0; i < foods.length; i++){
        //     Components[i] = <ListItem name={foods[i].name} quantify={foods[i].quantify}/>;    //배열에 컴포넌트 요소를 넣어준다.
        // }
        // console.log(this.props.foods);  //부모로 부터 받은 배열

       

        // const r = [1,2,3,4].map(function(e){
        //     return e*e;
        // });

     // const r =  this.props.foods.map((food)=> <ListItem /><ListItem /><ListItem />);

      //  console.log(r);
        return(
        <ul>
            {this.props.foods.map((food)=> <ListItem name={food.name} quantity={food.quantity}/>)}
           
        </ul>
        )
    }
}