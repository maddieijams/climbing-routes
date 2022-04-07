const path = require("path")

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      climbingApi {
        getRoutes {
          _id
          name
          grade
          location
          img
          redpointF {
            name
            date
            img
            completed
          }
          redpointM {
            completed
            img
            date
            name
          }
          flash {
            completed
            img
            year
            name
          }
        }
      }
    }
  `)
  data.climbingApi.getRoutes.forEach(route => {
    actions.createPage({
      path: `/route/${route._id}`,
      component: path.resolve(`./src/templates/route-template.js`),
      context: { route },
    })
  })
}
