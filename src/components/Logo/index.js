import React from 'react'
import { useStaticQuery,graphql} from 'gatsby'
import { Logs }from './style'

const Logo = () =>{
    const { LogoImage } = useStaticQuery(
        graphql ` 
            query{
                LogoImage: file(relativePath: { eq: "Fundologo.png"}){
                    childImageSharp{
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )
    return <Logs fluid={LogoImage.childImageSharp.fluid} />
}
export default Logo