import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}`,
            withCredentials: true
        })
    }

    signup = (username, password) => this.service.post('signup', { username, password })
    login = (username, password) => this.service.post('login', { username, password })
    logout = () => this.service.post('logout')
    loggedin = () => this.service.get('loggedin')
}