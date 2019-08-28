
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import spainjson from '../earthquakes-spain.json'
import Modal from 'react-bootstrap/Modal'
import Navbar from './Navbar'

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
      showModal: false,
      magnitud: 'aqui esto falta',
      date: '',
      place: ''

    };
  }
  handleModalOpen = () => this.setState({ showModal: true })
  handleModalClose = () => this.setState({ showModal: false })
 
  showInfo = (mag, dat, pla) =>{
      this.setState({
        magnitud: mag,
        date: dat,
        place: pla
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
        en {this.state.place}</p>
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
            return (

            <Marker
              lat={spainjson.geometry.coordinates[1]}
              lng={spainjson.geometry.coordinates[0]}
              text="My Marker"
              onClick={()=> this.showInfo(spainjson.properties.magnitud, spainjson.properties.fecha, spainjson.properties.localizacion)}
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