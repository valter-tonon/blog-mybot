import styled from 'styled-components'
import media from 'styled-media-query'

export const PostWrapper = styled.div `
    background: transparent;
    padding:0;
    display:flex;
    flex-direction: row;
    max-width:50rem;
    max-height: 25rem;
    margin: 30px auto 20px;
    transition: transform 3s;

    &:hover{
        transform: translateY(-20px);
    }
    ${media.lessThan("large")`
        flex-direction: column;
        margin-left: 2.5rem;
        display: flex;
        margin-top: 90px;
        width: 30rem;
        height:15rem;
   `}
    
`
export const Img= styled.div `
    
    width: 50%; 
    ${media.lessThan("large")`
       width:25%;
   `}
    img{
        width:25rem;
        height:100%;
        ${media.lessThan("large")`
        width:18rem;
   `}
    }
   

`
export const Texts = styled.div `
    flex: 1;
    width:50%;
    height:100%;
    background: #eeee;
    align-items: center;
    padding: 24px;
    ${media.lessThan("large")`
       width:50%;
       
   `}
    
    h1,h2,h3{
        color: #222;

    }
    p{
        color:#555;
        font-size: 12px;
    }
    h2{
        font-size: 30px;
        font-weight: 600;
       
        ${media.lessThan("large")`
            font-size: 20px,
   `}
    }
    h3{
        margin-top: 20px;
        font-size: 20px;
    }
    button{
        margin-top: 15px;
        padding: 10px 30px;
        font-size: 18px;
        background: none;
        border:1px solid #555;
        border-radius: 4px;
        transition: border 1s , color 1s;

        &:hover{
            border:1px solid #1fa1f2;
            color: #1fa1f2;
        }

    }

`