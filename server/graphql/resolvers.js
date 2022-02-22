import Glossary from "../models/Glossary";
import Route from "../models/Route";

export default {
  Query: {
    getRoutes: () => Route.find({}),
    getRoute: (_, { _id }) => Route.findById(_id),
    getGlossary: () =>
      Glossary.find({}).sort((a, b) => a.term.localCompare(b.term)),
  },
  Mutation: {
    updateRoute: (_, { _id, ...rest }) =>
      Route.findByIdAndUpdate(_id, ...rest, { new: true }),
    updateGlossaryTerm: (_, { _id, ...rest }) =>
      Glossary.findByIdAndUpdate(_id, ...rest, { new: true }),
    deleteGlossaryTerm: async (_, { _id }) => {
      Glossary.findByIdAndRemove(_id)
        .then(() => ({ message: `Deleted tweet ${_id} successfully` }))
        .catch((err) => {
          throw err;
        });
    },
  },
};
