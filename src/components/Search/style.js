import styled from 'styled-components'
import media from 'styled-media-query'

export const SearchWrapper = styled.section `
    background: #16202c;
    display:flex;
    flex-direction: column;
    width: 100%;
    transition: opacity 0.4s;

    .ais-InstantSearch_root{
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100%;
    }
    .ais-SearchBox,.ais-Stats{
        padding: 0.5rem 3rem;
       
        ${media.lessThan("large")`
      padding: 0.5rem 1rem;
    `}
    }
    .ais-SearchBox{
        padding-top: 6rem;

        ${media.lessThan("large")`
      padding-top: 1rem;
    `}
    }
    .ais-Stats{
        color:#9988a6;
    }

    body#grid & {
    .ais-Hits-List{
        background-color: var(--borders);
        border-bottom: 1px solid var(--borders);
        border-top: 1px solid var(--borders);
        display: grid;
        grid-area:card;
        grid-gap: 1px;
        grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
        margin-top: 2rem;
    }

        .ais-Hits-item{
            background-color:#8899a6 ;
        }

    }

    .ais-SearchBox-input{
        background: none;
        border: none;
        border-bottom: 1px solid #38444d;
        color: #8899a5;
        display: flex;
        font-size: 1.5rem;
        padding: 0.5rem;
        width:100%;

        &::placeholder{
            color:#8899a6;
        }
    }
    .ais-SearchBox-submit,
    .ais-SearchBox-reset{
        display:none;
    }

`