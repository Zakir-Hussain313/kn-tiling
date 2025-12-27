// src/lib/mongodb.ts
import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = "tiling_services";

export async function getDB() {
  if (!client.isConnected?.()) await client.connect();
  return client.db(dbName);
}
