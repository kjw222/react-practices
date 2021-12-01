import React,{Component} from "react";


export default class ListItem extends Component{
    render(){
        <li>{this.props.name} : {this.props.quantity}</li>
    }
}