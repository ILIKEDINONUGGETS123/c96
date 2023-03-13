//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAxDSZKi-xOSidhHIJG6ikSrEP5ZjyGAPY",
    authDomain: "twitterforkids-6d72c.firebaseapp.com",
    databaseURL: "https://twitterforkids-6d72c-default-rtdb.firebaseio.com",
    projectId: "twitterforkids-6d72c",
    storageBucket: "twitterforkids-6d72c.appspot.com",
    messagingSenderId: "349347825672",
    appId: "1:349347825672:web:ae2dc781652b1f0dd5a9bd",
    measurementId: "G-LYRLV26VQ9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
    }
    
