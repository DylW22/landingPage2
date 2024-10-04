import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const handler = async (req, res) => {
  await client.connect();
  const database = client.db("myDatabase");
  const collection = database.collection("blogPosts");
  if (req.method === "GET") {
    const { _id } = req.query;
    if (!_id) {
      res.status(405).json({ message: "Method not allowed!" });
    }

    try {
      const post = await collection.findOne({ _id: new ObjectId(_id) });
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.status(200).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    } finally {
      await client.close();
    }
  }
};
export default handler;
