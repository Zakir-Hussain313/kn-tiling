import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

if (!dbName) {
  throw new Error("Please define the MONGODB_DB environment variable");
}

let client: MongoClient;
let db: Db;

export async function getDB(): Promise<Db> {
  if (!client) {
    client = new MongoClient(uri);
  }

  if (!db) {
    await client.connect();
    db = client.db(dbName);
  }

  return db;
}
