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

import { Button, Toolbar} from '../components';
import { Geo} from '../utilities/geo';

var styles = StyleSheet.create({
    container:{}
});



export class LoginForm extends Component{
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render(){
    return (
      <View style={{padding: 10}}>
      
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
      )
  }
}


export class LoginPage extends Component{

  constructor (props) {
    super(props)
    this.state = {
      behavior: 'position' ,
      latitude: '0',
      longitude: '0',
      geotimestamp:'0'
      // there is three ways to adjust (position , height , padding ) 
    }

    // this.props.longitude="0";
    // this.props.latitude="0";
    // this.props.geotimestamp="0";
  }

    render() {
        return (
          //column is default, can chage to row
          
            <View style={{flex: 1, flexDirection: 'column'}}>
            {/*<KeyboardAvoidingView behavior={this.state.behavior}> */}
                 <View style={{flex: 163, backgroundColor: 'powderblue',justifyContent: 'center',alignItems: 'center'}} >
                   <Image source={require('../google.png')} style={{width: 193, height: 110}}/>
                 </View>
                 <View style={{flex: 278, backgroundColor: '#ffffee',justifyContent: 'center',alignItems: 'center'}} >
                   <Geo reloadgeo={this.reloadgeo.bind(this)}/>
                   <LoginForm/>
                   <TextInput onChangeText={(text) => this.setState({text})} value={this.state.text} />
                   <TouchableOpacity onPress={()=>alert("alhamdulillah")}><Text>Alert {this.state.geotimestamp}</Text></TouchableOpacity>
                 </View>
                 <View style={{flex: 75, backgroundColor: '#f10064',justifyContent: 'center',alignItems: 'flex-end', paddingRight:10}} >
                   <TouchableOpacity onPress={()=>{this.props.navigator.push(routes[1])}}>
                    <Button title={this.state.latitude} bgcolor="yellow" goto="1"/>
                   </TouchableOpacity>
                 </View>
             {/*</KeyboardAvoidingView>*/}
            </View>
        );
    }

    reloadgeo(lon,lat,times){
      this.setState({latitude:lat, longitude:lon, geotimestamp:times});
    }

    componentDidMount() {
    // this.setState({latitude:this.refs.getgeo.getlatitude()});

    // x is now 'hello' 
  }
}

const routes = [{title:"Laman Utama", index:0},
                {title:"Laman Kedua", index:1}];














