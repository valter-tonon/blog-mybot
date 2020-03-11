import styled from 'styled-components'

export const MenuWrapper = styled.nav `
@import url('https://fonts.googleapis.com/css?family=Teko&display=swap');
    font-family: 'Teko', sans-serif;
    display: flex;
    padding: 2rem 1rem;
    justify-content: space-between;
    
   div{
       display:flex;
       font-family: 'Teko', sans-serif;

   }
    


    a{
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
        
    }
    
    h1{
        font-family: 'Teko', sans-serif;
        font-size: 3rem;
        font-weight: 700;
        color:#444;
        
        
    }
    input{
        height: 2rem;
        border-radius: 3px;
        border:none;
    }
    
    
    button{
        height: 2rem;
        background: #1fa1f2;
        border:none;
        border-radius: 3px;
        align-self: top;
        transition: background 1s;

        &:hover{
            background: #7159c1;
        }
    }
`
export const Div = styled.div `
    align-items: center;
    `
