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

var requests = firebase.database().ref("requests");

var submitRequest = function() {
    
    var inputPCName = $("#inputPCName").val();
    var inputPCURL = $("#inputPCURL").val();
    var inputDescription = $("#inputDescription").val();
    var inputUserName = $("#inputUserName").val();
    var inputEmail = $("#inputEmail").val();

    

    requests.push({
        "inputPCName": inputPCName,
        "inputPCURL" : inputPCURL,
        "inputDescription" : inputDescription,
        "inputUserName": inputUserName,
        "inputEmail" : inputEmail
    });

};

$(window).load(function () {

    // Find the HTML element with the id recommendationForm, and when the submit
    // event is triggered on that element, call submitRecommendation.
    $("#myForm").submit(submitRequest);
  
});
