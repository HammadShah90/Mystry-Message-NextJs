import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("=> using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI || "");
    console.log(db);
    console.log(db.connections);

    connection.isConnected = db.connections[0].readyState;
    console.log("Db Connected Successfully");
  } catch (error) {
    console.log("Db Connection Failed", error);
    process.exit(1);
  }
}
