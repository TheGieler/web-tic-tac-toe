import { db } from "./api.mjs";

const createPlayer = async (num) => {
  const docRef = await db.collection("players").add({
    player: `Player ${num}`,
  });
  console.log(`Player ${num} created`);
  return docRef;
};

const main = async () => {
  const docRef = await createPlayer();
};
main();
