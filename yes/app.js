'use strict';

//grab a form

var formData = {
    "inputPCName": $('inputPCName').val(),
    "inputPCURL": $('inputPCURL').val(),
    "inputDescription": $('inputDescription').val(),
    "inputUserName": $('inputUserName').val(),
    "inputEmail": $('inputEmail').val(),
}


/*
const form = document.querySelector('.form-inline');
//grab podcast name
const inputPCName = form.querySelector('#inputPCName');
//grab podcast URL
const inputPCURL = form.querySelector('#inputPCURL');
//grab podcast add info
const inputDescription = form.querySelector('#inputDescription');
//grab user name
const inputUserName = form.querySelector('#inputUserName');
//grab user email
const inputEmail = form.querySelector('#inputEmail');

document.addEventListener("DOMContentLoaded", event => {
    
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

/*
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
    var podcastAddInfoRef = firebase.database().ref('podcastInfos').push().set(
        {
            pcAddInfo: input.value
        }
    );
    var userNameRef = firebase.database().ref('userNames').push().set(
        {
            usrName: input.value
        }
    );
    var userEmail = firebase.database().ref('userEmails').push().set(
        {
            usrEmail: input.value
        }
    );
}*/

//push on form submit
if (form) {
    
    $('#myForm').submit(function(evt) {
        evt.preventDefault(); //Prevent the default form submit action
      
        // You have formData here and can do this:
        firebase.initializeApp(firebaseConfig); //Initialize your firebase here passing your firebase account config object
        firebase.database().ref('/formDataTree').push( formData ); // Adds the new form data to the list under formDataTree node
        return alert('Podcast Submitted!');
      })
    /*
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        firebasePush(inputPCName);
        firebasePush(inputPCURL);
        firebasePush(inputDescription);
        firebasePush(inputUserName);
        firebasePush(inputEmail);
        //shows alert if everything went well.
        return alert('Podcast Submitted!');
    })*/
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