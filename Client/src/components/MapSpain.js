
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import spainjson from '../earthquakes-spain.json'
import Modal from 'react-bootstrap/Modal'

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
      showModal: false,
      magnitud: 'aqui esto falta',
      date: '',
      place: '',
      hour: '',
      profundidad: ''
    };
  }
  handleModalOpen = () => this.setState({ showModal: true })
  handleModalClose = () => this.setState({ showModal: false })
 
  showInfo = (mag, dat, pla, hour, prof) =>{
      this.setState({
        magnitud: mag,
        date: dat,
        place: pla,
        hour: hour,
        profundidad: prof
      })
    this.handleModalOpen()
 }
 


  render() {
     
      console.log(process.env.REACT_APP_APIKEY)
      return (
        
      <>  
       <Modal show={this.state.showModal} onHide={this.handleModalClose}>

      <Modal.Body>
        <p>La magnitud fue de {this.state.magnitud}, 
        acontecido el día {this.state.date}  
        en {this.state.place} a las {this.state.hour} y con su foco a {this.state.profundidad} km de profundidad.</p>
      </Modal.Body>

      </Modal>
            

            <GoogleMapReact
              bootstrapURLKeys={ {key: process.env.REACT_APP_APIKEY }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              style={{height: "900px"}}
            >
             
            {this.state.spainjson ? 
            this.state.spainjson.features.map(spainjson => {

            let theColor 
            
            if (spainjson.properties.magnitud  > 0 && spainjson.properties.magnitud <=1) { 
              theColor = 'yellow';
            }
            else if (spainjson.properties.magnitud >= 1.1 && spainjson.properties.magnitud <=2.5)  {
              theColor = 'orange';
            }  
            else {
              theColor = 'red';
            }
            
            return (

            <Marker
              lat={spainjson.geometry.coordinates[1]}
              lng={spainjson.geometry.coordinates[0]}
              text={spainjson.properties.localizacion}
              magnitud={spainjson.properties.magnitud}
              hour={spainjson.properties.hora}
              
              color={theColor}
              onClick={()=> this.showInfo(spainjson.properties.magnitud, spainjson.properties.fecha, spainjson.properties.localizacion, spainjson.properties.hora, spainjson.properties.profundidad)}
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