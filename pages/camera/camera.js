import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Camera from 'react-native-camera';
import {AdvanceCamera} from '../../components/camera/camera';


export class CameraPage extends React.Component {
  render(){
    return(
      <AdvanceCamera/>
      );
  }
}
