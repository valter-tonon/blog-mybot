import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const MenuWrapper = styled.nav `
@import url('https://fonts.googleapis.com/css?family=Teko&display=swap');
    font-family: 'Teko', sans-serif;
    display: flex;
    padding: 2rem 10rem;
    justify-content: space-between;
    
 

   
`
export const Brand = styled.div`
      div{
       display:flex;
       font-family: 'Teko', sans-serif;

   } 
   a{
        font-family: 'Teko', sans-serif;
        font-size: 3rem;
        font-weight: 700;
        color:#444;
        text-decoration: none;
        
        
    }
`
export const Div = styled.div `
display: flex;
    align-items: center;


       
    button{
        height: 2rem;
        background: #1fa1f2;
        border:none;
        border-radius: 3px;
        align-self: top;
        transition: background 1s;
        display: flex;

        &:hover{
            background: #7159c1;
        }
    }
    `

export const LinkCover = styled(AniLink)`
@import url('https://fonts.googleapis.com/css?family=Teko&display=swap');
        text-decoration:none;
        color: #fff;
        font-family: 'Teko', sans-serif;
        font-size: 1.8rem;
        margin-right: 20px;
        font-weight: 600;
        transition: color 1s;
        margin-top: 5px;

        &:hover{
            color: #1fa1f2;
        }


`

