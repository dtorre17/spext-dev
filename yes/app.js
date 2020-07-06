const config = {
    apiKey: "AIzaSyCjU3LdLirPE5vk5CfbNVxx-Jch_8rpoQI",
    authDomain: "dt-practice.firebaseapp.com",
    databaseURL: "https://dt-practice.firebaseio.com",
    projectId: "dt-practice",
    storageBucket: "dt-practice.appspot.com",
    messagingSenderId: "931808548280",
    appId: "1:931808548280:web:e9ba50ee9fb864311aab4d",
    measurementId: "G-38YHSQH40N"
  };

firebase.initializeApp(config);

function getID(id) {
  return document.getElementById(id).value;
}

var requests = firebase.database().ref("/podcast-requests");

document.getElementById("form").addEventListener("submit",(e) =>{
    e.preventDefault();

    var requestForm = requests.push();

    requestForm.set({
        podcastName : getID("inputPCName"),
        podcastURL : getID("inputPCURL"),
        podcastInfo : getID("inputDescription"),
        userName : getID("inputUserName"),
        userEmail : getID("inputEmail"),
        
    });
    
    alert("Request submitted!");
    console.log("Request submitted");
    document.getElementById("form").reset();
    window.location.href = 'https://publish.spext.co';
});

