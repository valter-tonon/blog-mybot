/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../components/Styles/GlobalStyles"


import { LayoutWrapper, LayoutMain} from './style'

//import Menu from '../../components/Menu'




const Layout = ({ children }) => {
  

  return (
    <LayoutWrapper>
      
      <GlobalStyles/> 
      
     <LayoutMain>{children}</LayoutMain>
       
 
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
