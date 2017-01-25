/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

import { Button, SimpleButton} from '../components';

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

export class Toolbar extends Component{
    render() {
      let lb = "< "+this.props.leftbutton;
        return (
          <View>
                <View style={styles.toolbar}>
                <TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
                    {/* <SimpleButton customText={lb}/> */}
                    <Text style={styles.toolbarButton}>{lb}</Text>
                    </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>{this.props.title}</Text>
                    {/* <SimpleButton style={styles.toolbarButton} customText={this.props.rightbutton}/> */}
                </View>
            </View>
        );
    }
}


export class ToolbarPage extends Component{
    render() {
        let lb = "< "+(this.props.leftbutton || "Back");
        return (
          <View>
                <View style={styles.toolbar}>
                  <TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
                    {/* <SimpleButton customText={lb}/> */}
                    <Text style={styles.toolbarButton}>{lb}</Text>
                  </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>Utama</Text>
                  <TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
                    <Text style={styles.toolbarButton}>Like</Text>
                  </TouchableOpacity>
                </View>
            </View>
        );
    }
}