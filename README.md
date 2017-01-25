## Synopsis

This is my own framework for React Native

## Utilities (root > utilities)

1. geo.js
How to use:
a. Add this in the beginning of your js file to import the component
import { Geo} from './utilities/geo';

b. Declare longitude,latitude and timestamps in your component
   state = {
      latitude: '0',
      longitude: '0',
      timestamp:'0'
    }
//timestamp is latest time of retrieved geo location data


c. Call the component in your return method
<Geo showlabel="0" reloadgeo={this.reloadgeo.bind(this)}/>
//if showlabel = "1", it will display details of the geo information

d. declare a method in your component
reloadgeo(lon,lat,times){
      this.setState({latitude:lat, longitude:lon, timestamp:times});
    }

e. Use the states (longitude, latitude, timestamp) directly from your view
<Text>{this.state.longitude}</Text>

