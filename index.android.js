'use strict';
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import {MainPage} from './pages/main/main';
import {GeoPage} from './pages/geo/geo';
import {TryCameraPage} from './pages/try_camera/camera';
import {CameraPage} from './pages/camera/camera';

class MainNavigator extends Component {
  

  render() {
    return (
    <Router>
        <Scene key="root">
          <Scene key="main" hideNavBar={true} component={MainPage} title="" initial={true} />
          <Scene key="geo" hideNavBar={true} component={GeoPage} title="" />
          <Scene key="try_cam" hideNavBar={true} component={TryCameraPage} title="" />
          <Scene key="advcam" hideNavBar={false} component={CameraPage} title="" />
        </Scene>
      </Router>

    );
  }
}

AppRegistry.registerComponent('utilities', () => MainNavigator);




