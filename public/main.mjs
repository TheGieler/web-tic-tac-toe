import { db } from "./api.mjs";

const printPlayerName = async (docRef) => {
  const playerId = docRef.id;
  const playerRef = await db.collection("players").doc(playerId).get();
  const playerName = playerRef.data().player;
  document.getElementById("playerName").innerHTML = `You are ${playerName}`;
};
