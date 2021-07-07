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
  document.getElementById("username").innerHTML="Welcome "+user_name+"!";

  function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
  }
  function getData(){
    firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - "+room_name);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location="index.html";
}