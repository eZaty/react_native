'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Navigator
} from 'react-native';




var styles = StyleSheet.create({
    toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                //Step 3
    },
    container:{}
});


//to display normal button
//props = bgcolor, title
export class Button extends Component{
  _onPress(){
    this.props.navigator.push({title:"Laman Kedua", index:1});
  }
  render(){
    return(
      <View>
           <View style={{borderRadius:64, padding:10, backgroundColor:this.props.bgcolor}}>
             <Text>{this.props.title || 'Simple Button'}</Text>
           </View>
      </View>

    )
  }
}


export class Toolbar extends Component{
    render() {
      let lb = "< "+this.props.leftbutton;
        return (
          <View>
                <View style={styles.toolbar}>
                    <SimpleButton customText={lb}/>
                    <Text style={styles.toolbarTitle}>{this.props.title}</Text>
                    <SimpleButton style={styles.toolbarButton} customText={this.props.rightbutton}/>
                </View>
            </View>
        );
    }
}

class SimpleButton extends Component {
  render () {
    return (
      
           <View>
             <Text style={styles.toolbarButton}>{this.props.customText || 'Simple Button'}</Text>
           </View>
         
); }
}
