import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";


export const SignUpApi = (data) => {
    console.log("SignUpApi", data);

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ payload: "Check Your Email." });
                        })
                        .catch((e) => {
                            reject({ payload: e });
                        })
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/email-already-in-use") == 0) {
                    reject({ payload: "Email is Already Registered" });
                } else {
                    reject({ payload: errorMessage });
                }

                console.log(error);
            });
    })
}

export const SignInapi = (data) => {
    console.log("SignInapi ", data);

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;

                if (user.emailVerified) {
                    resolve({ payload: "Login Is Succesfully" });
                } else {
                    resolve({ payload: "First Is Email Varify." });
                }

                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/wrong-password") == 0) {
                    reject({ payload: "Please Check Your Email or password."});
                } else {
                    reject({ payload: errorCode });
                }
            });
    })
}