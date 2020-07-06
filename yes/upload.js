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

var selectedFile;
var downloadURL;

document.getElementById("file").addEventListener("change",(e) => {
      e.preventDefault();
      
      selectedFile = event.target.files[0];
      var filename = selectedFile.name;
      var storageRef = firebase.storage().ref().child(filename);
      var uploadTask = storageRef.put(selectedFile);

      uploadTask.on('state_changed', function(snapshot) {
      console.log('snapshot', snapshot)
      }, function(error) {
          //unsuccesful
      }, function() {
          downloadURL = uploadTask.snapshot.downloadURL;
          console.log(downloadURL);
      });
});

var uploads = firebase.database().ref("/published-episodes");

document.getElementById("form").addEventListener("submit",(e) => {
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

});