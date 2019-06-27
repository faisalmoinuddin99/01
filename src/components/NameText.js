import React,{Component} from "react"
import {Text,StyleSheet} from "react-native"
export default class NameText extends Component{
  render(){
    return (
     
         <Text style = {styles.textStyle} >
        {this.props.value}
        </Text>
        )
  }
}

const styles = StyleSheet.create({
 
  textStyle:
  {
    fontSize:22,
    color:"#192A56",
    paddingHorizontal:15,
    paddingVertical : 15,
    backgroundColor:"orange",
    borderRadius:10,
    marginTop : 10,
    fontStyle:"italic",
    fontWeight:"bold"
  } 
})