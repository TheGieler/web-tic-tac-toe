import { db } from "./api.mjs";

const main = async () => {
  const querySnapshot = await db.collection("players").get();
  const docRef = await db.collection("players").add({
    player: `Player`,
    color: "",
  });
  printPlayerName(docRef);
};
main();

const printPlayerName = async (docRef) => {
  const playerId = docRef.id;
  const playerRef = await db.collection("players").doc(playerId).get();
  const playerName = playerRef.data().player;
  document.getElementById("playerName").innerHTML = `You are ${playerName}`;
};

// db.collection("players")
//   .doc("dGr7mwqccimNwnZOWrVx")
//   .onSnapshot((collectionSnapshot) => {
//     console.log(collectionSnapshot.data());
//   });
