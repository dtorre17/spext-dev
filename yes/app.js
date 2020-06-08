'use strict';

//grab a form
const form = document.querySelector('.form-inline');

//grab an input
const podcastName = form.querySelector('#podcastName');

const podcastURL = form.querySelector('#podcastURL');


/*document.addEventListener("DOMContentLoaded", event => {
    
    const app = firebase.app();
    

});*/

const firebaseConfig = {
    apiKey: "AIzaSyCjU3LdLirPE5vk5CfbNVxx-Jch_8rpoQI",
    authDomain: "dt-practice.firebaseapp.com",
    databaseURL: "https://dt-practice.firebaseio.com",
    projectId: "dt-practice",
    storageBucket: "dt-practice.appspot.com",
    messagingSenderId: "931808548280",
    appId: "1:931808548280:web:e9ba50ee9fb864311aab4d",
    measurementId: "G-38YHSQH40N"
  };

//create a functions to push
function firebasePush(input) {

    //prevents from breaking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    //push itself
    var podcastNameRef = firebase.database().ref('podcastNames').push().set(
        {
            pcName: input.value
        }
    );

    var podcastURLRef = firebase.database().ref('podcastURLs').push().set(
        {
            pcURL: input.value
        }
    );

}

//push on form submit
if (form) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        firebasePush(inputPCName);
        firebasePush(inputPCURL);
        //shows alert if everything went well.
        return alert('Data Successfully Sent to Realtime Database');
    })
}

/*
function uploadFile(files) {
    const storageRef = firebase.storage().ref();
    const horseRef = storageRef.child('horse.jpg');

    const file = files.item(0);

    const task = horseRef.put(file);

    task.then(snapshot => {
        console.log(snapshot)
        const url = snapshot.downloadURL
        document.querySelector('#imgUpload').setAttribute('src',url)
    })
        
}*/