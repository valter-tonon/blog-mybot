import React from "react"
import { graphql } from "gatsby"
import Particles from 'react-particles-js'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import PostItem from '../components/PostItem'
import Pagination from "../components/Pagination"
import * as S from '../components/ListWrapper/style'

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const {currentPage, numPages} = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage -1 === 1 ? '/' : `page/${currentPage -1}`
  const nextPage = `/page/${currentPage +1}`

  return (
    <Layout>
      <SEO title="Home" />
      <S.ListWrapper>
        <Header/>
        <div>
        <div
        style={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <Particles />
        <div
        className = 'post'
          style={{
            position: "absolute",
            top:-100 ,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
        
        {postList.map(({node:{frontmatter:{image, description,date, title}
          ,timeToRead,
          fields : {slug}}})=>
        ( <PostItem
          slug={slug}
          date={date}
          timeToRead= {timeToRead}
          title={title}
          description={description}/>
          ))}
        </div>
        <Particles/>
        </div>
        </div>
      
      </S.ListWrapper>
      <Pagination isFirst={isFirst} isLast={isLast} currentPage={currentPage} 
      numPages={numPages} prevPage={prevPage} nextPage={nextPage} />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList