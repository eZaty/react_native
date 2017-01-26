/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/* eslint no-console: 0 */
'use strict';


var React = require('react');
var ReactNative = require('react-native');
var {
	AppRegistry,
  StyleSheet,
  Text,
  View,
} = ReactNative;



export class Geo extends React.Component {
  state = {
    initialPosition: 'unknown',
    lastPosition: '{"coords":{"speed":"0","longitude":"0","latitude":"0"}}',
    longitude:"0",
    latitude:"0",
    speed:"0",
    timestamp:"000"
  };

  
  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      // (error) => alert(JSON.stringify(error)),
      (error) => {},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
      this.setState({longitude:position.coords.longitude});
      this.setState({latitude:position.coords.latitude});
      this.setState({timestamp:new Date(position.timestamp).toLocaleString()});
      this.props.reloadgeo(position.coords.longitude,position.coords.latitude,new Date(position.timestamp).toLocaleString());
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    if(this.props.showlabel=="0"){
      return(false);
    }
    return (
      <View>
        <Text>{"\n"}{"\n"}Longitude: {this.state.longitude}</Text>
        <Text>{"\n"}{"\n"}Latitude: {this.state.latitude}</Text>
        <Text>{"\n"}{"\n"}Latest Time Stamp: {this.state.timestamp}</Text>
      </View>
    );
  }



  getlongitude(){
    return this.state.longitude;
  }
  getlatitude(){
    return this.state.latitude;
  }
  gettimestamp(){
    return this.state.timestamp;
  }
}


Geo.propTypes = {
    reloadgeo: React.PropTypes.func,
  }


// AppRegistry.registerComponent('rnApp', () => Geo);
