//import { MongoClient } from "mongodb";
import { NextApiHandler } from "next";
import { BlogPost } from "../../../types/types";
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

  // Choose a name for your database
  const database = client.db("myDatabase");

  // Choose a name for your collection
  const collection = database.collection<BlogPost>("blogPosts");
  if (req.method === "GET") {
    try {
      const allData: BlogPost[] = await collection.find({}).toArray();

      res.status(200).json(allData);
    } catch (error) {
      console.log("error:", error);
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
export default handler;
