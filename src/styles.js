import {createGlobalStyle} from "styled-components"

// Global styles
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --light-black: #24232c;
        --gray: #817d92;
        --white: #e6e5ea;
        --black: #18171f;
        --green: #a4ffaf;
        --red: #f64a4a;
        --orange: #fb7c58;
        --yellow: #f8cd65;

        font-family: "JetBrains Mono", serif;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        background-color: var(--black);
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
