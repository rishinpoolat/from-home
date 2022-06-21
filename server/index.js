import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import shopsRoute from "./routes/shops.js";
import userRoute from "./routes/users.js";
import cakeRoute from "./routes/cakes.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/shops", shopsRoute);
app.use("/user", userRoute);
app.use("/cakes", cakeRoute);
app.get("/", (req, res) => {
  res.send("Helo to my cake shop");
});

const CONNECTION_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
