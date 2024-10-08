import { ObjectId } from "mongodb";
import { NextApiHandler } from "next";
import { PhonePlanType } from "../../../types/types";
//import clientPromise from "../../../lib/mongodb";
import client from "../../../lib/mongodb";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    await client.connect();
    //const client = await clientPromise;
    const database = client.db("myDatabase");
    const collection = database.collection<PhonePlanType>("phonePlans");

    const _id = Array.isArray(req.query._id) ? req.query._id[0] : req.query._id;

    if (typeof _id !== "string" || !_id || !ObjectId.isValid(_id)) {
      return res
        .status(400)
        .json({ message: "Invalid or missing _id parameter" });
    }

    try {
      const plan: PhonePlanType | null = await collection.findOne({
        _id: new ObjectId(_id),
      });
      console.log("Fetched plan: ");
      if (!plan) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(plan);
    } catch (error) {
      console.log("error: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
    // finally {
    //   await client.close();
    // }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
