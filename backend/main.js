const { MongoClient } = require("mongodb");
const Express = require("express");

const app = Express();

const mongoClient = new MongoClient('mongodb://root:example@localhost:27017/');
let database, collection;

app.get("/posts", async (request, response) => {
  try {
    await mongoClient.db('local').collection('posts').insertOne({
      title: "Lovely Loft",
      message: "A charming loft in Paris",
      date: new Date(),
      username: 'username'
    });
    const results = await mongoClient.db('local').collection('posts').find({}).limit(5).toArray();
    response.send(results);
  } catch (error) {
    response.status(500).send({ "message": error.message });
  }
});

app.post("/auth", async (req, res) => {
  try {
    res.send(req.username);
  } catch (error) {
    res.status(500).send({ "message": error.message });
  }
});

const server = app.listen(3000, async () => {
  try {
    console.log('connecting to db...');
    await mongoClient.connect();
    await listDatabases(mongoClient);
    console.log("Listening at :3000");
  } catch (error) {
    console.error(error);
  }
});

process.on("SIGTERM", async () => {
  mongoClient.close();
  server.close(() => {
    console.log("NODE APPLICATION TERMINATED!");
  });
});

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};