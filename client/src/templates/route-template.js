import * as React from "react"
import "../styles/route-template.scss"
import Header from "../components/header"
import { navigate } from "gatsby"

const Route = ({ pageContext: { route } }) => {
  console.log(route)
  function descriptionText(redpoint, gender) {
    return `The first ${gender} ascent of ${route.name} was made by
          ${redpoint.name} on ${redpoint.date}.`
  }

  return (
    <div className="route-wrapper">
      <Header />
      <button onClick={() => navigate(-1)}>Go back</button>
      <article>
        <div className="flex-wrapper end">
          <div className="text">
            <h1>{route.name}</h1>
            <div className="route-detail"> {route.location}</div>
            <div className="route-detail">{route.grade}</div>
          </div>
        </div>
        <div className="image">
          <img src={route.img} alt="main-climb" />
        </div>
        {route.redpointM.name && (
          <>
            <div className="text climber-text">
              {descriptionText(route.redpointM, "male")}
            </div>
            <div className="flex-wrapper end">
              <div className="image">
                <img src={route.redpointM.img} alt="climber" />
              </div>
            </div>
          </>
        )}
        {route.redpointF.name && (
          <>
            <div className="flex-wrapper end">
              <div className="text climber-text">
                {descriptionText(route.redpointF, "female")}
              </div>
            </div>
            <div className="image">
              <img src={route.redpointF.img} alt="climber" />
            </div>
          </>
        )}
      </article>
    </div>
  )
}

export default Route
