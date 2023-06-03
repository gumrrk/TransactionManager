import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    height: 4.3125rem;
    box-shadow: 0rem .25rem 2rem -.75rem rgba(0, 0, 0, 0.25);
    background-color: var(--color-grey-1);
    margin-bottom: 1.8125rem;

    img {
        cursor: pointer;
        width: 13.75rem;
    }
`

export const StyledContainerHeader = styled.div`
    display: flex;
    width: min(91vw, 60.25rem);
    align-items: center;
`