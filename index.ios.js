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

import { Button} from './components';
import { LoginPage} from './pages/login';
import { ToolbarPage} from './pages/toolbar';
import { Geo} from './utilities/geo';

var styles = StyleSheet.create({
    container:{}
});





//ni nak test navigator

var PageOne = React.createClass({
  _handlePress() {
    this.props.navigator.push({id: 2,});
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: 'green'}]}>
      <Text>hsbfbhsnfj</Text>
       </View>
    )
  },
});

var PageTwo = React.createClass({
  _handlePress() {
    this.props.navigator.pop();
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: 'purple'}]}>
       </View>
    )
  },
});

var SampleApp = React.createClass({
  _renderScene(route, navigator) {
    if (route.id === 1) {
      return <PageOne navigator={navigator} />
    } else if (route.id === 2) {
      return <PageTwo navigator={navigator} />
    }
  },

  render() {
    return (
      <Navigator initialRoute={{id: 1, }} renderScene={this._renderScene} />
    );
  }
});


export default class RestPage extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
  }
}


/*
Navigator.SceneConfigs.PushFromRight (default)
Navigator.SceneConfigs.FloatFromRight
Navigator.SceneConfigs.FloatFromLeft
Navigator.SceneConfigs.FloatFromBottom
Navigator.SceneConfigs.FloatFromBottomAndroid
Navigator.SceneConfigs.FadeAndroid
Navigator.SceneConfigs.SwipeFromLeft
Navigator.SceneConfigs.HorizontalSwipeJump
Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft
Navigator.SceneConfigs.VerticalUpSwipeJump
Navigator.SceneConfigs.VerticalDownSwipeJump
*/
class navi extends Component{
  render(){
    return(
      //initial route when app is started
      //render scene function that read route object and return JSX UI of that scene
      <Navigator
      initialRoute={routes[0]}
      initialRouteStack={routes}
      configureScene={(route, routeStack) =>
    Navigator.SceneConfigs.FloatFromBottom}
      renderScene={(route, navigator)=>{
        switch(route.index){
          case 0: return(<LoginPage navigator={navigator} route={routes[route.index]}/>);
          case 1: return(<ToolbarPage navigator={navigator} route={routes[route.index]}/>);
        }
      }}>
      </Navigator>);
  }
}


















{/* 
class Page extends Component{
  render(){
    return(

      <View>
      <TouchableOpacity>
      <Text style={{backgroundColor:'#81c04d',
        paddingTop:30,}}>khsbkfnkn</Text>
      </TouchableOpacity>
      </View>
      );
  }
}

*/}



const routes = [{title:"Laman Utama", index:0},
                {title:"Laman Kedua", index:1}];



class MainNavigator extends Component{
  render(){
    return(
      <Navigator 
      initialRoute={routes[0]}
      initialRouteStack={routes}
      configureScene={(route, routeStack) =>
    Navigator.SceneConfigs.FloatFromBottom}
      renderScene={(route, navigator)=>{
        switch(route.index){
          case 0: return(<LoginPage navigator={navigator} route={route[route.index]}/>);
          case 1: return(<ToolbarPage navigator={navigator} route={route[route.index]}/>);
        }
      }}
      />
      );
  }
}


class Cubaan extends Component{

  state = {
      latitude: '0',
      longitude: '0',
      timestamp:'0'
    }

  reloadgeo(lon,lat,times){
      this.setState({latitude:lat, longitude:lon, timestamp:times});
    }


  render(){
    return(

    <View>
    <Geo showlabel="0" reloadgeo={this.reloadgeo.bind(this)}/>
    <Text>{this.state.longitude}......</Text>
    </View>

    );
  }
}


AppRegistry.registerComponent('rnApp', () => Cubaan);
