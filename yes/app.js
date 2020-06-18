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

const history = createBrowserHistory();

var requests = firebase.database().ref("podcast-requests");

document.getElementById("form").addEventListener("submit",(e) =>{
    e.preventDefault();

    var requestForm = requests.push();

    requestForm.set({
        podcastName : getID("inputPCName"),
        podcastURL : getID("inputPCURL"),
        podcastInfo : getID("inputDescription"),
        userName : getID("inputUserName"),
        userEmail : getID("inputEmail"),
        artFile : uploadFile("imgUpload")
    });
    
    alert("Request submitted!");
    console.log("Request submitted");
    document.getElementById("form").reset();
    window.location.href = 'https://publish.spext.co';
});

function getID(id) {
    return document.getElementById(id).value;
}


// script for 2 step upload form
var uploads = firebase.database().ref("published-episodes");

document.getElementById("uploads").addEventListener("submit",(e) =>{
    e.preventDefault();

    var uploadForm = uploads.push();

    uploadForm.set({
        podcastName : getID("inputPCName"),
        episodeName : getID("inputEpisodeName"),
        podcastInfo : getID("inputDescription"),
        userEmail : getID("inputEmail"),
        rSS : getID("inputRSS"),
        fileUpload : uploadFile("imgUpload")
    });
    
    alert("Request submitted!");
    console.log("Request submitted");
    document.getElementById("uploads").reset();
    window.location.href = 'https://publish.spext.co';
});

function uploadFile(files) {
    const storageRef = firebase.ref("published-episodes");
    const artFile = storageRef.child('art-file');

    const file = files.item(0);

    const task = artFile.put(file);

    task.then(snapshot => {
        console.log(snapshot)
        const url = snapshot.downloadURL
        document.querySelector('#imgUpload').setAttribute('src', url)
    });
    return task;
} 

function goBack() {
  this.history.back();
}
