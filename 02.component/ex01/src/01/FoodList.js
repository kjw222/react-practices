import React, { Component } from "react";
import ListItem from "./ListItem";

export default class FoodList extends Component{
    render(){
        return(
        <ul>
            <ListItem name = 'egg' quantity='10'/>
            <ListItem name = 'bread' quantity='30'/>
            <ListItem name = 'milk' quantity='5'/>
        </ul>
        )
    }
}