import styled from "styled-components"

export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 88%;
    height: fit-content;

    input {
        width: 100%;
        height: 3.3125rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0rem 1rem;
        background: var(--color-grey-1);
        border: .125rem solid var(--color-grey-1);
        border-radius: .5rem;
        font-family: var(--font-primary);
    }

    input:focus{
        border: .125rem solid var(--color-grey-4);
    }
`