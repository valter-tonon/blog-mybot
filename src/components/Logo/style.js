import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'


export const Logs = styled(Img) `
    max-width: 300px;
    max-height: 300px;

${media.lessThan("large") `
    height: 8rem;
    width: 8rem;
`}
`