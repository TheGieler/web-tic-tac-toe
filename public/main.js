// Initialize Cloud Firestore through Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBHKE8GChoFYjCJOzSryx6m0JG7JU6Jc_M",
  authDomain: "webbased-tic-tac-toe.firebaseapp.com",
  projectId: "webbased-tic-tac-toe",
  storageBucket: "webbased-tic-tac-toe.appspot.com",
  messagingSenderId: "446017794661",
  appId: "1:446017794661:web:c369787ddecbabfad44c8c",
  measurementId: "G-SDZ9YKPG56",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

const main = async () => {
  const docRef = await db.collection("players").add({
    player: "Player",
  });
  const playerId = docRef.id;
};
main();
