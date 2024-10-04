import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const handler = async (req, res) => {
  await client.connect();
  // Choose a name for your database
  const database = client.db("myDatabase");

  // Choose a name for your collection
  const collection = database.collection("blogPosts");
  if (req.method === "GET") {
    try {
      const allData = await collection.find({}).toArray();

      res.status(200).json(allData);
    } catch (error) {
      console.log("error:", error);
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
    }
  }
};
export default handler;
