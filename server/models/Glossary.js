import mongoose from "mongoose";
const { Schema } = mongoose;

// redpoint: String
// onSight: String
// flash: String

const glossarySchema = new Schema([
  {
    term: String,
    description: String,
  },
]);

export default mongoose.model("Glossary", glossarySchema);
