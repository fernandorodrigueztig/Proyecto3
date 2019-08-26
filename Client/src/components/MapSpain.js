
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import axios from 'axios'
import spainjson from '../earthquakes-spain.json'
import {InfoWindow} from './InfoWindow'

console.log(spainjson)
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapSpain extends Component {
  static defaultProps = {
    center: {
      lat: 40,
      lng: 0

    },
    zoom: 6
  };
  constructor(props) {
    super(props);
  
    this.state = {
      spainjson: spainjson,
    };
  }
  

//constructor con sus props, le vamos a asignar el json al estado
  

//   getJson() {
//     axios.get('/Server/earthquakes-spain.json').then(resp => {
  
//     this.setState({spainjson: spainjson})
//   })
//   .catch(err => console.log('error', err))
//   }

  componentDidMount() {
    // this.getSpainJson()
  }
 
    
  render() {
      
      console.log(process.env.REACT_APP_APIKEY)
      return (
        // Important! Always set the container height explicitly
            <GoogleMapReact
            bootstrapURLKeys={ {key: process.env.REACT_APP_APIKEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            style={{height: "900px"}}
            >
             
            {this.state.spainjson ? 
          
          
            this.state.spainjson.features.map(spainjson => {
                console.log(spainjson)
          return (
          <Marker
            lat={spainjson.geometry.coordinates[1]}
            lng={spainjson.geometry.coordinates[0]}
            text="My Marker"
          >
          </Marker>
          
          )
          }) : null}
          
          {this.state.spainjson ? 
          
          
          this.state.spainjson.features.map(spainjson => {
              console.log(spainjson)
        return (
        <InfoWindow

            lat={spainjson.geometry.coordinates[1]}
            lng={spainjson.geometry.coordinates[0]}
            text="My Marker"
          >
            {spainjson.properties.localizacion}
          </InfoWindow>
        )
        }) : null}
          
          {/* {console.log(spainjson.FeatureCollection.features.properties.coordinates.longitud)} */}
          </GoogleMapReact>

          
       

      
    );
  }
}


export default MapSpain;