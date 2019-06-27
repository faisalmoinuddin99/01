import React from "react"
import {View,StyleSheet,Image} from "react-native"
import NextText from "./src/components/NameText.js"
export default class App extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
       <NextText value = "Faisal Moinuddin"></NextText>
       <Image
       
       source = {require('./src/images/email.png')}
       
       />

       <Image 
       source = {{
         uri: 'https://images.pexels.com/photos/2522676/pexels-photo-2522676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
       }} 
       style = {{width:300 , height:300}}
       />

       <Image 
       source = {require('./src/images/messi-570166.png')}
       style = {{width:100,height:100}}
       />

       
      </View>   
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor : "#45CE30",
    alignItems:"center",
    justifyContent:"center"
  }
  
})