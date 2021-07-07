// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBzv-g3rT-5kbFTp4QM239PkxEUPY75aF8",
    authDomain: "lets-chat-759af.firebaseapp.com",
    databaseURL: "https://lets-chat-759af-default-rtdb.firebaseio.com",
    projectId: "lets-chat-759af",
    storageBucket: "lets-chat-759af.appspot.com",
    messagingSenderId: "229036856103",
    appId: "1:229036856103:web:899da09b672c05ba7acf02"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("username");
  room_name=localStorage.getItem("room_name");

  function send(){
    msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").innerHTML="";
}
  
  function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }
  