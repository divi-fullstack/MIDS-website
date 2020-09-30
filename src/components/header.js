import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../static/images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = ({ siteTitle }) => (
  <header
   
  >
    <div
    className="container-fluid pt-3 pb-3 pl-5 pr-5"
    >
     <button className="header-menu"></button>
       <Link
          to="/"
          className="main-logo"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
         <img src={logo} alt="logo"/>
        </Link>
     
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
