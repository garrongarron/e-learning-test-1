import { signInWithCustomToken, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import auth from "./Auth.js";
import authenticationInterface from "./AuthenticationInterface.js";



const provider = new FacebookAuthProvider();

let logginFromFacebook = () => {
    console.log('trying with facebook');
    signInWithPopup(auth.getAuth(), provider)
        .then((result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const user = result.user;
            const accessToken = credential.accessToken;
            console.log(result);
        }).catch((error) => {
            if (error.code == 'auth/account-exists-with-different-credential') {
                let verifiedProvider = error.customData._tokenResponse.verifiedProvider[0].split('.')[0]
                console.log(`intenta con ` + verifiedProvider);
                if (verifiedProvider == 'google') {
                    authenticationInterface.hideOption.hideOption('.fb')
                }
            } else {
                console.log(error);
            }
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
        });
}

export default logginFromFacebook



