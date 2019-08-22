import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import axios from 'axios'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 20,
      lng: -160

    },
    zoom: 2
  };
  constructor(props) {
    super(props);
  
    this.state = {
      json: [],
    };
  }
  

//constructor con sus props, le vamos a asignar el json al estado
  

  getJson() {
    axios.get('https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json').then(resp => {
  
    
    const json = (JSON.parse(resp.data.slice(resp.data.indexOf("(")+1, resp.data.length-2)))

    const jsonfiltered6 = json.features.filter(terremoto=>terremoto.properties.mag>5)


    this.setState({json: json, filtered: jsonfiltered6})
  })
  .catch(err => console.log('error', err))
  }

  componentDidMount() {
    this.getJson()
  }

  render() {
    console.log(this.state)

    return (
      // Important! Always set the container height explicitly

      <div style={{ height: '100vh', width: '100%' }}>
        <input type="range"/> 
        <GoogleMapReact
          bootstrapURLKeys={ {key: process.env.REACT_APP_APIKEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}

        >
          {this.state.json.features ? 
          
          
          this.state.filtered.map(terremoto => {

            console.log(terremoto,"map")
          return (<Marker
            lat={terremoto.geometry.coordinates[1]}
            lng={terremoto.geometry.coordinates[0]}
            text="My Marker"
          />)
          }) : null}

          {console.log(this.state.json.features)}
        </GoogleMapReact>

      </div>
    );
  }
}


export default SimpleMap;