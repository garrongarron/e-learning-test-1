import './FirebaseConnection.js'
import auth from './Auth.js'
import authentication from "./AuthenticationInterface.js";

let init = () => {
    auth.setCallback(authentication.authentication)
    auth.check()
}

export default init