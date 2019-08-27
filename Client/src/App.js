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
import Home from './components/Home'
import ProtectedRoute from './components/routes/ProtectedRoute'
import Chart from './components/Chart'
import Navbar from './components/Navbar'
//import Navbar from './components/Chart'
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
        <>
       <Navbar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
        
          
          
          <Switch>
          
             <Route path="/" exact render={match => <Home {...match} setUser={this.setTheUser} />} />
             <Route path="/profile" exact render={match => <Profile {...match} setUser={this.setTheUser} />} />
             <Route path="/signup" exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
             <Route path="/login" exact render={match => <Login {...match} setUser={this.setTheUser} />} />
             <ProtectedRoute path='/maps' exact user={this.state.loggedInUser} component={Maps} />} />
             <ProtectedRoute path='/mapspain' exact user={this.state.loggedInUser} component={MapSpain} />} />
          
            
          </Switch>
        </>
      );
    } else {
      return (
        <>
           <Navbar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
        
          {/* <Maps></Maps> */}
          
          
          <Switch>
          {/* <Route path="/" exact component={Signup}></Route> */}

             <Route path="/" exact render={match => <Home {...match} setUser={this.setTheUser} />} />
             <Route path="/profile" exact render={match => <Profile {...match} setUser={this.setTheUser} />} />
             <Route path="/signup" exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
             <Route path="/login" exact render={match => <Login {...match} setUser={this.setTheUser} />} />
             <ProtectedRoute path='/maps' exact user={this.state.loggedInUser} component={Maps} />} />
             <ProtectedRoute path='/mapspain' exact user={this.state.loggedInUser} component={MapSpain} />} />
          </Switch>
        </>
      );
    }
  }
}

export default App;