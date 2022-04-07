import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/header.scss"

const Header = () => (
  <header className="site-header">
    <div>
      <h1>
        <Link className="link" to="/">
          Famous Sport Climbing Routes
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
