import React from 'react'
import {Search} from '@styled-icons/boxicons-solid/Search'

import {MenuWrapper,Brand,LinkCover, Div} from './style'



const Menu = () =>(
    <MenuWrapper>
        <Brand><a href='http://mybot-mt5.ml'>Mybot</a></Brand>
        <Div className='procura '>
            <LinkCover to='/'  cover direction="right"
            bg="#16202c" duration= {1}><a>início</a></LinkCover>
           
            <LinkCover to='search'  cover direction="left"
            bg="#16202c" duration= {1}><button type='submit'><Search width='1.5rem' color='#eee'/></button></LinkCover>
        </Div>
    
    </MenuWrapper>
)
export default Menu
