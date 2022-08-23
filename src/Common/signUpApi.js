import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../Firebase";


export const SignUpApi  = (data) => {
    console.log("SignUpApi", data);

    return new Promise ((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.signUpUser ;
                console.log(signUpUser);

                onAuthStateChanged(auth, (signUpUser) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                           resolve({payload : "Check Your Email."});
                        })
                        .catch((e) => {
                            reject({payload : e});
                        })
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/email-already-in-use") == 0) {
                        reject({payload : "Email is Already Registered"});                
                } else {
                    reject({payload : errorMessage});
                }

                console.log(error);
            });

    })
}