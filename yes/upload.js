const config = {
  apiKey: "AIzaSyCjU3LdLirPE5vk5CfbNVxx-Jch_8rpoQI",
  authDomain: "dt-practice.firebaseapp.com",
  databaseURL: "https://dt-podcastuploads.firebaseio.com/",
  projectId: "dt-practice",
  storageBucket: "dt-practice.appspot.com",
  messagingSenderId: "931808548280",
  appId: "1:931808548280:web:e9ba50ee9fb864311aab4d",
  measurementId: "G-38YHSQH40N"
};

firebase.initializeApp(config);
var requests = firebase.database().ref("/published-episodes/");
var selectedFile;

function getID(id) {
  return document.getElementById(id).value;
}

/*
$("#file").on("change", function(event) {
  
});*/
  
document.getElementById("file").addEventListener("change",(e) => {
      e.preventDefault();
      
      
      uploadForm.set({
          podcastName : getID("inputPCName"),
          episodeName : getID("inputEpisodeName"),
          podcastInfo : getID("inputDescription"),
          userEmail : getID("inputEmail"),
          rSS : getID("inputRSS"),
          fileUpload : getID("file")
      });

      selectedFile = event.target.files[0];
      var filename = selectedFile.name;
      var storageRef = requests.child(fileUpload);
      var uploadTask = storageRef.put(selectedFile);

      uploadTask.on('stage_changed', function(snapshot) {

      }, function(error) {
          //unsuccesful
      }, function() {
          var downloadURL = uploadTask.snapshot.downloadURL;
          console.log(downloadURL);
      });


      var uploadForm = uploads.push();
      
      alert("Request submitted!");
      console.log("Request submitted");
      document.getElementById("uploads").reset();
      window.location.href = 'https://publish.spext.co';
});


/* code from Google git documentation
    var auth = firebase.auth();
    var storageRef = firebase.storage().ref();

    function handleFileSelect(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      var file = evt.target.files[0];

      var metadata = {
        'contentType': file.type
      };

      // Push to child path.
      // [START oncomplete]
      storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
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
    }

    window.onload = function() {
      document.getElementById('file').addEventListener('change', handleFileSelect, false);
      document.getElementById('file').disabled = true;

      auth.onAuthStateChanged(function(user) {
        if (user) {
          console.log('Anonymous user signed-in.', user);
          document.getElementById('file').disabled = false;
        } else {
          console.log('There was no anonymous session. Creating a new anonymous user.');
          // Sign the user in anonymously since accessing Storage requires the user to be authorized.
          auth.signInAnonymously().catch(function(error) {
            if (error.code === 'auth/operation-not-allowed') {
              window.alert('Anonymous Sign-in failed. Please make sure that you have enabled anonymous ' +
                  'sign-in on your Firebase project.');
            }
          });
        }
      });
    }
*/