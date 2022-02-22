import mongoose from "mongoose";
import Glossary from "../models/Glossary.js";
import Route from "../models/Route.js";
import { DB_URL } from "../config/constants.js";

mongoose
  .connect(DB_URL)
  .then(() => console.log("mongo connected, seeding data ^_^"))
  .catch((err) => console.log(err));

const seedRoutes = [
  {
    name: "Biographie (aka Realization)",
    grade: "9a+ (5.15a)",
    height: "115ft",
    location: "Ceuse mountain, France",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/C%C3%A9%C3%BCse_secteurs_Berlin_et_Biographie.jpg/960px-C%C3%A9%C3%BCse_secteurs_Berlin_et_Biographie.jpg",
    redpointF: {
      name: "Margo Hayes",
      date: "September 24, 2017",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2018%2F03%2F03211241%2Fmargo-hayes-promo.jpg",
    },
    redpointM: {
      name: "Chris Sharma",
      date: "July 18, 2001",
      img: "https://images.squarespace-cdn.com/content/v1/5624ebace4b0bca6fa64f58b/1515596574684-QY9PQ3OA097TK2VUDP7H/GzXlSFK.jpg?format=2500w",
    },
    flash: {
      name: "Adam Ondra",
      year: 2012,
      img: "https://www.lacrux.com/wp-content/uploads/2018/07/Adam-Ondra-Die-Freude-%C3%BCber-die-Onsight-Begehung-von-First-Flight-ist-gross.jpg",
      completed: false,
    },
  },
];

const seedGlossary = [
  {
    term: "Redpoint",
    description:
      "In sport climbing, redpointing means to free-climb a route while lead climbing, but after having practiced the route beforehand (either by hangdogging or top roping).",
  },
  {
    term: "Onsight",
    description:
      "A clean ascent made on the first attempt without prior practice or beta.",
  },
  {
    term: "Flash",
    description:
      "To successfully and cleanly complete a climbing route on the first attempt after having received beta of some form. Also refers to an ascent of this type.",
  },
];

const seedDb = async () => {
  // delete all data 1st
  //   await Route.deleteMany({})
  //   await Glossary.deleteMany({})
  await Route.insertMany(seedRoutes);
  await Glossary.insertMany(seedGlossary);
};

seedDb().then(() => mongoose.connection.close());
