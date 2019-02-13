// Initialize Firebase
var config = {
    apiKey: "AIzaSyAvy1aiKyvWRHfREMBvSMrr4AkQM4R1jkA",
    authDomain: "contactform-70ad6.firebaseapp.com",
    databaseURL: "https://contactform-70ad6.firebaseio.com",
    projectId: "contactform-70ad6",
    storageBucket: "contactform-70ad6.appspot.com",
    messagingSenderId: "749025865816"
  };
  firebase.initializeApp(config);

  var messagesRef = firebase.database().ref('messages');
document.getElementById("kontakt").addEventListener("submit",submitForm);
function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var message = getInputVal('message');

    saveMessage(name,subject,email,message);
    
    document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    document.getElementById('kontakt').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, subject, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name : name,
        subject : subject,
        email : email,
        message : message
    });
}