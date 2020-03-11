import React from "react"
import {useStaticQuery, graphql} from 'gatsby'



const HeaderContent = () =>{
    const{
        site:{
            siteMetadata:{description},
        },
    } = useStaticQuery(graphql `
    query MyQuery {
      site{
        siteMetadata {
          description,
        
        }
      }
    }
    `)

return(
   
   
      <>
            
          <h2>{description}</h2>
           
            </>

)
}

export default HeaderContent
