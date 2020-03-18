import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImgPost = () =>{
    const { imgpost } = useStaticQuery(
        graphql `
            query{
                imgpost : file(relativePath: { eq: "2.jpg"}){
                    childImageSharp{
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )
    return <Img fluid={imgpost.childImageSharp.fluid}/>
}
export default ImgPost