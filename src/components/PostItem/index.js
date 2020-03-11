import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import imgpost from '../../assets/images/1.jpg'
import {PostWrapper, Img, Texts} from './style'




const PostItem = ({slug,category,date,timeToRead,title,description})=> {
   
    
    return(
    <PostWrapper className = 'item'>
    <Img>
            <img src={imgpost} alt='img Post' />
        </Img>
      <Texts>
            <p><i>Postado em</i> {date} - {timeToRead} min de leitura</p>
            <h2>{title}</h2>
            <p>{category}</p>
            <h3>{description}</h3>
            <Link to = {slug }><button>Ir para post &#10095;</button></Link>
        </Texts>
        
        
    </PostWrapper>
    )
}
PostItem.propTypes ={
    slug:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    timeToRead:PropTypes.string.isRequired,
    category:PropTypes.string.isRequired
}

export default PostItem