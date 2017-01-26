'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

var s = require('./style');
var globalroute = require('./route');
import {MainPage} from './pages/main';
import {GeoPage} from './pages/geo';
import {CameraPage} from './pages/camera';

class MainNavigator extends Component {
  

  render() {
    return (
      <Navigator
      initialRoute={globalroute[0]}
      initialRouteStack={globalroute}
      configureScene={(route, routeStack) =>
    Navigator.SceneConfigs.FloatFromBottom}
      renderScene={(route, navigator)=>{
        switch(route.page){
          case 0: return(<MainPage navigator={navigator} route={globalroute[route.page]}/>);
          case 1: return(<GeoPage navigator={navigator} route={globalroute[route.page]}/>);
          case 2: return(<CameraPage navigator={navigator} route={globalroute[route.page]}/>);
        }
      }}/>
    );
  }
}



AppRegistry.registerComponent('utilities', () => MainNavigator);
