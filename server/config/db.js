import mongoose from "mongoose";

import { DB_URL } from "./constants.js";

mongoose.Promise = global.Promise;

mongoose.set("debug", true); // debug mode on

mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
