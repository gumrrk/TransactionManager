import styled from "styled-components";

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.0625rem;
  justify-content: center;
  width: 91vw;
  max-width: 35rem;
  padding-bottom: 2.125rem; 

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
    overflow-y: auto; 
    height: 76vh;
    margin-right: -1.625rem;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: #555555;
      border-radius: 3px;
    }
}
`;
