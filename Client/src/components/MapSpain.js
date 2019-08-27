
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import spainjson from '../earthquakes-spain.json'
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

 showInfo = info =>{
   alert("Datos sobre el seísmo: " + info)
 }
    
  render() {
      
      console.log(process.env.REACT_APP_APIKEY)
      return (
        
      <>  
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
              onClick={()=> this.showInfo(`La magnitud fue de ${spainjson.properties.magnitud}, acontecido el día ${spainjson.properties.fecha} en ${spainjson.properties.localizacion}`)}
            >
            </Marker>
          
            )
            }) : null}
        
          
            {/* {console.log(spainjson.FeatureCollection.features.properties.coordinates.longitud)} */}
            </GoogleMapReact>
          </>)
  }
}


export default MapSpain;