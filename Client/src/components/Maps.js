import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import axios from 'axios'
import Navbar from './Navbar'
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
      magRange: 3
    };
  }
  

//constructor con sus props, le vamos a asignar el json al estado
  

  getJson() {
    axios.get('https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json').then(resp => {
  
    
    const json = (JSON.parse(resp.data.slice(resp.data.indexOf("(")+1, resp.data.length-2)))

    const jsonfiltered6 =  json.features.filter(terremoto=>terremoto.properties.mag<this.state.magRange)
    
    this.setState({json: json, filtered: jsonfiltered6})
  })
  .catch(err => console.log('error', err))
  }

  filterJson() {
    const filtered = this.state.json.features.filter(terremoto=>terremoto.properties.mag<this.state.magRange)
    this.setState({filtered: filtered})
  }

  componentDidMount() {
    this.getJson()
  }
  getInitialState() {}
  
  handleChange = (event) => {
    console.log(event.target, "asdasdasad")
    this.setState({magRange: event.target.value}, ()=>{
      this.filterJson()
    });
  }
    
  render() {
      
      
      return (
        // Important! Always set the container height explicitly
        
        <div style={{ height: '100vh', width: '100%' }}>
  
        <input 
          id="typeinp" 
          type="range" 
          min="0" max="10" 
          value={this.state.magRange} 
          onChange={(e) => this.handleChange(e)}
          step="1"/>
        <GoogleMapReact
          bootstrapURLKeys={ {key: process.env.REACT_APP_APIKEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}

        >
          {this.state.json.features ? 
          
          
          this.state.filtered.map(terremoto => {

            let worldColor 
            if (terremoto.properties.mag<2){ 
              worldColor = 'yellow';
            }else if (terremoto.properties.mag>2.1 && terremoto.properties.mag<=4.5){
              worldColor = 'orange';
            }
            else {
              worldColor = 'red';
            }

            
          return (<Marker
            //mag={terremoto.properties.mag}
            lat={terremoto.geometry.coordinates[1]}
            lng={terremoto.geometry.coordinates[0]}
            magnitud={terremoto.properties.mag}
            color={worldColor}
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