import React from 'react' 
import Logo from '../Logo'
import HeaderContent from './content'
import Menu from '../../components/Menu'

import { Wrapper , Div } from './style'

const Header = ()=>(
    <Wrapper>
    <Menu/>
        <Div>
        <div>
            <Logo/>
             </div>
            
            <HeaderContent/>
           
        </Div>
    </Wrapper>
)
export default Header