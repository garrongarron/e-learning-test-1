import './FirebaseConnection.js'
import auth from './Auth.js'
import authentication from "./AuthenticationInterface.js";

auth.setCallback(authentication.authentication)
auth.check()