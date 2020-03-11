import styled from 'styled-components'

export const ListWrapper = styled.section `
body#grid & {
    background-color: #16202c;
    border-bottom: 1px solid  #6666;
    display: grid;
    grid-area: card;
    grid-gap:1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));

}
`