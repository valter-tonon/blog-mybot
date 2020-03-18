import styled from 'styled-components'
import media from 'styled-media-query'
import fundo from '../../assets/images/diary.jpg'


export const Wrapper = styled.body `
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
    margin: 0;
    /*padding: 0 10rem 10rem ;*/
    outline:0;
    box-sizing : border-box;
    background-color: transparent;
    background-image: linear-gradient(90deg ,#7159c1,transparent,#8A2BE2), url(${fundo});
    background-size: stretch;
    align-items: center;
    font-family: 'Raleway', sans-serif;
`

export const Div = styled.section`
    padding: 0 10rem 10rem 10rem;
    display:flex;
   align-items: top;
   margin-top: 3rem;
   width: 100%;
   ${media.lessThan("large")`
        padding: 0;
        flex-direction: column;
        align-items: center;
        margin-top:1rem;
   `}
   img{
       max-width: 300px;
        height: 300px;
    
    
   }

    h1,h2,h3,p{
        color:#cccccc;
        text-align: center;
        margin-left: 100px;
        text-shadow: 1px 1px #666;

        ${media.lessThan("large")`
        margin: 20px;
        color:#fff;
   `}

        
    }
    h1{
        font-size:80px;

    
    }
    h2{
        font-size: 55px;
        font-weight:600;
        padding-right: 16rem;

            ${media.lessThan("large")`
            font-size: 25px;
            text-align: center;
            padding-left: 15rem;
            padding-bottom: 20px;
   `}
    }
    h3{
        font-size: 20px;
    }
    p{
        font-size:18px;
    }
`