import mongoose from "mongoose";
const { Schema } = mongoose;

// const redpointSchema = new Schema({
//   name: String,
//   date: String,
//   img: String,
//   completed: Boolean,
// });

const routeSchema = new Schema([
  {
    name: String,
    grade: String,
    height: String,
    location: String,
    img: String,
    redpointF: {
      name: String,
      date: String,
      img: String,
      completed: Boolean,
    },
    redpointM: {
      name: String,
      date: String,
      img: String,
      completed: Boolean,
    },
    flash: {
      name: String,
      year: Number,
      img: String,
      completed: Boolean,
    },
  },
]);

export default mongoose.model("Route", routeSchema);
