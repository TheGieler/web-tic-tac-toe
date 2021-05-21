import { db } from "./api.mjs";

const createPlayer = async () => {
  const querySnapshot = await db.collection("players").get();
  const docRef = await db.collection("players").add({
    player: `Player`,
    color: "",
  });
  return docRef;
};

const printPlayerName = async (docRef) => {
  const playerId = docRef.id;
  const playerRef = await db.collection("players").doc(playerId).get();
  const playerName = playerRef.data().player;
  document.getElementById("playerName").innerHTML = `You are ${playerName}`;
};

const main = async () => {
  const docRef = await createPlayer();
  printPlayerName(docRef);
};
main();

// db.collection("players")
//   .doc("dGr7mwqccimNwnZOWrVx")
//   .onSnapshot((collectionSnapshot) => {
//     console.log(collectionSnapshot.data());
//   });
