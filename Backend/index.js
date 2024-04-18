import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3001;

//connect to mongoDB ---->start

const URI = process.env.MongoDBURI;

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error", error);
}

//connect to mongoDB ---->end

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
