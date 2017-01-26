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
  TouchableHighlight,
  KeyboardAvoidingView,
  Navigator
} from 'react-native';

var s = require('../style');

var values = require('../values');

import { Actions } from 'react-native-router-flux';


export class MainPage extends Component {
  

  render() {
    return (
      <ScrollView>
      <TouchableOpacity onPress={()=>alert("Working")}>
      <View style={[s.alwaysred, s.centerall]}>
      <Text>{"\n\n"}{values.ALERT_BUTTON}</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>Actions.geo({perkataan:"Back"})}>
      <View style={[s.green, s.centerall]}>
      <Text>{"\n\n"}{values.GPS_BUTTON}</Text>
      </View>
      </TouchableOpacity>

      <Image source={require('../../images/grandcanyon.png')} />

      <TouchableOpacity onPress={()=>Actions.advcam()}>
      <View style={[s.blue, s.centerall]}>
      <Text>{"\n\n"}{values.CAMERA_BUTTON}</Text>
      </View>
      </TouchableOpacity>


    {/*
      <TouchableOpacity onPress={()=>Actions.geo({location:"Malaysia"})}>
      <Image source={require('../../images/grandcanyon.png')} >
      <View style={[s.button, s.centerall]}>
      <Text>{values.TITLE}</Text>
      </View>
      </Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={Actions.advcam}>
      <Image style={{height:200,width:400}} source={require('./assets/ic_photo_camera_36pt.png')} >
      <View style={[s.button, s.centerall]}>
      <Text>{values.TITLE}</Text>
      </View>
      </Image>
      </TouchableOpacity>
    */}
      </ScrollView>
    );
  }
}



AppRegistry.registerComponent('utilities', () => Main);
