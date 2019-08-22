import React, {Component} from 'react';

import './App.css';
import Profile from './components/Profile'
import { Switch, Route } from 'react-router-dom'
import AuthServices from './services/Auth.services'
//import NavBar from './components/Navbar'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Maps from './components/Maps'
import Marker from './components/Marker'
import MapSpain from './components/MapSpain'

//Browser Router en Index.js
//Aqui en app montar el Switch con las Routes. 
//Dentro los componentes
class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.authServices = new AuthServices()
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user })
    console.log("Un componente ha cambiado el usuario en App:", this.state.loggedInUser)
  }

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.authServices.loggedin()
        .then(response => this.setState({ loggedInUser: response }))
        .catch(x => this.setState({ loggedInUser: false }))
    }
  }

  render() {

    this.fetchUser()

    if (this.state.loggedInUser) {
      return (
       // <NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
        <>
          
          <h1>Estoy en App.js logueado</h1>
          <Switch>
          
          
            {/* <Route path="/" exact component={}></Route> */}
            {/* <Route path="/coasters" exact render={() => <CoastersList userInSession={this.state.loggedInUser} />} />
            <Route path="/coasters/:id" exact component={CoasterDetail} /> */}
          </Switch>
        </>
      );
    } else {
      return (
           //<NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
        <>
          {/* <Maps></Maps> */}
          <h1>Estoy en APP.js sin loguear</h1>
          
          
          <Switch>
          {/* <Route path="/" exact component={Signup}></Route> */}


             <Route path="/profile" exact render={match => <Profile {...match} setUser={this.setTheUser} />} />
             <Route path="/signup" exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
             <Route path="/login" exact render={match => <Login {...match} setUser={this.setTheUser} />} />
             <Route path="/maps" exact render={() => <Maps userInSession={this.state.loggedInUser} />} />
             <Route path="/mapspain" exact render={() => <MapSpain userInSession={this.state.loggedInUser} />} />
          </Switch>
        </>
      );
    }
  }
}

export default App;