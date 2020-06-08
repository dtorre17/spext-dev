//grab a form

var formData = {
    "inputPCName": $('inputPCName').val(),
    "inputPCURL": $('inputPCURL').val(),
    "inputDescription": $('inputDescription').val(),
    "inputUserName": $('inputUserName').val(),
    "inputEmail": $('inputEmail').val(),
}

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

//push on form submit
if (form) {
    
    $('#myForm').submit(function(evt) {
        evt.preventDefault(); //Prevent the default form submit action
      
        // You have formData here and can do this:
        firebase.initializeApp(firebaseConfig); //Initialize your firebase here passing your firebase account config object
        firebase.database().ref('/formDataTree').push( formData ); // Adds the new form data to the list under formDataTree node
        return alert('Podcast Submitted!');
      })

}
