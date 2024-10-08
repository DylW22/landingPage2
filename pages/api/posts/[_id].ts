import { BlogPost } from "./../../../types/types";
import { ObjectId } from "mongodb";
import { NextApiHandler } from "next";
//import clientPromise from "../../../lib/mongodb";
import client from "../../../lib/mongodb";

// if (!process.env.MONGODB_URI) {
//   throw new Error("MONGODB_URI is not defined in environment variables");
// }

// const client = new MongoClient(process.env.MONGODB_URI);

const handler: NextApiHandler<BlogPost | { message: string }> = async (
  req,
  res
) => {
  await client.connect();
  //const client = await clientPromise;
  const database = client.db("myDatabase");
  const collection = database.collection<BlogPost>("blogPosts");
  if (req.method === "GET") {
    // const { _id } = req.query;

    const _id = Array.isArray(req.query._id) ? req.query._id[0] : req.query._id;

    if (typeof _id !== "string" || !_id || !ObjectId.isValid(_id)) {
      return res
        .status(400)
        .json({ message: "Invalid or missing _id parameter" });
    }

    try {
      const post: BlogPost | null = await collection.findOne({
        _id: new ObjectId(_id),
      });

      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      console.log("post: ", post);
      //const blogPost = post as BlogPost;
      res.status(200).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
};
export default handler;
