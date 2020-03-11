import React from 'react'
import propTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {LeftArrowAlt} from '@styled-icons/boxicons-solid/LeftArrowAlt'
import {RightArrowAlt} from '@styled-icons/boxicons-solid/RightArrowAlt'
import * as S from './style'


const Pagination = ({isFirst,isLast,currentPage,numPages,prevPage,nextPage})=>(
    <S.PaginationWrapper>
    {!isFirst && 
       <AniLink to={prevPage} cover direction="up"
       bg="#16202c" duration= {1}> <LeftArrowAlt width='1.5rem'/> página anterior</AniLink>}
         
         <p>{currentPage} de {numPages}</p>
        
    {!isLast && 
        <AniLink to={nextPage} cover direction="down"
        bg="#16202c" duration= {1}> próxima página<RightArrowAlt width='1.5rem'/> </AniLink>}
       
       
    </S.PaginationWrapper>


)
Pagination.propTypes= {
    isFirst: propTypes.bool.isRequired,
    isLast:propTypes.bool.isRequired,
    currentPage:propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    prevPage: propTypes.string,
    nextPage: propTypes.string,

}

export default Pagination