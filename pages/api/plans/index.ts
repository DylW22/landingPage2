//import { MongoClient } from "mongodb";
import { NextApiHandler } from "next";
import { PhonePlanType } from "../../../types/types";
//import clientPromise from "../../../lib/mongodb";
import client from "../../../lib/mongodb";

// if (!process.env.MONGODB_URI) {
//   throw new Error("MONGODB_URI is not defined in environment variables");
// }
//const client = new MongoClient(process.env.MONGODB_URI);

// const client = new MongoClient(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const handler: NextApiHandler = async (req, res) => {
  await client.connect();
  //const client = await clientPromise;
  const database = client.db("myDatabase");

  const collection = database.collection<PhonePlanType>("phonePlans");
  if (req.method === "GET") {
    try {
      const phonePlans: PhonePlanType[] = await collection.find({}).toArray();

      return res.status(200).json(phonePlans);
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
