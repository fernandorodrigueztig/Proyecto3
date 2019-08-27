import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AuthServices from '../services/Auth.services'
import Navbar from './Navbar'

class Paths extends Component {

  constructor(props) {
    super(props)
    this.authServices = new AuthServices()
}
  logout = () => {
    this.authServices.logout()
        .then(x => {
            this.props.setUser(null)
        })
        .catch(err => console.log(err))
}

    render() {
      return (
        


        <div className="backGround">
          <button type="button" class="btn btn-dark"><Link to="/maps" className="link">Seísmos globales</Link></button>
          <button type="button" class="btn btn-dark"><Link to="/mapspain" className="link">Seísmos en España</Link></button>
        </div>
        
      );
    }
  }
  export default Paths ;