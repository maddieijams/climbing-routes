import * as React from "react"
import { graphql } from "gatsby"
import "../styles/index.scss"
import { Link } from "gatsby"
import Header from "../components/header"

const Index = ({ data }) => (
  <div className="index-wrapper">
    <Header />
    <div className="card-wrapper">
      {data.climbingApi.getRoutes.map((route, i) => (
        <Link to={`/route/${route._id}`}>
          <article
            key={i}
            className="card"
            style={{
              backgroundImage: `url(${route.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <section className="card-content">
              <h3>{route.name}</h3>
              <p>{route.location}</p>
              <p>{route.grade}</p>
            </section>
          </article>
        </Link>
      ))}
    </div>
  </div>
)

export default Index

export const query = graphql`
  query GetRoutes {
    climbingApi {
      getRoutes {
        grade
        name
        location
        img
        _id
      }
    }
  }
`
