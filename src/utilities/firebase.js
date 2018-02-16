// Initialize Firebase
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBNNWo-YC9ZKm7iibSBIdxNL7TJ7TH5ew4",
    authDomain: "m8dd-ba609.firebaseapp.com",
    databaseURL: "https://m8dd-ba609.firebaseio.com",
    projectId: "m8dd-ba609",
    storageBucket: "m8dd-ba609.appspot.com",
    messagingSenderId: "890674824129"
  };

firebase.initializeApp(config);

export function google_signin() {
      return new Promise((resolve, reject) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            let user = result.user;
            let { displayName, email, uid } = user;
            firebase.database().ref('users/' + uid).set({ displayName, email, uid });
            return resolve(result);
        })
        .catch(function(error) {
            return reject(error);
        });
      });
}

export function check_session() {
    return firebase.auth().currentUser;
}


export function google_signOut() {
    return new Promise((resolve, reject ) => {
        firebase.auth().signOut().then(function() {
            return resolve()
          }).catch(function(error) {
            return reject(error)
          });
    })
}