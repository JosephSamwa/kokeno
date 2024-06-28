const firebaseConfig = {
    apiKey: "AIzaSyAujFKDx_T7ZSEyYGmvbdhkmn8SdKCNXjs",
    authDomain: "hope-kokeno-cbo.firebaseapp.com",
    databaseURL: "https://hope-kokeno-cbo-default-rtdb.firebaseio.com",
    projectId: "hope-kokeno-cbo",
    storageBucket: "hope-kokeno-cbo.appspot.com",
    messagingSenderId: "508964589142",
    appId: "1:508964589142:web:33a4d190a497bb5ecab5f7"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("HOPE KOKENO-CBO MEMBERS");

// Fetch user data and populate the table
function readData() {
    const dbref = ref(db);
    const tableBody = document.querySelector('#userTable tbody');
    
