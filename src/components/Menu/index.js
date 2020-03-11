import React from 'react'
import {Search} from '@styled-icons/boxicons-solid/Search'
import {MenuWrapper, Div} from './style'

import AniLink from 'gatsby-plugin-transition-link/AniLink'


const Menu = () =>(
    <MenuWrapper>
        <div><a href='http://mybot-mt5.ml'><h1 >Mybot</h1></a></div>
        <Div className='procura '>
            <AniLink to='/'  cover direction="right"
            bg="#16202c" duration= {1}><a>início</a></AniLink>
           
            <AniLink to='search'  cover direction="left"
            bg="#16202c" duration= {1}><button type='submit'><Search width='1.5rem' color='#eee'/></button></AniLink>
        </Div>
    
    </MenuWrapper>
)
export default Menu
