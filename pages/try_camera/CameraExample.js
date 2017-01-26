import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet
} from 'react-native';
import Camera from 'react-native-camera'

export default CameraExample = (props) => {
   return (
      <View style = {styles.container}>
         <Camera
            ref = {(cam) => {
               this.camera = cam; 
            }}
            style = {styles.preview}
            aspect = {Camera.constants.Aspect.fill}
            type = {Camera.constants.Type.back}
            >
            <Text
               style = {styles.capture}
               onPress = {props.takePicture}>
               CAPTURE
            </Text>
            <Text
               style = {styles.capture}
               onPress = {props.takePicture}>
               TYPE
            </Text>
         </Camera>

         <Text style = {styles.text}>
            {props.imagePath}
         </Text>

      </View>
   );
}

const styles = StyleSheet.create ({
   container: {
      flex: 1
   },
   preview: {
      height: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
   },
   capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      color: '#000',
      padding: 10,
      margin: 40
   },
   text: {
      fontWeight: 'bold',
   }
});