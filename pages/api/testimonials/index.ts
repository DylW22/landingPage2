//import { MongoClient } from "mongodb";
import { NextApiHandler } from "next";
import { Testimonial } from "../../../types/types";
//import clientPromise from "../../../lib/mongodb";
import client from "../../../lib/mongodb";

// if (!process.env.MONGODB_URI) {
//   throw new Error("MONGODB_URI is not defined in environment variables");
// }
// const client = new MongoClient(process.env.MONGODB_URI);

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    await client.connect();
    //const client = await clientPromise;
    const database = client.db("myDatabase");
    const collection = database.collection<Testimonial>("testimonials");
    try {
      const testimonials: Testimonial[] = await collection.find({}).toArray();
      res.status(200).json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
    }

    //const bucket = new GridFSBucket(database);
    //const images = bucket.find({}).toArray();
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
