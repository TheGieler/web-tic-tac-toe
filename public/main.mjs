import { db } from "./api.mjs";

const createPlayer = async () => {
  const docRef = await db.collection("players").add({
    player: `Player`,
  });
  return docRef;
};

const main = async () => {
  const docRef = await createPlayer();
};
main();
