import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-color-primary: #4FB0C6;
        --color-color-primary-2: #4F86C6;
        --color-color-secondary: #03b898;
        --color-color-secondary-2: #ff0000;

        --color-grey-4: #212529;
        --color-grey-3: #343a40;
        --color-grey-2: #e9ecef;
        --color-grey-1: #f8f9fa;
        --color-grey-after: #868E96;

        --color-black: #000000;
        --color-white: #ffffff;

        --font-primary: "Nunito", sans-serif;
        --font-secondary: "Inter", sans-serif;
    }

    body {
        width: 100vw;
        overflow-x: hidden;
    }

    section {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #root {
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 1024px) {
        main {
            display: flex;
            flex-direction: row;   
            gap: 3.75rem;
            align-items: start;
        }

        section {
            flex-direction: column;
        }
}
`