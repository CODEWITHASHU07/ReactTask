const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 7500;
app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client
  .connect()
  .then(() => {
    console.log("MongoDB connected");
    const db = client.db("UserData");

    app.get("/api/users", async (req, res) => {
      try {
        const users = await db.collection("UserInformation").find().toArray();
      
        res.json(users);
      } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Error fetching users" });
      }
    });

    app.post("/api/login", async (req, res) => {
      try {
        const { username, password } = req.body;
        console.log(username, password);
        // password=parseInt(password);     
         const user = await db
          .collection("UserInformation")
          .findOne({ username, password });
          console.log(user,"data");
          
        if (user) {

          res.json({ message: "Login successful" });
        } else {
          res.status(401).json({ error: "Invalid username or password" });
        }
      } catch (err) {
        console.error("Error handling login:", err);
        res.status(500).json({ error: "Error handling login" });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
