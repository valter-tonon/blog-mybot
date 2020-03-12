import React from 'react' 
import Logo from '../Logo'
import HeaderContent from './content'
import Menu from '../../components/Menu'
import * as S from './style'

const Header = ()=>(
    <S.Wrapper>
    <Menu/>
        <S.Div>
        <div>
            <Logo/>
             </div>
            
            <HeaderContent />
           
        </S.Div>
    </S.Wrapper>
)
export default Header