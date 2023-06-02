import styled from "styled-components"

export const StyledSelect = styled.div`
    display: flex;
    flex-direction: column;
    width: 88%;
    height: fit-content;

    select {
        width: 100%;
        height: 3.3125rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 16px;
        background: #F8F9FA;
        border: 2px solid #F8F9FA;
        border-radius: 8px;
        font-family: var(--font-primary);
    }

    select:focus{
        border: 2px solid var(--color-grey-4)
    }
`