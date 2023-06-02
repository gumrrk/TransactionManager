import styled from "styled-components"

export const StyledButton = styled.div`
    display: flex;
    flex-direction: column;
    width: 88%;
    height: fit-content;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 3.3125rem;
        padding: 0rem 1rem;
        background: var(--color-color-primary);
        border: .125rem solid var(--color-color-primary);
        border-radius: .5rem;
        margin-top: 1rem;
        margin-bottom: .75rem;
}

    button:hover{
        background: var(--color-color-primary-2);
        border: .125rem solid var(--color-color-primary-2);
    }
`