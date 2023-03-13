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
  function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  
  