import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


class Paths extends Component {
    render() {
      return (
        <>
        <div className="ProtectedPath">
          <div className="link-container">
            <Link to="/maps" className="link">Seísmos globales</Link>
          </div>
          <div className="link-container">
            <Link to="/mapspain" className="link">Seísmos en España</Link>
          </div>
          <div className="link-container">
            <Link to="/login" className="link">Login</Link>
          </div>
          <div className="link-container">
            <Link to="/signup" className="link">Signup</Link>
          </div>
          <div className="link-container">
            <Link to="/profile" className="link">Profile</Link>
          </div>
        </div>


        <div className="backGround">
          <button type="button" class="btn btn-dark"><Link to="/maps" className="link">Seísmos globales</Link></button>
          <button type="button" class="btn btn-dark"><Link to="/mapspain" className="link">Seísmos en España</Link></button>
        </div>
        </>
      );
    }
  }
  export default Paths ;