import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AuthServices from '../services/Auth.services'


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
        <div >
        <div style={{display: "flex"}} className="ProtectedPath">
          <div className="link-container">
            <Link to="/maps" className="link" style={{padding: "10px"}}>Seísmos globales</Link>
          </div>
          <div className="link-container">
            <Link to="/mapspain" className="link" style={{padding: "10px"}}>Seísmos en España</Link>
          </div>
          <div className="link-container">
            <Link to="/login" className="link" style={{padding: "10px"}}>Login</Link>
          </div>
          <div className="link-container">
            <div className="link" onClick={this.logout} style={{padding: "10px"}}><Link>Cerrar sesión</Link></div>
          </div>
          <div className="link-container">
            <Link to="/signup" className="link" style={{padding: "10px"}}>Signup</Link>
          </div>
          <div className="link-container">
            <Link to="/profile" className="link" style={{padding: "10px"}}>Profile</Link>
          </div>
        </div>


        <div className="backGround">
          <button type="button" class="btn btn-dark"><Link to="/maps" className="link">Seísmos globales</Link></button>
          <button type="button" class="btn btn-dark"><Link to="/mapspain" className="link">Seísmos en España</Link></button>
        </div>
        </div>
      );
    }
  }
  export default Paths ;