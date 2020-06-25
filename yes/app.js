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

document.getElementById("uploads").addEventListener("submit",(e) => {
    e.preventDefault();

    var uploadForm = uploads.push();

    uploadForm.set({
        podcastName : getID("inputPCName"),
        episodeName : getID("inputEpisodeName"),
        podcastInfo : getID("inputDescription"),
        userEmail : getID("inputEmail"),
        rSS : getID("inputRSS"),
        fileUpload : getID("file")
    });
    
    alert("Request submitted!");
    console.log("Request submitted");
    document.getElementById("uploads").reset();
    window.location.href = 'https://publish.spext.co';
});


document.getElementById('file').addEventListener('change', handleFileSelect, false);
document.getElementById('file').disabled = true;

function handleFileSelect(evt) {

    evt.stopPropagation();
    evt.preventDefault();
    var file = evt.target.files[0];

      var metadata = {
        'contentType': file.type
      };

        const imgRef = uploads.child('artfile.jpg');

        const file = files.item(0);

        const task = imgRef.put(file);

        // successful upload
        task.then(snapshot => {
            const url = snapshot.downloadURL
        })

        // monitor progress
        task.on('state_changed', snapshot => {
            console.log(snapshot)

        })
    /*

      // Push to child path.
      // [START oncomplete]
      uploads.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        console.log('File metadata:', snapshot.metadata);
        // Let's get a download URL for the file.
        snapshot.ref.getDownloadURL().then(function(url) {
          console.log('File available at', url);
          // [START_EXCLUDE]
          document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
          // [END_EXCLUDE]
        });
      }).catch(function(error) {
        // [START onfailure]
        console.error('Upload failed:', error);
        // [END onfailure]
      });
      // [END oncomplete]
    */
    
}

function goBack() {
  this.history.back();
}