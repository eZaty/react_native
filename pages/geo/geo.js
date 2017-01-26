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
import { Geo} from '../../components/geo/geo';
import { Actions } from 'react-native-router-flux';

export class GeoPage extends Component {

  state = {
      latitude: '0',
      longitude: '0',
      timestamp:'0'
    }

    reloadgeo(lon,lat,times){
      this.setState({latitude:lat, longitude:lon, timestamp:times});
    }

  render() {
    return (
      <View>
         <Geo showlabel="1" reloadgeo={this.reloadgeo.bind(this)}/>
         <TouchableOpacity onPress={()=>Actions.pop()}>
            <View style={s.button}>
              <Text>{this.props.location}</Text>
            </View>
         </TouchableOpacity>
      </View>
    );
  }
}



AppRegistry.registerComponent('utilities', () => GeoPage);
