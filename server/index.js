import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import shopsRoute from "./routes/shops.js";
import userRoute from "./routes/users.js";
import cakeRoute from "./routes/cakes.js";
import recipeRoute from "./routes/recipe.js";
import cartRoute from "./routes/cart.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/shops", shopsRoute);
app.use("/recipe", recipeRoute);
app.use("/user", userRoute);
app.use("/cakes", cakeRoute);
app.use("/cart", cartRoute);

app.get("/", (req, res) => {
  res.send("Helo to my cake shop");
});

const CONNECTION_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;

// db connection
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
