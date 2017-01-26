
//https://www.tutorialspoint.com/react_native/react_native_cameraroll.htm
import React, { Component } from 'react';
import {
   AppRegistry,
   StyleSheet,
   Text,
   View
} from 'react-native';
import CameraExample from './CameraExample'

export class TryCameraPage extends Component {
   constructor(){
      super()
      this.state = {
         imagePath: ''
      }
   }
   takePicture = () => {
      camera.capture()
      .then((data) => this.setState({imagePath: data.path}))
      .catch(err => console.error(err));
   }
   render() {
      return (
         <View>
         <CameraExample
            imagePath = {this.state.imagePath}
            takePicture = {this.takePicture}
         />
         </View>
      );
   }
}