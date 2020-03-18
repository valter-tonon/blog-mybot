import styled from "styled-components"
import media from "styled-media-query"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid #38444c;
  border-top: 1px solid  #38444c;
  background: #222;
  display: flex;
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  background:#16202c;
  color: #fff;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  
  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}
  
  &:hover {
    background:#1fa1f2;
  }
  &.previous {
    border-right: 1px solid #38444dyarn;
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`