import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import AuthServices from '../services/Auth.services'
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'

class NavBar extends Component {

    constructor(props) {
        super(props)
        this.authServices = new AuthServices()
    }


    toggleMenu = () => document.querySelector('.menu').classList.toggle('abierto')

    logout = () => {
        this.authServices.logout()
            .then(x => {
                this.props.setUser(null)
            })
            .catch(err => console.log(err))
    }


    render() {

        const saludo = this.props.userInSession ? this.props.userInSession.data.username : 'invitado'


        if (this.props.userInSession) {
            return (
                <>
                    <header className="menu">
                        
                        <nav className="navbar  navbar-dark bg-dark">
                        
                        <h1>Jishin</h1>
                                <p><Link to="/">Home</Link></p>
                                <p><Link to="/login">Login</Link></p>
                                <p><Link to="/profile">Profile</Link></p>
                                <p><Link to="/signup">Signup</Link></p>
                                <p><Link onClick={this.logout}>Logout</Link></p>
                                <font color="white" face="roboto">
                                <p><small>Bienvenid@, {saludo}</small></p>
                                </font>
                              
                        </nav>
                    </header>
                </>
            )
        } else {
            return (
                <>
                    {/* <div className="toggle-menu" onClick={this.toggleMenu}>&equiv; </div>
                    <header className="menu">
                        
                        <nav class="navbar navbar-dark bg-dark">
                        <h1>Jishin</h1>
                                <p><Link to="/">Home</Link></p>
                                <p><Link to="/login">Login</Link></p>
                                <p><Link to="/signup">Signup</Link></p>
                                <p><Link to="/profile">Profile</Link></p>
                                <p><Link to onClick={this.logout}>Logout</Link></p>
                                <p><small>Bienvenid@, {saludo}</small></p>
                                
                            
                        </nav>
                    </header> */}


<>
  <Navbar bg="dark" variant="dark">
   
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/signup">Signup</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link to onClick={this.logout}>Logout</Nav.Link>
      <p><large>Bienvenid@, {saludo}</large></p>
    </Nav>
  </Navbar>
 </>
</>
            )
        }

    }
}
export default NavBar