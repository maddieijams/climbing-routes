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
  {
    name: "Silence",
    grade: "9c (5.15d) - unconfirmed",
    height: "148ft",
    location: "Flatanger, Norway",
    img: "https://climbflatanger.com/wp-content/uploads/2013/05/elliott-foto-dan-bates.jpg",
    redpointF: null,
    redpointM: {
      name: "Adam Ondra",
      date: "September 3, 2017",
      img: "https://www.planetmountain.com/img/1/47316.jpg",
    },
    flash: null,
  },
  {
    name: "La Dura Dura",
    grade: "9b+ (5.15c)",
    height: "160ft",
    location: "Oliana, Spain",
    img: "https://27crags.s3.amazonaws.com/photos/000/156/156766/huge-951a00473544.jpg",
    redpointF: null,
    redpointM: {
      name: "Adam Ondra",
      date: "February 7, 2013",
      img: "https://eveningsends.com/wp-content/uploads/2013/02/ondra-la-dura-dura.jpg",
    },
    flash: null,
  },
  {
    name: "La Rambla",
    grade: "9a+ (5.15a)",
    height: "135ft",
    location: "Siurana, Catalonia",
    img: "https://www.twomoderngypsies.com/wp-content/uploads/2019/03/Siurana_raw-9.jpg",
    redpointF: {
      name: "Margo Hayes",
      date: "February 2017",
      img: "https://www.rockandice.com/wp-content/uploads/2017/09/Margo-Hayes-La-Rambla.jpg",
    },
    redpointM: {
      name: "Ramón Julián Puigblanqué",
      date: "March 8, 2003",
      img: "https://www.planetmountain.com/img/1/11340.jpg",
    },
    flash: null,
  },
  {
    name: "Action Directe",
    grade: "9a (5.14d)",
    height: "49ft",
    location: "Frankenjura, Germany",
    img: "https://www.planetmountain.com/img/1/39844.jpg",
    redpointF: {
      name: "Mélissa Le Nevé ",
      date: "May 2020",
      img: "https://www.planetmountain.com/img/1/65056.jpg",
    },
    redpointM: {
      name: "Wolfgang Güllich",
      date: "September 14, 1991",
      img: "https://preview.redd.it/58755lcub2jz.jpg?auto=webp&s=ae34544faa1a8093792123ddeff5f7d277522c5c",
    },
    flash: null,
  },
  {
    name: "Dreamcatcher",
    grade: "9a (5.14d)",
    height: "69ft",
    location: "Squamish, BC",
    img: "https://www.rockandice.com/wp-content/uploads/2017/09/EE-234-1-e1550604761162.jpg",
    redpointF: {
      name: "Paige Claassen",
      date: "September 1, 2021",
      img: "https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2021/12/09233827/DeKockDreamcatcher-4938-scaled-1.jpg",
    },
    redpointM: {
      name: "Chris Sharma",
      date: "September 2005",
      img: "https://gripped.com/wp-content/uploads/2014/05/dc.jpg",
    },
    flash: null,
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
  await Route.deleteMany({});
  await Route.insertMany(seedRoutes);
  await Glossary.deleteMany({});
  await Glossary.insertMany(seedGlossary);
};

seedDb().then(() => mongoose.connection.close());
