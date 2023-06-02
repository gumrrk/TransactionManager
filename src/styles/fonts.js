import styled from "styled-components";

export const TextStyleTitle1 = styled.h1`
    font-size: 2.375rem;
    font-family: var(--font-primary);
    font-weight: 800;
    font-style: normal;
    line-height: 3rem;
    text-decoration: none;
    text-transform: none;
`

export const TextStyleTitle2 = styled.h1`
    font-size: 1.375rem;
    font-family: var(--font-primary);
    font-weight: 700;
    font-style: normal;
    line-height: 2.125rem;
    text-decoration: none;
    text-transform: none;
`

export const TextStyleTitle3 = styled.h1`
    font-size: 1rem;
    font-family: var(--font-primary);
    font-weight: 700;
    font-style: normal;
    line-height: 1.875rem;
    text-decoration: none;
    text-transform: none;
`

export const TextStyleTitle4 = styled.h1`
    font-size: .75rem;
    font-family: var(--font-primary);
    font-weight: 600;
    font-style: normal;
    line-height: 1.625rem;
    text-decoration: none;
    text-transform: none;
`

export const TextStyleHeadline = styled.h1`
    font-size: 1rem;
    font-family: var(--font-primary);
    font-weight: 400;
    font-style: normal;
    line-height: 1.625rem;
    text-decoration: none;
    text-transform: none;
`

export const TextStyleLabel = styled.label`
    font-size: .75rem;
    font-family: var(--font-secondary);
    font-weight: 400;
    font-style: normal;
    line-height: 1.375rem;
    text-decoration: none;
    text-transform: none;
    color: var(--color-grey-4);
    margin-bottom: .5625rem;
`

export const TextStyleAfter = styled.p`
    font-size: .75rem;
    font-family: var(--font-secondary);
    font-weight: 400;
    font-style: normal;
    line-height: 1.375rem;
    text-decoration: none;
    text-transform: none;
    color: var(--color-grey-after);
`

export const TextStyleButton = styled.button`
    font-size: 1rem;
    font-family: var(--font-secondary);
    font-style: normal;
    font-weight: 500;
    line-height: 1.1875rem;
    color: var(--color-white);
`

export const TextStyleH1 = styled.h1`
  font-size: 1rem;
  font-family: var(--font-primary);
  font-weight: 700;
  font-style: normal;
  line-height: 1.875rem;
  text-decoration: none;
  text-transform: none;
  color: var(--color-grey-4);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 20em;
`;

export const TextStyleP = styled.p`
  font-size: 0.75rem;
  font-family: var(--font-primary);
  font-weight: 400;
  font-style: normal;
  line-height: 1.375rem;
  text-decoration: none;
  text-transform: none;
  color: ${props => props.fontColor ? props.fontColor : "var(--color-grey-3)"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 14em;
`;

export const TextStyleValue = styled.h1`
    font-size: 1rem;
    font-family: var(--font-primary);
    font-style: normal;
    font-weight: 700;
    line-height: 1.875rem;
    text-decoration: none;
    text-transform: none;
    color: var(--color-color-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 9em;
`