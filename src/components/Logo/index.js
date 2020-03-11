import React from 'react'
import { useStaticQuery,graphql} from 'gatsby'
import { Logs }from './style'

const Logo = () =>{
    const { LogoImage } = useStaticQuery(
        graphql ` 
            query{
                LogoImage: file(relativePath: { eq: "Fundologo.png"}){
                    childImageSharp{
                        fixed(width: 300,height: 300){
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )
    return <Logs fixed={LogoImage.childImageSharp.fixed} />
}
export default Logo