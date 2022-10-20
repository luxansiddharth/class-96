const firebaseConfig = {
      apiKey: "AIzaSyCoEkV3lI32Z1Yy5OGegfkVMR6bL3ZhK2E",
      authDomain: "kwitter-bf7ed.firebaseapp.com",
      databaseURL: "https://kwitter-bf7ed-default-rtdb.firebaseio.com",
      projectId: "kwitter-bf7ed",
      storageBucket: "kwitter-bf7ed.appspot.com",
      messagingSenderId: "336567004204",
      appId: "1:336567004204:web:10278b33afd13ce2d8f589"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            Message:msg,
            likes:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
