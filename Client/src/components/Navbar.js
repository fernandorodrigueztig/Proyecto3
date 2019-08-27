import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AuthServices from '../services/Auth.services'

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
                    <div className="toggle-menu" onClick={this.toggleMenu}>&equiv; </div>
                    <header className="menu">
                        
                        <nav class="navbar navbar-dark bg-dark">
                        <h1>Jishin</h1>
                                <p><Link to="/">Home</Link></p>
                                <p><Link to="/login">Login</Link></p>
                                <p><Link to="/profile">Profile</Link></p>
                                <p><Link to="/signup">Signup</Link></p>
                                <p><div onClick={this.logout}>Cerrar sesión</div></p>
                                <p><small>Bienvenid@, {saludo}</small></p>
                            
                        </nav>
                    </header>
                </>
            )
        } else {
            return (
                <>
                    <div className="toggle-menu" onClick={this.toggleMenu}>&equiv; </div>
                    <header className="menu">
                        
                        <nav class="navbar navbar-dark bg-dark">
                        <h1>Jishin</h1>
                                <p><Link to="/">Home</Link></p>
                                <p><Link to="/login">Login</Link></p>
                                
                                <p><Link to="/signup">Signup</Link></p>
                                <p><Link to="/profile">Profile</Link></p>
                                <p><div onClick={this.logout}>Cerrar sesión</div></p>
                                <p><small>Bienvenid@, {saludo}</small></p>
                                
                            
                        </nav>
                    </header>
                </>
            )
        }

    }
}
export default NavBar