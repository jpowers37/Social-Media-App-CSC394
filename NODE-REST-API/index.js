const express = require("express");
const app = express();
//const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
//const multer = require("multer");
const router = express.Router();
const path = require("path");

dotenv.config();


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://CardinalAdmin:b7gkD9wNI1j4BYpn@cardinaldatabase.pav6uxd.mongodb.net/?retryWrites=true&w=majority&appName=CardinalDataBase";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));



app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8800, ()=>{
    console.log("Backend server is running")
});