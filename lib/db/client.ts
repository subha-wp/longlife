import { openDB } from "idb";

const DB_NAME = "products-db";
export const STORE_NAME = "products";

export const db = openDB(DB_NAME, 1, {
  upgrade(db) {
    const store = db.createObjectStore(STORE_NAME, {
      keyPath: "id",
      autoIncrement: false,
    });
    store.createIndex("series", "series");
    store.createIndex("created_at", "created_at");
  },
});
