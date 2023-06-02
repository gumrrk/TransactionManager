import styled from "styled-components";

export const StyledCard = styled.li`
  section {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.625rem;
    border-radius: 4px;
    background-color: var(--color-grey-1);
    width: min(91vw, 35rem);
    padding: 0.5rem 0.875rem 1.1875rem 0.875rem;

    @media (min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
  }

  section:hover, section:focus {
    background: var(--color-white);
    box-shadow: 0px 4px 42px -12px rgba(0, 0, 0, 0.25);
    }


  section[datatype="Entrada"] {
    border-left: 0.25rem solid var(--color-color-secondary);
  }

  section[datatype="Saída"] {
    border-left: 0.25rem solid var(--color-grey-2);
  }

  button {
    display: flex;
    width: 48px;
    height: 20px;
    justify-content: center;
    align-items: center;
    font-family: var(--font-primary);
    font-style: normal;
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 0.875rem;
    color: var(--font-grey-4);
  }
`;

export const StyledDiv1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    @media (min-width: 1024px) {
        gap: 1rem;
    }
`

export const StyledDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;

    @media (min-width: 1024px) {
        align-items: flex-end;
    }
`