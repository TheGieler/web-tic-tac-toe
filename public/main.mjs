import { db } from "./api.mjs";

const createPlayer = async (num) => {
  const docRef = await db.collection("players").add({
    player: `Player ${num}`,
  });
  console.log(`Player ${num} created`);
  return docRef;
};

db.collection("players").onSnapshot((a) => {
  const arr = a.docs.map((x) => x);
  const playerNumber = arr.length + 1;
  if (arr.find((p) => p.data().player === "Player 1")) {
    if (arr.find((p) => p.data().player === "Player 2")) {
      console.log("Please enable the Playboard");
      return;
    }
    console.log("Please create Player 2");
    createPlayer(playerNumber);
    return;
  } else {
    console.log("Please create Player 1");
    createPlayer(playerNumber);
  }
});

const main = async () => {
  const docRef = await createPlayer();
};
main();
