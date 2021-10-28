import { getAuth as getAuthFromFireBase, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";



class Auth{
    constructor(){
        this.auth = getAuthFromFireBase() 
        this.callback = null   
    }
    check = () => {
        onAuthStateChanged(this.auth, this.switcher);
    }
    switcher = (user) => {
        if (user) {
            // const uid = user.uid;
            user.providerData.forEach((profile) => {
                // console.log("Sign-in provider: " + profile.providerId);
                // console.log("  Provider-specific UID: " + profile.uid);
                // console.log("  Name: " + profile.displayName);
                // console.log("  Email: " + profile.email);
                // console.log("  Photo URL: " + profile.photoURL);
            });
            if(this.callback){
                this.callback(true)
            }
            // authentication(true)
        } else {
            console.log('No user logged');
            if(this.callback){
                this.callback(false)
            }
            // authentication(false)
        }
    }
    setCallback(callback){
        this.callback = callback
    }
    singOut = () => {
        this.auth.signOut();
    }
    getAuth = () => {
        return this.auth
    }
}

let auth = new Auth()



export default auth