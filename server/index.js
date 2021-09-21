import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import shopsRoute from './routes/shops.js';
import districtRoute from './routes/districts.js';

const app = express();
app.use(cors());

dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

const CONNECTION_URL = process.env.MONGODB_URL;

const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  // useCreateIndex: true
})
.then(console.log("Connected to MongoDB"))
.catch((error) => console.log(error.message));


app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/shops', shopsRoute);
app.use('/districts', districtRoute);

app.listen(PORT, () => {
  console.log(`Backend is running on port : ${PORT}`);
});